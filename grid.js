const hamburger = document.getElementById('hamburger');
const sideNav = document.getElementById('sideNav');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
    sideNav.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    sideNav.classList.remove('open');
});



