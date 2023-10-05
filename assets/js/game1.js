//BloodyMess Game

const player = document.querySelector('.game_1_player');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
var player_position = player.offsetWidth;
var moveSpeed=10;
var currentpos = (screenWidth - player_position) / 2;

//Function to animate obstacles
function animateObstacles() {
    const obstacles = document.querySelectorAll('.obstacle');

    obstacles.forEach((obstacle) => {
        let topPosition = -100; // Initialize top position just above the screen
        const fallSpeed = Math.random() * 4 + 2; // Randomize fall speed

        // Function to update obstacle's position
        function updatePosition() {
            topPosition += fallSpeed;
            obstacle.style.top = topPosition + 'px';

            // If the obstacle is out of the screen, hide it
            if (topPosition >= window.innerHeight) {
                obstacle.style.display = 'none';

            } else {
                obstacle.style.display = 'block';
            }

            // If the obstacle is hidden, reset it to the top
            if (topPosition > window.innerHeight + 50) {
                topPosition = -100; // Position it just above the screen
                obstacle.style.left = Math.random() * (window.innerWidth - 50) + 'px'; // Randomize horizontal position
            }

            // Request the next animation frame
            requestAnimationFrame(updatePosition);
        }

        // Start the animation loop with a small delay
        setTimeout(updatePosition, Math.random() * 1000); // Delay between 0 and 1000 milliseconds
    });
}

// Call the animation function
animateObstacles();



function moveLeft(){
    currentpos -= moveSpeed;
    if (currentpos < 0) {
        currentpos = 0; // Prevent moving beyond the left edge
    }
    player.style.left = `${currentpos}px`;
}
function moveRight() {
     currentpos += moveSpeed;
    if (currentpos + player_position > screenWidth) {
        currentpos = screenWidth - player_position; // Prevent moving beyond the right edge
    }
    player.style.left = `${currentpos}px`;
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moveRight();
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        moveLeft();
    }
});







