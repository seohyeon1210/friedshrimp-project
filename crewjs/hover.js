document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const modal = document.getElementById('myModal');
    const closeButton = document.querySelector('.close');   //close 클래스를 사용하여 요소를 타겟팅합니다.

    // navbar를 클릭하면 모달을 표시합니다.
    navbar.addEventListener('click', function () {
        modal.style.display = 'flex';
    });
    // Add event listener to close button
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none'; // Hide the modal
    });

    // 모달 콘텐츠 외부를 클릭하면 모달을 닫습니다.
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
  // 다이얼로그 열기 함수
function openDialog() {
    document.getElementById("myDialog").showModal();
}

// 다이얼로그 닫기 함수
function closeDialog() {
    document.getElementById("myDialog").close();
}

// 윈도우 클릭 시 다이얼로그 닫기
window.addEventListener('click', function (event) {
    const myDialog = document.getElementById("myDialog");
    if (event.target === myDialog) {
        myDialog.close(); // 다이얼로그 닫기
    }
});
    // 윈도우 클릭 시 다이얼로그 닫기
window.addEventListener('click', function (event) {
const myDialog = document.getElementById("myDialog1");
if (event.target === myDialog) {
    myDialog.close(); // 다이얼로그 닫기
}
});
// Function to open the detail modal
function openDetailModal() {
    const detailModal = document.getElementById('myDialog1');
    detailModal.showModal(); // Use showModal() to display the dialog
}

// Function to close the detail modal
function closeDetailModal() {
    const detailModal = document.getElementById('myDialog1');
    detailModal.close(); // Close the dialog
}


// 파일업로드모달
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            const preview = document.getElementById('preview');
            preview.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
}
// 신고
function reportPost() {
    // Your logic to handle reporting the post
    alert("신고가 접수되었습니다."); // Example alert
}
document.getElementById("myDialog").showModal(); // To show
document.getElementById("myDialog").close(); // To close