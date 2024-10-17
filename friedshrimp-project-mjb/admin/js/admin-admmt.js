document.addEventListener("DOMContentLoaded", function () {
    const adModal = document.getElementById("adModal");
    const addAdButton = document.getElementById("addAdButton");
    const closeModal = document.getElementsByClassName("close")[0];
    const adForm = document.getElementById("adForm");
    const postTableBody = document.querySelector(".post-list tbody");
    const adImagePreview = document.getElementById("adImagePreview"); // 모달 내 이미지 미리보기 요소
    const modalTitle = adModal.querySelector("h2"); // 모달 제목 요소
    const submitButton = adForm.querySelector("button[type='submit']"); // 제출 버튼

    // 페이지 로드 시 모달창을 닫도록 설정
    adModal.style.display = "none";

    // 광고 추가 버튼 클릭 시 모달 열기
    addAdButton.addEventListener("click", function () {
        adModal.style.display = "block";
        clearForm(); // 폼 초기화
        modalTitle.textContent = "광고 추가"; // 모달 제목을 광고 추가로 설정
        submitButton.textContent = "추가"; // 버튼 텍스트를 추가로 설정
    });

    // 모달 닫기
    closeModal.addEventListener("click", function () {
        adModal.style.display = "none";
    });

    window.onclick = function (event) {
        if (event.target == adModal) {
            adModal.style.display = "none";
        }
    };

    // 광고 추가 폼 제출
    adForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // 광고 데이터 수집
        const title = document.getElementById("adTitle").value;
        const imageInput = document.getElementById("adImage");
        const imageUrl = URL.createObjectURL(imageInput.files[0]); // 선택한 이미지 URL 생성
        const startDate = document.getElementById("adStartDate").value;
        const endDate = document.getElementById("adEndDate").value;
        const description = document.getElementById("adDescription").value;

        // 테이블에 광고 추가 (이미지는 표시하지 않음)
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><input type="checkbox" class="post-checkbox"></td>
            <td>${startDate}</td>
            <td>${endDate}</td>
            <td>${title}</td>
            <td><button class="view-button" onclick="viewAdDetails('${title}', '${imageUrl}', '${startDate}', '${endDate}', '${description}')">상세보기</button></td>
        `;
        postTableBody.appendChild(newRow);

        // 개별 체크박스 클릭 시 전체 선택 체크박스 상태 업데이트
        updateCheckboxLogic();

        // 모달 닫기
        adModal.style.display = "none";

        // 폼 초기화
        adForm.reset();
    });

    // 이미지 미리보기 기능
    document.getElementById("adImage").addEventListener("change", function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                adImagePreview.src = e.target.result; // 미리보기 이미지 설정
                adImagePreview.style.display = "block"; // 이미지 표시
            };
            reader.readAsDataURL(file);
        }
    });

    // 검색 버튼 클릭 이벤트
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

    // 검색 입력 이벤트
    document.getElementById("searchInput").addEventListener("input", function() {
        const searchTerm = this.value.toLowerCase(); // 소문자로 변환하여 비교
        filterPosts(searchTerm);
    });

    // 전체 선택 체크박스 기능
    const selectAllCheckbox = document.getElementById("selectAll");
    selectAllCheckbox.addEventListener("change", function () {
        const checkboxes = document.querySelectorAll(".post-checkbox");
        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });

    // 게시물 필터링 함수
    function filterPosts(searchTerm) {
        const rows = document.querySelectorAll(".post-list tbody tr");
        rows.forEach(row => {
            const cells = row.cells;
            const registrationDate = cells[1].textContent.toLowerCase(); // 등록일 셀 가져오기
            const endDate = cells[2].textContent.toLowerCase(); // 마감일 셀 가져오기
            const title = cells[3].textContent.toLowerCase(); // 제목 셀 가져오기

            // 검색어가 등록일, 마감일, 제목 중 하나라도 포함되면 표시
            if (registrationDate.includes(searchTerm) || endDate.includes(searchTerm) || title.includes(searchTerm)) {
                row.style.display = ""; // 일치하면 표시
            } else {
                row.style.display = "none"; // 그렇지 않으면 숨김
            }
        });
    }

    // 상세보기 함수
    window.viewAdDetails = function(title, imageUrl, startDate, endDate, description) {
        // 모달에 기존 광고 데이터 표시
        document.getElementById("adTitle").value = title;
        document.getElementById("adImage").value = ""; // 이미지 URL은 설정하지 않음, 사용자에게 다시 선택하도록 함
        document.getElementById("adStartDate").value = startDate;
        document.getElementById("adEndDate").value = endDate;
        document.getElementById("adDescription").value = description;

        // 모달 내 이미지 표시
        adImagePreview.src = imageUrl; // 이미지 URL 설정
        adImagePreview.style.display = "block"; // 이미지 표시

        // 상세보기 모드로 제목과 버튼 텍스트 변경
        modalTitle.textContent = "광고 수정";
        submitButton.textContent = "수정";

        adModal.style.display = "block"; // 모달 열기
    };

    // 폼 초기화 함수
    function clearForm() {
        adForm.reset();
        adImagePreview.src = ""; // 이미지 초기화
        adImagePreview.style.display = "none"; // 이미지 숨김
    }

    // 개별 체크박스 클릭 시 전체 선택 체크박스 상태 업데이트
    function updateCheckboxLogic() {
        const checkboxes = document.querySelectorAll(".post-checkbox");
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", function () {
                const allChecked = Array.from(checkboxes).every(cb => cb.checked);
                selectAllCheckbox.checked = allChecked; // 모든 체크박스가 선택되면 전체 선택 체크박스도 선택
            });
        });
    }

    // 초기 페이지 로드 시 개별 체크박스와 전체 체크박스 동기화
    updateCheckboxLogic();
});

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
        alert("게시물이 삭제되었습니다."); // 삭제 완료 메시지
    }
});



