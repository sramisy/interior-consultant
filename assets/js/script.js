window.addEventListener('DOMContentLoaded', () => {

    const navToggler = document.getElementById('nav-toggler');
    navToggler.addEventListener('click', (e) => {
        document.body.classList.toggle('overflow-hidden');
        e.currentTarget.nextElementSibling.classList.toggle('nav-items--show') ?
            e.currentTarget.innerHTML = '<span class="material-icons-round md-light">close</span>' :
            e.currentTarget.innerHTML = '<span class="material-icons-round md-light">menu</span>';
    })
});

window.addEventListener('resize', () => {
    const navItems = document.querySelector('.nav-items');
    if (navItems.classList.contains('nav-items--show') && window.innerWidth > 980) {
        document.body.classList.remove('overflow-hidden');
        document.querySelector('.nav-items').classList.remove('nav-items--show');
        document.querySelector('#nav-toggler').innerHTML = '<span class="material-icons-round md-light">menu</span>';
    }
});