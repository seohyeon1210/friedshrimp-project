// Function to open the recruitment modal
function openRecruitmentModal() {
    const modal = document.getElementById('myDialog');
    modal.showModal(); 
}

// Function to close the detail dialog modal
function closeDetailDialog() {
    const modal = document.getElementById('myDialog');
    modal.close(); 
}

// Open the report modal when 신고 is clicked
function openReportModal() {
    const modal = document.getElementById('honey_Rmodal');
    modal.style.display = 'block'; // Show the modal
}

// Close the report modal
function rModal_exit() {
    const modal = document.getElementById('honey_Rmodal');
    modal.style.display = 'none'; // Hide the modal
}

// Handle file upload and image preview
function handleFiles(files) {
    const file = files[0];
    const sizeLimit = 2 * 1024 * 1024; // 2MB limit

    if (file) {
        // Check file size
        if (file.size > sizeLimit) {
            alert("파일 크기가 2MB를 초과할 수 없습니다.");
            return;
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            const previewImage = document.getElementById('previewImage');
            previewImage.src = e.target.result;
            previewImage.style.display = 'block'; // Show the preview image

            // Update upload UI
            document.getElementById('uploadIcon').style.display = 'none'; // Hide upload icon
            document.getElementById('uploadText').style.display = 'none'; // Hide upload text
            document.getElementById('sizeInfo').style.display = 'none'; // Hide size info
        };
        reader.readAsDataURL(file); // Read the image file
    }
}

// Save and close the modal
function saveAndCloseModal() {
    // Perform any save operations if needed

    // Close the modal after saving
    closeDetailDialog(); 
}

// Close the detail dialog modal
function closeDetailDialog() {
    const modal = document.getElementById('myDialog');
    modal.close(); 
}


// Ensure input value does not exceed maximum
function inputLenFunc() {
    const inputs = document.querySelectorAll('.input-number');
    inputs.forEach(input => {
        const max = input.getAttribute('max');
        if (input.value > max) {
            input.value = max; // Set value to max if exceeded
        }
    });
}

// Search functionality to filter cards
function filterCards() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase(); // Convert input to lowercase
    const cards = document.querySelectorAll('.card'); // Select all card elements

    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase(); // Card title
        const date = card.querySelector('.card-body p:nth-of-type(1)').textContent.toLowerCase(); // Date
        const fee = card.querySelector('.card-body p:nth-of-type(3)').textContent.toLowerCase(); // Fee
        const location = card.querySelector('.card-body p:nth-of-type(2)').textContent.toLowerCase(); // Location

        // Show card if filter matches
        if (title.includes(filter) || date.includes(filter) || fee.includes(filter) || location.includes(filter)) {
            card.style.display = ""; // Show card
        } else {
            card.style.display = "none"; // Hide card
        }
    });
}

// Smooth scroll to top
function move_honey1() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Open the report modal and handle the report logic
function openReportModal() {
    // Show the report badge
    const reportBadge = document.getElementById('reportBadge');
    reportBadge.style.display = 'block'; // Display the "신고된 게시물" badge

    // Hide the report button
    const reportBtn = document.getElementById('reportBtn');
    reportBtn.style.display = 'none'; // Hide the 신고 button

    // Optionally, you can display a modal or alert to confirm the report action
    alert("게시물이 신고되었습니다.");
}
