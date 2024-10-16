// 파일 업로드
function DropFile(dropAreaId, fileListId){
    let dropArea = document.getElementById(dropAreaId);

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function handleFiles(files){
        files=[...files];
        // files.forEach(uploadFile);
        files.forEach(previewFile);
    }

    function previewFile(file){
        console.log(file);
        renderFile(file);
    }

    function renderFile(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function () {
          let img = dropArea.getElementsByClassName("preview")[0];
          img.src = reader.result;
          img.style.display = "block";
        };
      }

    return{
        handleFiles
    };
}

const dropFile = new DropFile("drop-file", "files");

// 로컬 스토리지 honeytip-postedit
const titleElement = document.getElementById("titleByhoney"); // const 변수명 = document.getElementById("html아이디명")
const contentElement = document.getElementById("contentByhoney");
const submitButton = document.getElementById("submitByhoney");

submitButton.addEventListener("click", () => {
    // console.log(titleElement.value);
    // console.log(contentElement.innerText); //contenteditable 요소에 console.log(contentElement.value);로 출력 시도하면 undefined가 뜸
    // contenteditable 속성은 input 요소와 달리 .value 속성이 없기 때문에, 그 안에 있는 텍스트 내용을 가져오려면 innerText 또는 innerHTML을 사용해야 함
    // innerText: 요소 내부의 텍스트만 가져옴
    // innerHTML: 요소 내부의 HTML 구조를 포함한 텍스트를 가져옴
    // localStorage.setItem("titleByhoney", titleElement); // 첫번째 매개변수는 key값인 저장될 값의 이름, 두번째 매개변수는 value값인 실제로 저장될 값
    // localStorage.setItem("contentByhoney", contentElement);

    let userTip = { titleByhoney: titleElement.value, contentByhoney: contentElement.innerText }
    localStorage.setItem("userTip", JSON.stringify(userTip));
})