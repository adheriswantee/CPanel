const menuToggleOpen = document.querySelector('.menu-toggle-open');
const menuToggleClose = document.querySelector('.menu-toggle-close');
const navMobileElement = document.querySelector('.nav-mobile');

menuToggleOpen.addEventListener('click', () => {
    navMobileElement.classList.add('active');
});

menuToggleClose.addEventListener('click', () => {
    navMobileElement.classList.remove('active');
});

document.addEventListener('click', (e) => {
    const dropdownMenu = document.querySelector('.dropdown');

    if(e.target.classList.contains('dropdown-btn')){
        dropdownMenu.classList.add('active');
    }else{
        dropdownMenu.classList.remove('active');
    }
});