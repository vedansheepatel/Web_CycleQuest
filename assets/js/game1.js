//BloodyMess Game

const player = document.querySelector('.game_1_player');
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
var player_position = player.offsetWidth;
var moveSpeed=10;
var currentpos = (screenWidth - player_position) / 2;

if (player) {
    const offsetWidth = player.offsetWidth;
    console.log(`Offset Width: ${offsetWidth}px`);
} else {
    console.log('Image not found.');
}

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



