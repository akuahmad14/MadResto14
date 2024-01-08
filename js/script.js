// Toogle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//toogle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

//toogle class active shoppingcart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

//klik diluar elemen
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const shoppingcart= document.querySelector('#shopping-cart-button');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target) ) {
        navbarNav.classList.remove('active');
    }
    if(!searchButton.contains(e.target) && !searchForm.contains(e.target) ) {
        searchForm.classList.remove('active');
    }
    if(!shoppingcart.contains(e.target) && !shoppingCart.contains(e.target) ) {
        shoppingCart.classList.remove('active');
    }
});

//modal box
const itemDetailButtons = document.querySelectorAll('.item-detail-button');
const itemDetailModal = document.querySelector('#item-detail-modal');

itemDetailButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    });
});

//klik tombol close
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none'
    e.preventDefault();
};

// klik diluar modal
const modal = document.querySelector('#item-detail-modal');
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}
