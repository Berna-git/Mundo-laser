// Defino variables y traigo elementos!
const btnToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('side-bar');
const iconNavbar = document.getElementById('icon-menu');
const itemA = document.querySelectorAll(".item-a");
let activeMenu = true;

btnToggle.addEventListener('click', mostrarSidebar);
itemA.forEach(item => item.addEventListener('click',mostrarSidebar));

function mostrarSidebar() {
    if(activeMenu) {
        navMenu.classList.remove('show_menu')
        navMenu.classList.add('hide_menu')
        iconNavbar.classList.remove('bx-x')
        iconNavbar.classList.add('bx-menu');
        
        activeMenu = false;
    } else {
        navMenu.classList.remove('hide_menu')
        navMenu.classList.add('show_menu')
        iconNavbar.classList.remove('bx-menu')
        iconNavbar.classList.add('bx-x');
        activeMenu = true
    }
}
mostrarSidebar()
