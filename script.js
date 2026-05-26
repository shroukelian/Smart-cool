document.addEventListener('DOMContentLoaded', () => {
    // تفعيل AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
        // disable: 'mobile'
    });

    const menuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});