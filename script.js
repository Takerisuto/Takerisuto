document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    function showTab(tabId) {
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tabId) {
                content.classList.add('active');
            }
        });
    }

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            showTab(tabId);
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Show the first tab by default
    if (tabLinks.length > 0) {
        showTab(tabLinks[0].getAttribute('data-tab'));
    }
});

