// Get the star element and checkbox
const star = document.getElementById('star');
const checkbox = document.getElementById('selectAllCheckbox');

// Add click event listener to the star
star.addEventListener('click', () => {
    // Toggle the filled class
    star.classList.toggle('filled');
    
    // Check if the star is filled and update the checkbox accordingly
    checkbox.checked = star.classList.contains('filled');
});

// Optional: Add an event listener to the checkbox if you want to handle individual selections
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        star.classList.add('filled'); // Fill the star when checkbox is checked
    } else {
        star.classList.remove('filled'); // Remove fill when checkbox is unchecked
    }
});