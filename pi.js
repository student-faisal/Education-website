let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar'); // Add a dot for the class selector
let navlist = document.querySelector('.nav-list'); // Add a dot for the class selector
let rightnav = document.querySelector('.rightnav'); // Add a dot for the class selector

burger.addEventListener('click', () => {
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});
