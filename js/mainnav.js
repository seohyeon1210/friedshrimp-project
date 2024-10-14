function redirectToProfilePage() {
    // 만약 특정 이미지에 대한 추가 작업이 필요하다면, 여기서 id를 참조 가능
    let profileImage = document.getElementById('pro-image');
    console.log(profileImage.src); // 이미지의 경로를 출력하거나 조작 가능

    // 이후 원하는 페이지로 이동
    window.location.href = './profilespage.html';
}



function emotionlevelm() {
    // 만약 특정 이미지에 대한 추가 작업이 필요하다면, 여기서 id를 참조 가능
    let profileImage = document.getElementById('emotion-image');
    console.log(profileImage.src); // 이미지의 경로를 출력하거나 조작 가능

    // 이후 원하는 페이지로 이동
    window.location.href = './emotionm.html';
}
