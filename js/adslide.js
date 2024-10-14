let currentAdIndex = 0;
const ads = document.querySelectorAll('.ad-slides img');  // 광고 배너 이미지 선택
const totalAds = ads.length;

function showNextAd() {
    ads[currentAdIndex].style.display = 'none';  // 현재 이미지를 숨김
    currentAdIndex = (currentAdIndex + 1) % totalAds;  // 다음 이미지로 인덱스 이동
    ads[currentAdIndex].style.display = 'block';  // 다음 이미지를 표시
}

function startAdSlide() {
    // 모든 이미지를 숨기고 첫 번째 이미지만 표시
    for (let i = 0; i < totalAds; i++) {
        ads[i].style.display = 'none';
    }
    ads[0].style.display = 'block';
    
    // 5초마다 이미지 슬라이드 변경
    setInterval(showNextAd, 5000);
}

// 슬라이드 시작
window.onload = startAdSlide;