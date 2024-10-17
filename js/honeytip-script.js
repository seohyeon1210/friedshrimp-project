// 파일 업로드
function DropFile(dropAreaId, fileListId){
    let dropArea = document.getElementById(dropAreaId);

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(e) {
        preventDefaults(e);

        dropArea.classList.add("hightlight");
    }

    function unhighlight(e){
        preventDefaults(e);

        dropArea.classList.remove("highlight");
    }

    function handleDrop(e){
        unhighlight(e);
        let dt = e.dataTransfer;
        let files= dt.files;

        handleFiles(files);

        const fileList = document.getElementById(fileListId);
            if(fileList){
                fileList.scrollTo({ top:fileList.scrollHeight });
            }
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
    
    dropArea.addEventListener("dragenter", highlight, false);

    dropArea.addEventListener("dragover", highlight, false);

    dropArea.addEventListener("dragleave", unhighlight, false);

    dropArea.addEventListener("drop", handleDrop, false);

    return{
        handleFiles
    };
}

const dropFile = new DropFile("drop-file", "files");

// 글쓰기

function formatDoc(cmd, value=null) {
    if(value){
        document.execCommand(cmd, false, value);
    }else{
        document.execCommand(cmd);
    }
}

function addLink(){
    const url = prompt('Insert url');
    formatDoc('createLink', url);
}

const content = document.getElementById('content');

content.addEventListener('mouseenter', function() {
    const a = content.querySelectorAll('a');
    a.forEach(item=>{
        item.addEventListener('mouseenter', function(){
            content.setAttribute('contenteditable', false);
            item.target = '_blank';
        })
        item.addEventListener('mouseleave', function(){
            content.setAttribute('contenteditable', true);
        })
    })
})

const showCode = document.getElementById('show-code');
let active = false;

showCode.addEventListener('click', function(){
    showCode.dataset.active = !active;
    active = !active
    if(active){
        content.textContent = content.innerHTML;
        content.setAttribute('contenteditable', false);
    }else{
        content.innerHTML = content.textContent;
        content.setAttribute('contenteditable', true);
    }
})

const filename = document.getElementById('filename');

function fileHandle(value){
    if(value === 'new'){
        content.innerHTML = '';
        filename.value = 'untitled';
    }else if(value === 'txt'){
        const blob = new Blob([content.innerText])
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a');
        link.href = url;
        link.download = `${filename.value}.txt`;
        link.click();
    }else if(value === 'pdf'){
        html2pdf(content).save(filename.value);
    }
}