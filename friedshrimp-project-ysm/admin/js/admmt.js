
 // Function to open the detail modal
function openDetailModal() {
    const modal = document.getElementById("myDialog");
    modal.showModal();
}

// Function to close the detail modal
function closeDetailModa2() {
    const modal = document.getElementById("myDialog");
    modal.close();
}

// Add event listener to the "수정" button
document.querySelectorAll(".edit-btn").forEach(button => {
    button.addEventListener("click", openDetailModal);
});

// Function to open the delete confirmation modal
function openDeleteModal() {
    const modal = document.getElementById("deleteModal");
    modal.showModal();
}

// Function to close the delete confirmation modal
function closeDeleteModal() {
    const modal = document.getElementById("deleteModal");
    modal.close();
}

// Function to confirm the deletion
function confirmDelete() {
    alert("삭제가 완료되었습니다."); // Placeholder for actual deletion logic
    closeDeleteModal();
}

// Add event listeners to the "삭제" buttons
document.querySelectorAll(".reset-btn").forEach(button => {
    button.addEventListener("click", openDeleteModal);
});
document.querySelectorAll(".reset-btn1").forEach(button => {
    button.addEventListener("click", openDeleteModal);
});