$(document).ready(function () {


    /*For a sticky when scrolling below the header*/

    $('#section-features').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else if (direction == 'up') {
            $('nav').addClass('animated fadeOutUp');
            setTimeout(function () {
                $('nav').removeClass('sticky fadeOutUp');
                $('nav').addClass('fadeInDown');
            }, 500);          
        }
    }, {
        offset: '60px'
    });

    /*For scrolling buttons*/

    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('#section-plans').offset().top
        }, 1500);
    });
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('#section-features').offset().top
        }, 750);
    });

    /*For Navigation Scroll*/

    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /*Animations on scroll*/

    $('#section-features').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('#section-steps').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated bounceInUp');
        $('.js--wp-3').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
    
    $('#section-cities').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('#section-plans').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated pulse');
    }, {
        offset: '15%'
    });

    /*Mobile Navigation*/

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(400);

        if (icon.hasClass('fa-bars')) {
            icon.removeClass('fa-bars');
            icon.addClass('fa-times');
        }
        else {
            icon.removeClass('fa-times');
            icon.addClass('fa-bars');   
        }
    });

}); 