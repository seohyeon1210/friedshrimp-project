// 네비게이션 스크립트
var header = document.getElementById("nav-bar");
var btns = header.getElementsByClassName("n-btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// 프로필 수정 스크립트
// 프로필 이미지 업로드
let profileimage = document.getElementById("pro-image")
let input = document.getElementById("input")

input.addEventListener('change', () => {
    profileimage.src = URL.createObjectURL(input.files[0]);
})

const imageUpload = document.getElementById("input");

function edit_honey() {
    localStorage.setItem("imageUpload", imageUpload)
}

// 폼
// function submitForm() {
//     const formData = new FormData(document.getElementById('profileEdit'));

//     for (const pair of formData.entries()) {
//       console.log(pair[0] + ': ' + pair[1]);
//     }
// }
  
document.getElementById('profileEdit').addEventListener('submit', function(event) {
    event.preventDefault();  // 폼 제출 막기

    var oldPassword = document.getElementById('oldpw').value;
    var newPassword = document.getElementById('newpw').value;
    var confirmNewPassword = document.getElementById('newpw2').value;
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var gender = document.getElementById('gender').value;
    var image = document.getElementById('input').files[0];

    var isValid = true;

    if (newPassword !== confirmNewPassword) {
        alert('새 비밀번호가 일치하지 않습니다.');
        isValid = false;
    }

    if (isNaN(parseFloat(height)) || isNaN(parseFloat(weight))) {
        alert('키와 몸무게는 숫자여야 합니다.');
        isValid = false;
    }

    if (newPassword.length > 10) {
        alert('비밀번호는 최소 10자 이하이어야 합니다.');
        isValid = false;
    }

    if (isValid) {
        localStorage.setItem('password', newPassword);
        localStorage.setItem('height', height);
        localStorage.setItem('weight', weight);
        localStorage.setItem('gender', gender);

        if (image) {
            var reader = new FileReader();
            reader.onload = function() {
                var base64String = reader.result;
                localStorage.setItem('profileImage', base64String);
                alert('회원정보가 저장되었습니다.');
            };
            reader.readAsDataURL(image);
        } else {
            alert('회원정보가 저장되었습니다.');
        }
    }
});

window.onload = function() {
    if (localStorage.getItem('password')) {
        document.getElementById('oldpw').value = localStorage.getItem('password');
        document.getElementById('newpw').value = localStorage.getItem('password');
        document.getElementById('newpw2').value = localStorage.getItem('password');
    }

    if (localStorage.getItem('height')) {
        document.getElementById('height').value = localStorage.getItem('height');
    }

    if (localStorage.getItem('weight')) {
        document.getElementById('weight').value = localStorage.getItem('weight');
    }

    if (localStorage.getItem('gender')) {
        document.getElementById('gender').value = localStorage.getItem('gender');
    }

    if (localStorage.getItem('profileImage')) {
        document.getElementById('pro-image').src = localStorage.getItem('profileImage');
    }
};