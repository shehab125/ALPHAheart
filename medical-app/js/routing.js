// Handle page navigation
document.addEventListener('DOMContentLoaded', function() {
    // Handle back button clicks
    const backButtons = document.querySelectorAll('.icon-back');
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.history.back();
        });
    });

    // Handle navigation links
    const navLinks = document.querySelectorAll('a[data-page]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            window.location.href = `${page}.html`;
        });
    });
}); 