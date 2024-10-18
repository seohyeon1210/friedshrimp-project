function redirectToProfilePage() {
    // 만약 특정 이미지에 대한 추가 작업이 필요하다면, 여기서 id를 참조 가능
    let profileImage = document.getElementById('pro-image');
    console.log(profileImage.src); // 이미지의 경로를 출력하거나 조작 가능

    // 이후 원하는 페이지로 이동
    window.location.href = './user-editprofile.html';
}



function emotionlevelm() {
    // 만약 특정 이미지에 대한 추가 작업이 필요하다면, 여기서 id를 참조 가능
    let profileImage = document.getElementById('emotion-image');
    console.log(profileImage.src); // 이미지의 경로를 출력하거나 조작 가능

    // 이후 원하는 페이지로 이동
    window.location.href = './emotionm.html';
}


function openEmotionPopup() {
    window.open('./emotionm.html', 'emotionPopup', 'width=700,height=500');
}

// window.onload = function () {
//     document.getElementById("pro-image").src = `${localStorage.getItem(
//         "profileImage"
//     )}`;
// };

window.onload = function () {
    // 프로필 이미지 설정
    document.getElementById("pro-image").src = `${localStorage.getItem("profileImage")}`;
    
    // 광고 슬라이드 설정
    let currentAdIndex = 0;
    const ads = document.querySelectorAll('.ad-slides img');
    const totalAds = ads.length;

    function showNextAd() {
        ads[currentAdIndex].style.display = 'none';
        currentAdIndex = (currentAdIndex + 1) % totalAds;
        ads[currentAdIndex].style.display = 'block';
    }

    function startAdSlide() {
        for (let i = 0; i < totalAds; i++) {
            ads[i].style.display = 'none';
        }
        ads[0].style.display = 'block';
        setInterval(showNextAd, 6000);
    }

    // 광고 슬라이드 시작
    startAdSlide();
};