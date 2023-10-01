document.addEventListener('DOMContentLoaded', () => {
var modal = document.getElementById('info_modal');
var info = document.getElementById('info_button');
var span = document.getElementsByClassName("close")[0];

// Open the modal when the button is clicked
info.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Close the modal when the close button is clicked
span.addEventListener('click', () => {
    modal.style.display = 'none';
});
});