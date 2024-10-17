document.addEventListener("DOMContentLoaded", function () {
    // 검색 기능 구현
    document.getElementById("searchButton").addEventListener("click", function() {
        const searchInput = document.getElementById("searchInput");
        if (searchInput.style.display === "none") {
            searchInput.style.display = "inline"; // 검색창 표시
            searchInput.focus(); // 검색창에 포커스
        } else {
            searchInput.style.display = "none"; // 검색창 숨김
            searchInput.value = ""; // 검색창 내용 초기화
            filterPosts(""); // 초기 상태로 필터링
        }
    });

    document.getElementById("searchInput").addEventListener("input", function() {
        const searchTerm = this.value.toLowerCase(); // 소문자로 변환하여 비교
        filterPosts(searchTerm);
    });

    // 전체 선택 기능 구현
    document.getElementById("selectAll").addEventListener("change", function() {
        const checkboxes = document.querySelectorAll(".post-checkbox");
        checkboxes.forEach(checkbox => {
            checkbox.checked = this.checked; // 전체 선택 여부에 따라 체크박스 상태 변경
        });
    });

    // 개별 체크박스 선택 시 전체 체크박스 상태 업데이트
    const checkboxes = document.querySelectorAll(".post-checkbox");
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            const allChecked = Array.from(checkboxes).every(cb => cb.checked);
            document.getElementById("selectAll").checked = allChecked; // 모든 체크박스가 선택되면 전체 선택 체크박스도 선택
        });
    });

    // 게시물 필터링 함수
    function filterPosts(searchTerm) {
        const rows = document.querySelectorAll(".post-list tbody tr");
        rows.forEach(row => {
            const cells = row.cells;
            const registrationDate = cells[1].textContent.toLowerCase(); // 등록일 셀 가져오기
            const author = cells[2].textContent.toLowerCase(); // 작성자 셀 가져오기
            const title = cells[3].textContent.toLowerCase(); // 제목 셀 가져오기
            const location = cells[4].textContent.toLowerCase(); // 장소 셀 가져오기

            // 검색어가 등록일, 작성자, 제목, 장소 중 하나라도 포함되면 표시
            if (registrationDate.includes(searchTerm) || author.includes(searchTerm) || title.includes(searchTerm) || location.includes(searchTerm)) {
                row.style.display = ""; // 일치하면 표시
            } else {
                row.style.display = "none"; // 그렇지 않으면 숨김
            }
        });
    }

    // 삭제 버튼 클릭 이벤트 리스너
    document.getElementById("deleteButton").addEventListener("click", function() {
        const checkboxes = document.querySelectorAll(".post-checkbox:checked"); // 체크된 체크박스 선택
        if (checkboxes.length === 0) {
            alert("삭제할 게시물을 선택해주세요."); // 체크된 항목이 없을 경우 경고
            return;
        }

        // 삭제 확인 창
        if (confirm("이 게시물을 삭제 하시겠습니까?")) {
            checkboxes.forEach(checkbox => {
                const row = checkbox.closest("tr"); // 체크된 체크박스의 행 찾기
                row.remove(); // 행 삭제
            });
            alert("게시물이 삭제 되었습니다."); // 삭제 완료 메시지
        }
    });

    // 페이징처리 영역
    let currentPage = 1; // 현재 페이지 번호
    const rowsPerPage = 10; // 페이지당 표시할 행 수
    const rows = document.querySelectorAll(".post-list tbody tr"); // 전체 행 가져오기
    const totalPages = Math.ceil(rows.length / rowsPerPage); // 총 페이지 수

    function displayRows() {
        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.forEach((row, index) => {
            if (index >= start && index < end) {
                row.style.display = ""; // 현재 페이지에 해당하는 행 표시
            } else {
                row.style.display = "none"; // 나머지 행 숨기기
            }
        });

        // 페이지별 체크박스 업데이트: 페이지별로 체크박스 상태를 동기화
        updateCheckboxState();
    }

    function updatePagination() {
        const pagination = document.getElementById("pageNumbers");
        pagination.innerHTML = ""; // 기존 페이지 번호 초기화

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement("a");
            pageLink.href = "#";
            pageLink.textContent = i;

            if (i === currentPage) {
                pageLink.style.fontWeight = "bold"; // 현재 페이지 강조
            }

            pageLink.addEventListener("click", function(event) {
                event.preventDefault();
                currentPage = i;
                displayRows();
                updatePagination();
            });

            pagination.appendChild(pageLink);
        }

        document.getElementById("prevPage").style.display = currentPage === 1 ? "none" : "inline";
        document.getElementById("nextPage").style.display = currentPage === totalPages ? "none" : "inline";
    }

    // 다음 페이지 버튼 클릭 이벤트
    document.getElementById("nextPage").addEventListener("click", function(event) {
        event.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            displayRows();
            updatePagination();
        }
    });

    // 이전 페이지 버튼 클릭 이벤트
    document.getElementById("prevPage").addEventListener("click", function(event) {
        event.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            displayRows();
            updatePagination();
        }
    });

    // 페이지별 체크박스 상태 동기화
    function updateCheckboxState() {
        const checkboxes = document.querySelectorAll(".post-checkbox:visible");
        const selectAllCheckbox = document.getElementById("selectAll");

        // 페이지의 모든 체크박스가 선택되었는지 확인
        const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);
        selectAllCheckbox.checked = allChecked; // 모든 체크박스가 선택되면 전체 선택 체크박스도 선택
    }

    // 초기 페이지 표시
    displayRows();
    updatePagination();
});


