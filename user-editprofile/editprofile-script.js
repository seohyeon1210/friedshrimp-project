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