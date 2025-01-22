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
const player1button = document.querySelector('.player1button');
const player2button = document.querySelector('.player2button');
const resetbutton = document.querySelector('.reset');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

//applying eventListener at player1button;
let score1 = 0;
let score2 = 0;
let playedUpto = 0;
player1button.addEventListener('click', function () {
    score1++;
    player1.textContent = score1;
    // checking if player1 reched the end of score;
    if (playedUpto == score1) {
        player1.style.color = 'green';
        player2.style.color = 'Red';
    }


});

player2button.addEventListener('click', function () {
    score2++;
    player2.textContent = score2;
    // check if player 2 have reched the end of score;
    if (playedUpto == score2) {
        player2.style.color = 'green';
        player1.style.color = 'Red';
    }

});

resetbutton.addEventListener('click', function () {
    score1 = 0;
    score2 = 0;
    player1.textContent = score1;
    player2.textContent = score2;
    player2.style.color = 'Black';
    player1.style.color = 'Black';

})

const A = document.querySelectorAll('a');
A.forEach((item) => {
    item.addEventListener('click', function (evt) {
        dropdownMenu.classList.remove('show');
        playedUpto = parseInt(event.target.innerHTML.trim());


    })

});


