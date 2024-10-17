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

    // 전체 선택 체크박스 기능 구현
    const selectAllCheckbox = document.getElementById("selectAll");
    const checkboxes = document.querySelectorAll(".post-checkbox");

    selectAllCheckbox.addEventListener("change", function() {
        const isChecked = this.checked; // 전체 선택 체크박스의 체크 상태 확인
        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked; // 전체 선택 체크박스에 따라 체크 상태 설정
        });
    });

    // 개별 체크박스 선택 시 전체 선택 체크박스 상태 업데이트
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            const allChecked = Array.from(checkboxes).every(cb => cb.checked);
            selectAllCheckbox.checked = allChecked; // 모든 체크박스가 선택되면 전체 선택 체크박스도 선택
        });
    });

    // 게시물 필터링 함수
    function filterPosts(searchTerm) {
        const rows = document.querySelectorAll(".post-list tbody tr");
        rows.forEach(row => {
            const titleCell = row.cells[2].textContent.toLowerCase(); // 제목 셀 가져오기
            const dateCell = row.cells[1].textContent.toLowerCase(); // 날짜 셀 가져오기
            // 제목이나 날짜에 검색어가 포함되면 표시
            if (titleCell.includes(searchTerm) || dateCell.includes(searchTerm)) {
                row.style.display = ""; // 표시
            } else {
                row.style.display = "none"; // 숨김
            }
        });
    }

    // 삭제 버튼 클릭 이벤트 리스너
    document.getElementById("deleteButton").addEventListener("click", function() {
        const checkedCheckboxes = document.querySelectorAll(".post-checkbox:checked"); // 체크된 체크박스 선택
        if (checkedCheckboxes.length === 0) {
            alert("삭제할 게시물을 선택해주세요."); // 체크된 항목이 없을 경우 경고
            return;
        }

        // 삭제 확인 창
        if (confirm("이 게시물을 삭제 하시겠습니까?")) {
            checkedCheckboxes.forEach(checkbox => {
                const row = checkbox.closest("tr"); // 체크된 체크박스의 행 찾기
                row.remove(); // 행 삭제
            });
            alert("게시물이 삭제되었습니다."); // 삭제 완료 메시지
        }
    });
});

