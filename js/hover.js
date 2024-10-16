
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

let teamName = '';
let teamSize = '';
let details = ''; // 날짜, 시간, 장소
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
    teamName = document.getElementById('title').value || '제목 없음';
    teamSize = document.getElementById('number').value || '없음';
    details = document.getElementById('date').value || '없음'; // 날짜, 시간, 장소
    description = document.getElementById('details').value || '상세 내용 없음';

    // 이미지 src 저장 (미리보기 이미지가 있으면)
    const previewImage = document.querySelector('.preview-container img');
    if (previewImage) {
        imageSrc = previewImage.src;
    }

    // 카드에 내용 업데이트
    // 카드에 내용 업데이트
    const cardBody = document.querySelector('.card-body');
    const cardTitle = cardBody.querySelector('h4');
    const cardDetails = cardBody.querySelector('p');

    cardTitle.textContent = teamName;
    cardDetails.innerHTML = `
        ${description}<br>
        인원수: ${teamSize}<br>
        날짜/시간/장소/회비: ${details}
`;
    closeDialog(); // 모달 닫기
    
}

// 게시글 상세보기 모달 열기 (자세히보기 버튼 클릭 시)
function openDetailModal() {
    document.getElementById('teamName').value = teamName;
    document.getElementById('teamSize').value = teamSize;
    document.getElementById('details').value = details; // 날짜, 시간, 장소
    document.getElementById('description').value = description;

    // 저장된 이미지가 있으면 상세보기 모달에 표시
    if (imageSrc) {
        document.querySelector('.postedit-box').src = imageSrc;
    }

    document.getElementById('myDialog1').showModal();
}

// 파일 선택 및 미리보기 핸들러
function handleFiles(files) {
    if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const imageUrl = e.target.result;

            // Update the preview image in the modal
            const previewContainer = document.querySelector('.preview-container');
            previewContainer.innerHTML = `<img src="${imageUrl}" alt="Preview Image" class="preview-image" />`;

            // Update the main card image
            const cardImage = document.querySelector('.card-header img');
            if (cardImage) {
                cardImage.src = imageUrl;
            }

            // 저장된 이미지 src 갱신
            imageSrc = imageUrl;
        };

        reader.readAsDataURL(file);
    }
}

// Function to search and display preview content in the result box
function opensearch() {
    const title = document.getElementById('title').value || '제목 없음';
    const details = document.getElementById('details').value || '상세 내용 없음';

    // Display the result in the search-result input field
    const resultInput = document.getElementById('resultInput');

    // Set the value of the result input field
    resultInput.value = `${title} - ${details}`;
}
let reportCount = 0; // 신고 횟수 초기화

// 신고하기 버튼 클릭 시
function reportPost() {
    const confirmation = confirm("신고하시겠습니까?");
    if (confirmation) {
        reportCount++; // 신고 횟수 증가
        document.getElementById('reportCount').textContent = reportCount; // UI에 업데이트
        alert(`게시물이 신고되었습니다. 현재 신고 횟수: ${reportCount}`);
    }
}
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
function filterPosts(searchTerm) {
    // 모든 카드 박스를 가져옵니다.
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        // 각 카드의 텍스트를 가져옵니다. (제목과 본문을 포함)
        const title = card.querySelector('h4').innerText.toLowerCase();
        const description = card.querySelector('p').innerText.toLowerCase();
        
        // 제목이나 본문에 검색어가 포함되어 있으면 해당 카드를 보여줍니다.
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';  // 검색어와 일치하는 카드는 표시
        } else {
            card.style.display = 'none';  // 일치하지 않으면 숨김
        }
    });
}

document.getElementById("searchInput").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase(); // 소문자로 변환하여 비교
    filterPosts(searchTerm);  // 입력에 따라 실시간 필터링
});
console.log(title, description); // 각 카드의 제목과 본문을 콘솔에 출력하여 확인
