document.addEventListener('DOMContentLoaded', function() {
    // ========== DESKTOP HOME DROPDOWN ==========
    const homeBtn = document.querySelector('.header-home-down');
    const dropdown = document.querySelector('.header-dropdown-menu');

    if (homeBtn && dropdown) {
        homeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.header-home-menu')) {
                dropdown.classList.remove('active');
            }
        });
    }

    // ========== MOBILE MENU TOGGLE ==========
    const menuToggle = document.querySelector('.header-menu-toggle');
    const menuIcon = document.querySelector('.header-menu-icon');
    const closeIcon = document.querySelector('.header-close-icon');
    const sidebar = document.querySelector('.header-mobile-aside');

    if (menuToggle && menuIcon && closeIcon && sidebar) {
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';

        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');

            if (sidebar.classList.contains('active')) {
                menuIcon.style.display = 'none';
                closeIcon.style.display = 'block';
            } else {
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        });

        // ========== CLOSE MOBILE MENU WHEN A LINK IS CLICKED (except HOME) ==========
        const mobileLinks = document.querySelectorAll('.header-mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Don't close if this is the HOME dropdown link
                if (this.classList.contains('home-down')) {
                    return;
                }
                sidebar.classList.remove('active');
                menuIcon.style.display = 'block';
                closeIcon.style.display = 'none';
            });
        });
    }

    // ========== MOBILE SUBMENU (HOME DROPDOWN) ==========
    const mobileHomeLink = document.querySelector('.home-menu > .home-down');
    const mobileSubmenu = document.querySelector('#option2');

    if (mobileHomeLink && mobileSubmenu) {
        mobileHomeLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            mobileSubmenu.classList.toggle('open');

            const arrow = this.querySelector('svg');
            if (arrow) {
                arrow.style.transform = mobileSubmenu.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0)';
            }
        });
    }
});