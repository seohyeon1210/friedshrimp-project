// 파일 업로드
function DropFile(dropAreaId, fileListId){
    let dropArea = document.getElementById(dropAreaId);

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
// const titleElement = document.getElementById("titleByhoney"); // const 변수명 = document.getElementById("html아이디명")
// const contentElement = document.getElementById("contentByhoney");
// const submitButton = document.getElementById("submitByhoney");

// function save_honey() {
//     localStorage.setItem("titleByhoney", titleElement); // 첫번째 매개변수는 key값인 저장될 값의 이름, 두번째 매개변수는 value값인 실제로 저장될 값
//     localStorage.setItem("contentByhoney", contentElement);

//     let userTip = { titleByhoney: titleElement.value, contentByhoney: contentElement.innerText }
//     localStorage.setItem("userTip", JSON.stringify(userTip));
// }

// 탑 버튼 스크롤
function move_honey() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

// 글쓰기 모달
const modal = document.querySelector("#honey_modal");
const modalOpen = document.getElementById("wrtieBtn"); 
const modalClose = document.getElementById("exitBtn");

modal_honey = function () {
    modal.style.display = "block";
};

modal_exit = function () {
    modal.style.display = "none";
};

const select_image = document.querySelector(".select-img");
const input_file = document.querySelector("#modalFile");
const img_area = document.querySelector(".img-area");

// 파일 선택
// select_image.addEventListener("click", function () {
//     input_file.click();
// })

// input_file.addEventListener("change", function () {
//     const img_honey = this.files[0] // 배열에 저장
//     if (img_honey.size < 2000000) { // 이미지 크기 제한
//         const reader = new FileReader();
//         reader.onload = () => { // 즉시 실행
//             const all_img = img_area.querySelectorAll("img");
//             all_img.forEach(item => item.remove());
            
//             const url_img = reader.result;
//             const img = document.createElement("img");
//             img.src = url_img;

//             img_area.appendChild(img);
//             img_area.classList.add("active");
//             img_area.dataset.img = img_honey.name;
//         }
//         reader.readAsDataURL(img_honey);
//     } else {
//         alert("이미지는 2MB 이하여야 합니다.");
//     }
// })

function file_honey() {
    select_image.addEventListener("click", function () {
        input_file.click();
    });

    input_file.addEventListener("change", function () {
        const img_honey = this.files[0] // 배열에 저장
        if (img_honey.size < 2000000) { // 이미지 크기 제한
            const reader = new FileReader();
            reader.onload = () => { // 즉시 실행
                const all_img = img_area.querySelectorAll("img");
                all_img.forEach(item => item.remove());
            
                const url_img = reader.result;
                const img = document.createElement("img");
                img.src = url_img;

                img_area.appendChild(img);
                img_area.classList.add("active");
                img_area.dataset.img = img_honey.name;
            }
            reader.readAsDataURL(img_honey);
        } else {
            alert("이미지는 2MB 이하여야 합니다.");
        }
    });
}

// 글쓰기 로컬스토리지
const title_honey = document.querySelector(".modalTitle");
const text_honey = document.querySelector(".modalText");
const save_btn = document.querySelector(".accept");

function tip_honey() {
    localStorage.setItem("modalTitle", title_honey);
    localStorage.setItem("modalText", text_honey);

    let userTip = { modalTitle: title_honey.value, modalText: text_honey.value }
    localStorage.setItem("userTip", JSON.stringify(userTip));
};