document.addEventListener("DOMContentLoaded", function () {
    const adModal = document.getElementById("adModal");
    const addAdButton = document.getElementById("addAdButton");
    const closeModal = document.getElementsByClassName("close")[0];
    const adForm = document.getElementById("adForm");
    const postTableBody = document.querySelector(".post-list tbody");
    const adImagePreview = document.getElementById("adImagePreview"); // 모달 내 이미지 미리보기 요소
    const adImageInput = document.getElementById("adImage"); // 이미지 파일 입력 필드
    let isEditMode = false; // 수정 모드 여부를 확인하기 위한 변수
    let editRow = null; // 수정할 행을 저장하는 변수
    let currentImageUrl = ''; // 현재 이미지 URL 저장

    // 페이지 로드 시 모달창을 닫도록 설정
    adModal.style.display = "none";

    // 광고 추가 버튼 클릭 시 모달 열기
    addAdButton.addEventListener("click", function () {
        adModal.style.display = "block";
        clearForm(); // 폼 초기화
        isEditMode = false; // 추가 모드로 전환
        document.querySelector("#adModal h2").innerText = "광고 추가"; // 모달 제목 변경
        adForm.querySelector("button[type='submit']").innerText = "추가"; // 버튼 텍스트 변경
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

    // 이미지 파일 선택 시 미리보기
    adImageInput.addEventListener("change", function () {
        const file = adImageInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                adImagePreview.src = e.target.result;
                adImagePreview.style.display = "block"; // 이미지 미리보기 표시
            };
            reader.readAsDataURL(file);
        }
    });

    // 광고 추가 및 수정 폼 제출
    adForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // 광고 데이터 수집
        const title = document.getElementById("adTitle").value;
        const startDate = document.getElementById("adStartDate").value;
        const endDate = document.getElementById("adEndDate").value;
        const description = document.getElementById("adDescription").value;
        let imageUrl = currentImageUrl; // 기존 이미지 URL 사용

        // 새 이미지가 선택된 경우 해당 이미지로 업데이트
        if (adImageInput.files[0]) {
            imageUrl = URL.createObjectURL(adImageInput.files[0]);
        }

        if (isEditMode && editRow) {
            // 수정 모드일 때: 해당 행 데이터를 수정
            editRow.cells[1].textContent = startDate;
            editRow.cells[2].textContent = endDate;
            editRow.cells[3].textContent = title;
            editRow.querySelector(".view-button").setAttribute("onclick", `viewAdDetails('${title}', '${imageUrl}', '${startDate}', '${endDate}', '${description}')`);
        } else {
            // 추가 모드일 때: 새로운 광고 추가
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td><input type="checkbox" class="post-checkbox"></td>
                <td>${startDate}</td>
                <td>${endDate}</td>
                <td>${title}</td>
                <td><button class="view-button" onclick="viewAdDetails('${title}', '${imageUrl}', '${startDate}', '${endDate}', '${description}')">상세보기</button></td>
            `;
            postTableBody.appendChild(newRow);
        }

        // 모달 닫기
        adModal.style.display = "none";

        // 폼 초기화
        adForm.reset();
    });

    // 상세보기 함수
    window.viewAdDetails = function(title, imageUrl, startDate, endDate, description) {
        // 수정 모드로 전환
        isEditMode = true;
        document.querySelector("#adModal h2").innerText = "광고 수정"; // 모달 제목 변경
        adForm.querySelector("button[type='submit']").innerText = "수정"; // 버튼 텍스트 변경

        // 모달에 기존 광고 데이터 표시
        document.getElementById("adTitle").value = title;
        document.getElementById("adStartDate").value = startDate;
        document.getElementById("adEndDate").value = endDate;
        document.getElementById("adDescription").value = description;

        // 이미지 미리보기 표시
        adImagePreview.src = imageUrl;
        adImagePreview.style.display = "block"; // 이미지 미리보기 표시
        currentImageUrl = imageUrl; // 현재 이미지 URL 저장

        // 수정할 행 저장
        editRow = [...postTableBody.querySelectorAll("tr")].find(
            row => row.cells[3].textContent === title && row.cells[1].textContent === startDate
        );

        adModal.style.display = "block"; // 모달 열기
    };

    // 폼 초기화 함수
    function clearForm() {
        adForm.reset();
        adImagePreview.src = ""; // 이미지 초기화
        adImagePreview.style.display = "none"; // 이미지 숨김
        editRow = null; // 수정할 행 초기화
        currentImageUrl = ''; // 이미지 URL 초기화
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



