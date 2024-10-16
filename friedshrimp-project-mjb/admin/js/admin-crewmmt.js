document.getElementById("searchButton").addEventListener("click", function() {
    const searchInput = document.getElementById("searchInput");
    if (searchInput.style.display === "none") {
        searchInput.style.display = "inline"; // 검색창 표시
        searchInput.focus(); // 검색창에 포커스
    } else {
        searchInput.style.display = "none"; // 검색창 숨김
        searchInput.value = ""; // 검색창 내용 초기화
        filterPosts(""); // 초기 상태로 필터링
    }
});

document.getElementById("searchInput").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase(); // 소문자로 변환하여 비교
    filterPosts(searchTerm);
});

// 전체 선택 기능 구현
document.getElementById("selectAll").addEventListener("change", function() {
    const checkboxes = document.querySelectorAll(".post-checkbox");
    checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked; // 전체 선택 여부에 따라 체크박스 상태 변경
    });
});

//밑에 "삭제하시겠습니까?" 팝업창 추가해서 주석처리 함
// document.getElementById("deleteButton").addEventListener("click", function() {
//     const checkboxes = document.querySelectorAll(".post-checkbox:checked"); // 체크된 체크박스 선택
//     checkboxes.forEach(checkbox => {
//         const row = checkbox.closest("tr"); // 체크박스의 가장 가까운 tr 찾기
//         if (row) {
//             row.remove(); // 해당 행 삭제
//         }
//     });
// });

function filterPosts(searchTerm) {
    const rows = document.querySelectorAll(".post-list tbody tr");
    rows.forEach(row => {
        const cells = row.cells;
        const registrationDate = cells[1].textContent.toLowerCase(); // 등록일 셀 가져오기
        const author = cells[2].textContent.toLowerCase(); // 작성자 셀 가져오기
        const title = cells[3].textContent.toLowerCase(); // 제목 셀 가져오기
        const location = cells[4].textContent.toLowerCase(); // 장소 셀 가져오기

        // 검색어가 등록일, 작성자, 제목, 장소 중 하나라도 포함되면 표시
        if (registrationDate.includes(searchTerm) || author.includes(searchTerm) || title.includes(searchTerm) || location.includes(searchTerm)) {
            row.style.display = ""; // 일치하면 표시
        } else {
            row.style.display = "none"; // 그렇지 않으면 숨김
        }
    });
}

// 삭제 버튼 클릭 이벤트 리스너
document.getElementById("deleteButton").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll(".post-checkbox:checked"); // 체크된 체크박스 선택
    if (checkboxes.length === 0) {
        alert(" 삭제할 게시물을 선택해주세요."); // 체크된 항목이 없을 경우 경고
        return;
    }

    // 삭제 확인 창
    if (confirm("이 게시물을 삭제 하시겠습니까?")) {
        checkboxes.forEach(checkbox => {
            const row = checkbox.closest("tr"); // 체크된 체크박스의 행 찾기
            row.remove(); // 행 삭제
        });
        alert("게시물이 삭제 되었습니다."); // 탈퇴 완료 메시지
    }
});

