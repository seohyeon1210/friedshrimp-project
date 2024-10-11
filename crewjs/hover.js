document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');   //close 클래스를 사용하여 요소를 타겟팅합니다.

    // navbar를 클릭하면 모달을 표시합니다.
    navbar.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    // 첫 번째 닫기 버튼을 클릭하면 모달을 숨깁니다.
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
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