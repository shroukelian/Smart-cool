document.addEventListener('DOMContentLoaded', () => {
    // تفعيل AOS
    AOS.init({ duration: 1000, once: true });

    // قائمة الموبايل
    const menuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // إغلاق القائمة عند الضغط على رابط
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});