// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const btnLines = document.querySelectorAll('.btn-line');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}

function pulseMenu() {
    if (!showMenu){
        btnLines.forEach(item => item.classList.add('animate'));
        setTimeout(removeAnimate,12000);
    }else{
        btnLines.forEach(item => item.classList.remove('animate'));
    }
}

function removeAnimate() {
    btnLines.forEach(item => item.classList.remove('animate'));
}

function init(){
    setInterval(pulseMenu, 24000);
}

window.onload = function(){
    pulseMenu();
    init();
}