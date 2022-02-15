const hamburger = document.getElementById('nav-toggle');
const navBar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('nav-open');
});