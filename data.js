// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Pesan berhasil dikirim!');
        // Implementasikan logika pengiriman formulir di sini
    } else {
        alert('Harap isi semua field.');
    }
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    
    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
