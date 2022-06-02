(function ($) {
    "use strict";

    const $window = $(window),
        siteNavigation = $('#site-navigation'),
        mobileMenuHandler = $('#mobile-menu-handler');

    // Mobile Menu
    mobileMenuHandler.on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('show-menu');
        siteNavigation.toggleClass('show-menu');
        $('.site-primary-menu').toggleClass('show-menu');
    });

    function resetMobileMenu() {
        mobileMenuHandler.removeClass('show-menu');
        siteNavigation.removeClass('show-menu');
    }

    resetMobileMenu();
    $window.on('resize', function (event) {
        resetMobileMenu();
    });

    // Sticky Header
    const siteHeader = $('#masthead'),
        headerHeight = (siteHeader.height() + 150),
        scroll_anchor = $('#scroll-top');

    // Scroll to Top
    scroll_anchor.on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'fast');
    });

    // Scroll event
    $window.on('scroll', function (event) {
        let $this = $(this);

        // Sticky Header
        if ($this.scrollTop() > headerHeight) {
            siteHeader.addClass('sticky-header');
        } else {
            siteHeader.removeClass('sticky-header');
        }

        // Scroll to Top
        if ($this.scrollTop() > 250) {
            scroll_anchor.addClass('show');
            return;
        }
        scroll_anchor.removeClass('show');
    });

    // Load event
    $window.on('load', function (event) {
        $('a[href*="#"]').each(function (index, element) {
            const $section = $(element.hash);
            if ($section.length) {
                $(element).on('click', function (event) {
                    event.preventDefault();
                    event.stopPropagation();
                    $('html, body').animate({scrollTop: $section.offset().top}, 100, 'linear');
                });
            }
        });
    });

})(jQuery);