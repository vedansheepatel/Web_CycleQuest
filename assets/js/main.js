document.addEventListener('DOMContentLoaded', () => {
//Have first Page loaded and everything else not loaded
var map1 = document.getElementById('Page1');
map1.style.display='none';
var phase1intro = document.getElementById('Phase1');
phase1intro.style.display='none';

//================START PAGE ==================//
//Info Modal Interaction
var modal = document.getElementById('info_modal');
var info = document.getElementById('info-button-modal');
var span = document.getElementsByClassName("close")[0];


// Open the modal when the button is clickedc
info.addEventListener('click', () => {
    console.log("Button clicked");
    modal.style.display = 'block';
});

// Close the modal when the close button is clicked
span.addEventListener('click', () => {
    modal.style.display = 'none';
});

//Play Button --> go to game map 
var move = document.getElementById('Play');
var firstPage = document.getElementById('StartPage');

move.addEventListener('click',()=>{
    firstPage.style.display='none';
    map1.style.display='block';
    phase1intro.style.display='none';
    
});

//===========MAP SECTION ==================//
//Show Map info when button is clicked
var mapinfo = document.getElementById('map_modal');
var mapinfobutton = document.getElementById('info_map_button');
var span = document.getElementsByClassName("close")[1];
var home =  document.getElementById('go_home');

// Open the modal when the button is clicked
mapinfobutton.addEventListener('click', () => {
    console.log("Button clicked");
    mapinfo.style.display = 'block';
});

// Close the modal when the close button is clicked
span.addEventListener('click', () => {
    mapinfo.style.display = 'none';
});

//go back to home
home.addEventListener('click',()=>{
    firstPage.style.display='block';
    map1.style.display='none';
    phase1intro.style.display='none';
});

//go to phase 1 intro
var phase1map = document.getElementById('level1');
phase1map.addEventListener('click',()=>{
    firstPage.style.display='none';
    map1.style.display='none';
    phase1intro.style.display='block';

});
//go to map 1 again from phase 1 intro
var back = document.getElementById('phase1back');
back.addEventListener('click',()=>{
    firstPage.style.display='none';
    map1.style.display='block';
    phase1intro.style.display='none';

});


});
