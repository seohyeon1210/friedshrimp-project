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
    profileimage.src= URL.createObjectURL(input.files[0])
})

// 폼
function submitForm() {
    const formData = new FormData(document.getElementById('profileEdit'));

    for (const pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  }