document.addEventListener("DOMContentLoaded", function () {
    const adModal = document.getElementById("adModal");
    const addAdButton = document.getElementById("addAdButton");
    const closeModal = document.getElementsByClassName("close")[0];
    const adForm = document.getElementById("adForm");
    const postTableBody = document.querySelector(".post-list tbody");
    const adImagePreview = document.getElementById("adImagePreview"); // 모달 내 이미지 미리보기 요소

    // 페이지 로드 시 모달창을 닫도록 설정
    adModal.style.display = "none";

    // 광고 추가 버튼 클릭 시 모달 열기
    addAdButton.addEventListener("click", function () {
        adModal.style.display = "block";
        clearForm(); // 폼 초기화
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

    //밑에 "삭제하시겠습니까?" 팝업창 추가해서 주석처리 함
    // 삭제 버튼 클릭 이벤트
    // document.getElementById("deleteButton").addEventListener("click", function() {
    //     const checkboxes = document.querySelectorAll(".post-checkbox:checked"); // 체크된 체크박스 선택
    //     checkboxes.forEach(checkbox => {
    //         const row = checkbox.closest("tr"); // 체크박스의 가장 가까운 tr 찾기
    //         if (row) {
    //             row.remove(); // 해당 행 삭제
    //         }
    //     });
    // });

    // 전체 선택 기능
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

        adModal.style.display = "block"; // 모달 열기
    };

    // 폼 초기화 함수
    function clearForm() {
        adForm.reset();
        adImagePreview.src = ""; // 이미지 초기화
        adImagePreview.style.display = "none"; // 이미지 숨김
    }
});

// 삭제 버튼 클릭 이벤트 리스너
document.getElementById("deleteButton").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll(".post-checkbox:checked"); // 체크된 체크박스 선택
    if (checkboxes.length === 0) {
        alert(" 삭제할 게시물을 선택해주세요."); // 체크된 항목이 없을 경우 경고
        return;
    }

    // 삭제 확인 창
    if (confirm("이 게시물을 삭제 하시겠습니까?")) {
        checkboxes.forEach(checkbox => {
            const row = checkbox.closest("tr"); // 체크된 체크박스의 행 찾기
            row.remove(); // 행 삭제
        });
        alert("게시물이 삭제 되었습니다."); // 탈퇴 완료 메시지
    }
});


