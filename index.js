const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');
// Should not be null
console.log(dropdownButton); // Should not be null
console.log(dropdownMenu);


let timeout;

// Show the dropdown menu
dropdownButton.addEventListener('mouseover', () => {
    clearTimeout(timeout); // Clear any existing hide timeout
    dropdownMenu.style.display = 'block';
});

// Keep the dropdown menu visible when hovering over it
dropdownMenu.addEventListener('mouseover', () => {
    clearTimeout(timeout);
    dropdownMenu.style.display = 'block';
});

// Hide the dropdown menu with a delay
dropdownButton.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
        dropdownMenu.style.display = 'none';
    }, 300); // Adjust delay in milliseconds
});

dropdownMenu.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
        dropdownMenu.style.display = 'none';
    }, 300); // Adjust delay in milliseconds
});
// handelling the pointer events
dropdownButton.addEventListener('mouseover', () => {

    dropdownMenu.classList.add('show'); // Add the "show" class

});

dropdownMenu.addEventListener('mouseleave', () => {

    dropdownMenu.classList.remove('show'); // Remove the "show" class

});

