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

document.getElementById("deleteButton").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll(".post-checkbox:checked"); // 체크된 체크박스 선택
    checkboxes.forEach(checkbox => {
        const row = checkbox.closest("tr"); // 체크박스의 가장 가까운 tr 찾기
        if (row) {
            row.remove(); // 해당 행 삭제
        }
    });
});

function filterPosts(searchTerm) {
    const rows = document.querySelectorAll(".post-list tbody tr");
    rows.forEach(row => {
        const titleCell = row.cells[2].textContent.toLowerCase(); // 제목 셀 가져오기
        if (titleCell.includes(searchTerm)) {
            row.style.display = ""; // 제목이 검색어를 포함하면 표시
        } else {
            row.style.display = "none"; // 그렇지 않으면 숨김
        }
    });
}