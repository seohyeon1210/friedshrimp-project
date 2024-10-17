function openRecruitmentModal() {
    const modal = document.getElementById('myDialog');
    modal.showModal(); 
}

function closeDetailDialog() {
    const modal = document.getElementById('myDialog');
    modal.close(); 
}

// Open the new 'honey_Rmodal' modal when 신고 is clicked
function openReportModal() {
    const modal = document.getElementById('honey_Rmodal');
    modal.style.display = 'block'; // Show the modal
}

// Close the 'honey_Rmodal' modal
function rModal_exit() {
    const modal = document.getElementById('honey_Rmodal');
    modal.style.display = 'none'; // Hide the modal
}

// Handle the accept button in the modal
function report_accept() {
    alert("Report Accepted"); // Handle your report acceptance logic here
}



function handleFiles(files) {
    const file = files[0];
    if (file) {
        const sizeLimit = 2 * 1024 * 1024; 
            alert("파일 크기가 2MB를 초과할 수 없습니다.");
            return;
        }
        // Additional file handling logic here
    }

function saveAndCloseModal() {
    // Implement save logic here
    closeDetailDialog();
}
function inputLenFunc() {
    const inputs = document.querySelectorAll('.input-number');
    inputs.forEach(input => {
        const max = input.getAttribute('max');
        if (input.value > max) {
            input.value = max;
        }
    });
}

// 검색기능
function filterCards() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase(); // 입력값을 소문자로 변환
    const cards = document.querySelectorAll('.card'); // 모든 카드 요소 선택

    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase(); // 카드의 제목
        const date = card.querySelector('.card-body p:nth-of-type(1)').textContent.toLowerCase(); // 날짜
        const fee = card.querySelector('.card-body p:nth-of-type(3)').textContent.toLowerCase(); // 회비
        const location = card.querySelector('.card-body p:nth-of-type(2)').textContent.toLowerCase(); // 장소

        // 입력값이 카드의 제목, 날짜, 회비, 장소 중 하나에 포함되어 있으면 보이기
        if (title.includes(filter) || date.includes(filter) || fee.includes(filter) || location.includes(filter)) {
            card.style.display = ""; // 카드 보이기
        } else {
            card.style.display = "none"; // 카드 숨기기
        }
    });
}

// 업로드
function handleFiles(files) {
    const file = files[0];
    if (file) {
        const sizeLimit = 2 * 1024 * 1024; // 2MB limit
        if (file.size > sizeLimit) {
            alert("파일 크기가 2MB를 초과할 수 없습니다.");
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const previewImage = document.getElementById('previewImage');
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

// 이미지 미리보기 함수
function previewAndUpload(files) {
    const file = files[0];
    if (file) {
    const reader = new FileReader();

    reader.onload = function(event) {
    const imgElement = document.createElement('img');
    imgElement.src = event.target.result;
    const previewBox = document.getElementById('imagePreview');
    previewBox.innerHTML = '';  // 기존 미리보기 삭제
    previewBox.appendChild(imgElement);
    };

    reader.readAsDataURL(file);
}
}

// 모달의 저장 버튼 클릭 시 메인 페이지에 이미지 등록
function saveAndCloseModal() {
const previewBox = document.getElementById('imagePreview');
const mainPageBox = document.getElementById('mainPageImage');  // 메인 페이지의 이미지 위치

if (previewBox.firstChild) {
    mainPageBox.innerHTML = '';  // 기존 이미지 삭제
    mainPageBox.appendChild(previewBox.firstChild.cloneNode(true));  // 미리보기 이미지 복사
}

closeDetailDialog();  // 모달 닫기
}
