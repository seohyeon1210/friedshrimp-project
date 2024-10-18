function validateInput() {
    const input = document.getElementById('numberInput');
    const value = input.value;

    // Check if the value is more than 5 digits
    if (value.length > 5) {
        // Set the value to the first 5 digits
        input.value = value.slice(0, 5);
    }

    // Check if the value exceeds the max limit
    const max = input.getAttribute('max');
    if (Number(input.value) > Number(max)) {
        input.value = max; // Set value to max if exceeded
    }
}

// Function to open a modal by id
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Function to close a modal by id
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Open the recruitment modal
function openRecruitmentModal() {
    openModal('myDialog');
}

// Close the detail dialog modal
function closeDetailDialog() {
    closeModal('myDialog');
}

// Open the report modal
function openReportModal() {
    openModal('honey_Rmodal');
}

// Close the report modal
function rModal_exit() {
    closeModal('honey_Rmodal');
}

// Close the report modal
function rModal_exit() {
    closeModal('honey_Rmodal');
}

// Handle file upload and image preview
function handleFiles(files) {
    const file = files[0];
    const sizeLimit = 2 * 1024 * 1024; // 2MB limit

    if (file) {
        if (file.size > sizeLimit) {
            alert("파일 크기가 2MB를 초과할 수 없습니다.");
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('previewImage').src = e.target.result;
            document.getElementById('previewImage').style.display = 'block'; // Show the preview image

            // Hide upload UI elements
            document.getElementById('uploadIcon').style.display = 'none';
            document.getElementById('uploadText').style.display = 'none';
            document.getElementById('sizeInfo').style.display = 'none';
        };
        reader.readAsDataURL(file); // Read the image file
    }
}

// Save and close the modal
function saveAndCloseModal() {
    // Perform save operations here if necessary
    closeDetailDialog();
}

// Ensure input value does not exceed the maximum value
function inputLenFunc() {
    const inputs = document.querySelectorAll('.input-number');
    inputs.forEach(input => {
        const max = input.getAttribute('max');
        if (input.value > max) {
            input.value = max; // Set value to max if exceeded
        }
    });
}

// Search functionality to filter cards based on user input
function filterCards() {
    const filter = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const date = card.querySelector('.card-body p:nth-of-type(1)').textContent.toLowerCase();
        const fee = card.querySelector('.card-body p:nth-of-type(3)').textContent.toLowerCase();
        const location = card.querySelector('.card-body p:nth-of-type(2)').textContent.toLowerCase();

        // Toggle visibility based on search criteria
        if (title.includes(filter) || date.includes(filter) || fee.includes(filter) || location.includes(filter)) {
            card.style.display = ""; // Show card
        } else {
            card.style.display = "none"; // Hide card
        }
    });
}

// Open/close modals for edit and delete actions
document.querySelector(".p-edit").addEventListener("click", () => openModal('honey_Emodal1'));
document.getElementById("exitEBtnn").addEventListener("click", () => closeModal('honey_Emodal1'));
document.querySelector(".p-delete").addEventListener("click", () => openModal('honey_Dmodal1'));
document.getElementById("exitDBtnn").addEventListener("click", () => closeModal('honey_Dmodal1'));

// Save changes in edit modal
function edit_save() {
    alert("저장되었습니다.");
    closeModal('honey_Emodal1');
}

// Confirm delete action
function delete_accept() {
    alert("삭제되었습니다.");
    closeModal('honey_Dmodal1');
}
function dModal_exit() {
    closeModal('honey_Dmodal1');
}

function confirmReport() {
    rModal_exit(); // 신고 모달 닫기
     // 신고가 접수되었다는 알림창 표시
     alert("신고가 접수되었습니다!"); 

    // 신고 버튼 숨기기
    document.getElementById("reportBtn").style.display = "none"; 
    // 신고 메시지 표시
    document.getElementById("reportMessage").style.display = "block"; 
    // 신고 배지 표시
    document.getElementById("reportBadge").style.display = "block"; 
}

document.querySelectorAll('.pagebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        const page = this.getAttribute('href').substring(1); // Get the page number
        const postsContainer = document.getElementById('posts-container');
        const noPostsMessage = document.getElementById('no-posts-message');

        if (page === "2") {
            // Hide the posts and show the message for page 2
            postsContainer.style.display = 'none';
            noPostsMessage.style.display = 'block';
        } else {
            // Show posts for other pages (update this logic as needed)
            postsContainer.style.display = 'block';
            noPostsMessage.style.display = 'none';
            // You can add logic here to display the relevant posts for the clicked page
        }
    });
});
document.querySelectorAll('.pagebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor behavior

        const page = this.getAttribute('href').substring(1); // Get the page number
        const postsContainer = document.getElementById('posts-container');
        const noPostsMessage = document.getElementById('no-posts-message');

        // Logic to determine if there are posts for the selected page
        let hasPosts = false; // Change this based on your logic or data

        if (page === "1") {
            hasPosts = true; // Assuming page 1 has posts
            // Add code to display posts for page 1
        } else if (page === "2") {
            // Assuming page 2 has no posts
            hasPosts = false;
        } else {
            // Logic for other pages can be added here
        }

        if (hasPosts) {
            postsContainer.style.display = 'block'; // Show posts
            noPostsMessage.style.display = 'none'; // Hide no posts message
            // Add code to populate the postsContainer with posts
        } else {
            postsContainer.style.display = 'none'; // Hide posts
            noPostsMessage.style.display = 'block'; // Show no posts message
        }
    });
});


