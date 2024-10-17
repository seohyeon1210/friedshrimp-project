document.addEventListener("DOMContentLoaded", function () {
    const adModal = document.getElementById("adModal");
    const addAdButton = document.getElementById("addAdButton");
    const closeModal = document.getElementsByClassName("close")[0];
    const adForm = document.getElementById("adForm");
    const postTableBody = document.querySelector(".post-list tbody");
    const adImagePreview = document.getElementById("adImagePreview");
    const adImageInput = document.getElementById("adImage");
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");
    const selectAllCheckbox = document.getElementById("selectAll");
    let isEditMode = false;
    let editRow = null;
    let currentImageUrl = '';

    // 페이지 로드 시 모달창을 닫도록 설정
    adModal.style.display = "none";

    // 검색 버튼 클릭 시 검색창 표시/숨김
    searchButton.addEventListener("click", function () {
        if (searchInput.style.display === "none") {
            searchInput.style.display = "block";
        } else {
            searchInput.style.display = "none";
        }
    });

    // 광고 추가 버튼 클릭 시 모달 열기
    addAdButton.addEventListener("click", function () {
        adModal.style.display = "block";
        clearForm();
        isEditMode = false;
        document.querySelector("#adModal h2").innerText = "광고 추가";
        adForm.querySelector("button[type='submit']").innerText = "추가";
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
                adImagePreview.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    // 광고 추가 및 수정 폼 제출
    adForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const title = document.getElementById("adTitle").value;
        const startDate = document.getElementById("adStartDate").value;
        const endDate = document.getElementById("adEndDate").value;
        const description = document.getElementById("adDescription").value;
        let imageUrl = currentImageUrl;

        if (adImageInput.files[0]) {
            imageUrl = URL.createObjectURL(adImageInput.files[0]);
        }

        if (isEditMode && editRow) {
            editRow.cells[1].textContent = startDate;
            editRow.cells[2].textContent = endDate;
            editRow.cells[3].textContent = title;
            editRow.querySelector(".view-button").setAttribute("onclick", `viewAdDetails('${title}', '${imageUrl}', '${startDate}', '${endDate}', '${description}')`);
        } else {
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

        adModal.style.display = "none";
        adForm.reset();
        updateCheckboxLogic(); // 추가된 행에도 체크박스 로직 적용
    });

    // 상세보기 함수
    window.viewAdDetails = function (title, imageUrl, startDate, endDate, description) {
        isEditMode = true;
        document.querySelector("#adModal h2").innerText = "광고 수정";
        adForm.querySelector("button[type='submit']").innerText = "수정";
        document.getElementById("adTitle").value = title;
        document.getElementById("adStartDate").value = startDate;
        document.getElementById("adEndDate").value = endDate;
        document.getElementById("adDescription").value = description;
        adImagePreview.src = imageUrl;
        adImagePreview.style.display = "block";
        currentImageUrl = imageUrl;
        editRow = [...postTableBody.querySelectorAll("tr")].find(
            row => row.cells[3].textContent === title && row.cells[1].textContent === startDate
        );
        adModal.style.display = "block";
    };

    function clearForm() {
        adForm.reset();
        adImagePreview.src = "";
        adImagePreview.style.display = "none";
        editRow = null;
        currentImageUrl = '';
    }

    // 개별 체크박스 클릭 시 전체 선택 체크박스 상태 업데이트
    function updateCheckboxLogic() {
        const checkboxes = document.querySelectorAll(".post-checkbox");
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("change", function () {
                const allChecked = Array.from(checkboxes).every(cb => cb.checked);
                selectAllCheckbox.checked = allChecked;
            });
        });
    }

    // 전체 선택 체크박스 클릭 시 모든 체크박스 선택/해제
    selectAllCheckbox.addEventListener("change", function () {
        const checkboxes = document.querySelectorAll(".post-checkbox");
        checkboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });

    updateCheckboxLogic();
});

// 삭제 버튼 클릭 이벤트 리스너
document.getElementById("deleteButton").addEventListener("click", function () {
    const checkboxes = document.querySelectorAll(".post-checkbox:checked");
    if (checkboxes.length === 0) {
        alert("삭제할 게시물을 선택해주세요.");
        return;
    }

    if (confirm("이 게시물을 삭제 하시겠습니까?")) {
        checkboxes.forEach(checkbox => {
            const row = checkbox.closest("tr");
            row.remove();
        });
        alert("게시물이 삭제되었습니다.");
    }
});




