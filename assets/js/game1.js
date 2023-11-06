//BloodyMess Game

const player = document.querySelector('.game_1_player');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
var player_position = player.offsetWidth;
var moveSpeed=10;
var currentpos = (screenWidth - player_position) / 2;

const obstacleImages = [
    'assets/Img/Bloodymess/Obstacles/Acne.png',
    'assets/Img/Bloodymess/Obstacles/Backache.png',
    'assets/Img/Bloodymess/Obstacles/Bloating.png',
    'assets/Img/Bloodymess/Obstacles/Breast Soreness.png',
    'assets/Img/Bloodymess/Obstacles/Cramps.png',
    'assets/Img/Bloodymess/Obstacles/Cravings.png',
    'assets/Img/Bloodymess/Obstacles/Diarrhea.png',
    'assets/Img/Bloodymess/Obstacles/Fatigue.png',
    'assets/Img/Bloodymess/Obstacles/Mood Swings.png'
];
const reliefImages = [
    'assets/Img/Bloodymess/Gains/Heat Pack.png',
    'assets/Img/Bloodymess/Gains/Herbal Tea.png',
    'assets/Img/Bloodymess/Gains/Painkiller.png',
    'assets/Img/Bloodymess/Gains/Supplements.png'
];

// Shuffle the array of image sources
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(obstacleImages);
shuffleArray(reliefImages);

// Function to animate obstacles
function animateObstacles() {
    const maxFallingObstacles = 4; // Maximum number of falling obstacles at once
    let fallingObstacles = 0; // Number of currently falling obstacles

    // Function to create a falling obstacle
    function createObstacle(imageSrc) {
        const obstacle = document.createElement('img');
        obstacle.src = imageSrc;
        obstacle.alt = 'Obstacle';
        obstacle.className = 'obstacle';
        obstacle.style.left = Math.random() * (window.innerWidth - 50) + 'px';
        document.getElementById('symptoms').appendChild(obstacle);

        let topPosition = -100; // Initialize top position just above the screen
        const fallSpeed = Math.random() * 2 + 2; // Randomize fall speed

        // Function to update obstacle's position
        function updatePosition() {
            topPosition += fallSpeed;
            obstacle.style.top = topPosition + 'px';

            // If the obstacle is out of the screen, hide and remove it
            if (topPosition >= window.innerHeight) {
                obstacle.style.display = 'none';
                fallingObstacles--;

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

        // Start the animation loop
        updatePosition();
    }

    // Create falling obstacles up to the maximum limit
    for (let i = 0; i < maxFallingObstacles; i++) {
        if (fallingObstacles < maxFallingObstacles) {
            createObstacle(obstacleImages[fallingObstacles]);
            fallingObstacles++;
        }
    }
}

// Call the animation function
animateObstacles();

function animateRelief() {
    const maxFallingRelief = 4; // Maximum number of falling obstacles at once
    let fallingRelief = 0; // Number of currently falling obstacles

    // Function to create a falling obstacle
    function createRelief(image_Src) {
        const relief = document.createElement('img');
        relief.src = image_Src;
        relief.alt = 'Relief';
        relief.className = 'relief';
        relief.style.left = Math.random() * (window.innerWidth - 50) + 'px';
        document.getElementById('gains').appendChild(relief);

        let topPosition = -100; // Initialize top position just above the screen
        const fallSpeed = Math.random() * 2 + 2; // Randomize fall speed

        // Function to update obstacle's position
        function updatePosition() {
            topPosition += fallSpeed;
            relief.style.top = topPosition + 'px';

            // If the obstacle is out of the screen, hide and remove it
            if (topPosition >= window.innerHeight) {
                relief.style.display = 'none';
                fallingRelief--;

            } else {
                relief.style.display = 'block';
            }

            // If the obstacle is hidden, reset it to the top
            if (topPosition > window.innerHeight + 50) {
                topPosition = -100; // Position it just above the screen
                relief.style.left = Math.random() * (window.innerWidth - 50) + 'px'; // Randomize horizontal position
            }

            // Request the next animation frame
            requestAnimationFrame(updatePosition);
        }

        // Start the animation loop
        updatePosition();
    }

    // Create falling obstacles up to the maximum limit
    for (let i = 0; i < maxFallingRelief; i++) {
        if (fallingRelief < maxFallingRelief) {
            createRelief(reliefImages[fallingRelief]);
            fallingRelief++;
        }
    }
}

// Call the animation function
animateRelief();


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
        event.preventDefault();
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        moveLeft();
        event.preventDefault();
    }
});







