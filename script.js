function toggleMenu(){
    const menuIcon = document.querySelector(".hamburger-icon");
    const closeIcon = document.querySelector(".close-icon");
    const menu = document.querySelector(".menu-links");
    menuIcon.classList.toggle("open");
    closeIcon.classList.toggle("open");
    menu.classList.toggle("open");
}