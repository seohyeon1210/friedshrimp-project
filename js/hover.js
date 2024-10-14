// 크루 모집 모달 열기
function openRecruitmentModal() {
    document.getElementById('myDialog').showModal();
}

// 크루 모집 모달 닫기
function closeDialog() {
    console.log("Close Dialog Function Called");
    document.getElementById('myDialog').close();
}

// 게시글 상세보기 모달 열기
function openDetailModal() {
    // 크루 모집 페이지에서 저장된 값을 상세보기 모달에 입력
    document.getElementById('teamName').value = teamName;
    document.getElementById('teamSize').value = teamSize;
    document.getElementById('details').value = details;
    document.getElementById('description').value = description;

    // 저장된 이미지가 있으면 상세보기 모달에 표시
    const detailImage = document.querySelector('#myDialog1 .postedit-box');
    if (imageSrc) {
        detailImage.src = imageSrc;
        detailImage.style.display = 'block'; // 이미지가 있으면 보이기
    } else {
        detailImage.style.display = 'none'; // 이미지가 없으면 숨기기
    }

    document.getElementById('myDialog1').showModal();
}

// 게시글 상세보기 모달 닫기
function closeDetailDialog() {
    document.getElementById('myDialog1').close();
}

// 파일 선택 및 크기 검사 (단일 파일)
document.getElementById('chooseFile').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        // 파일 크기 확인 (2MB 제한)
        if (file.size > 2 * 1024 * 1024) {
            alert('파일 크기는 2MB를 초과할 수 없습니다.');
            this.value = ''; // 파일 선택 초기화
            document.getElementById('previewImage').style.display = 'none'; // 미리보기 숨기기
            return;
        }

        // 파일 미리보기 및 저장
        const reader = new FileReader();
        reader.onload = function(event) {
            const preview = document.getElementById('previewImage');
            preview.src = event.target.result;  // 파일의 데이터를 미리보기 이미지로 설정
            preview.style.display = 'block'; // 미리보기 표시

            // 이미지 소스 저장
            imageSrc = event.target.result;
        }
        reader.readAsDataURL(file); // 파일을 데이터 URL로 읽기
    }
});

// 여러 파일 업로드를 위한 핸들러 (필요 시)
function handleFiles(files) {
    const previewContainer = document.querySelector('.preview-container');
    previewContainer.innerHTML = ''; // 이전 미리보기 초기화

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            img.style.width = 'auto'; // 미리보기 크기 조정
            img.style.marginRight = '10px'; // 이미지 간격
            previewContainer.appendChild(img);
        }
        reader.readAsDataURL(file);
    });
}
let teamName = '';
let teamSize = '';
let details = '';
let description = '';
let imageSrc = ''; // 이미지 src 저장

// 크루 모집 모달 열기
function openRecruitmentModal() {
    document.getElementById('myDialog').showModal();
}

// 크루 모집 모달 닫기
function closeDialog() {
    document.getElementById('myDialog').close();
}

// 등록 버튼 클릭 시, 데이터를 저장하고 모달 닫기
function saveAndCloseModal() {
    teamName = document.getElementById('title').value;
    teamSize = document.getElementById('number').value;
    details = document.getElementById('date').value;
    description = document.getElementById('details').value;

    // 이미지 src 저장 (미리보기 이미지가 있으면)
    const previewImage = document.querySelector('.preview-container img');
    if (previewImage) {
        imageSrc = previewImage.src;
    }

    closeDialog(); // 모달 닫기
}

// 게시글 상세보기 모달 열기 (자세히보기 버튼 클릭 시)
function openDetailModal() {
    document.getElementById('teamName').value = teamName;
    document.getElementById('teamSize').value = teamSize;
    document.getElementById('details').value = details;
    document.getElementById('description').value = description;

    // 저장된 이미지가 있으면 상세보기 모달에 표시
    if (imageSrc) {
        document.querySelector('.postedit-box').src = imageSrc;
    }

    document.getElementById('myDialog1').showModal();
}

// 파일 선택 및 미리보기 핸들러
function handleFiles(files) {
    const previewContainer = document.querySelector('.preview-container');
    previewContainer.innerHTML = ''; // 미리보기 초기화

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            img.style.width = 'auto'; // 이미지 크기 조정
            previewContainer.appendChild(img); // 이미지 미리보기 추가
        }
        reader.readAsDataURL(file); // 파일을 읽어 미리보기
    });
}
