$(document).ready(function() {

    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });


    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    })
    
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    })


    /* Navigation Scroll */

    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });


        /* Animations on scroll */

        $('.js--wp-1').waypoint(function(direction) {
            $('.js--wp-1').addClass('animated fadeIn');
        }, {
            offset: '50%'
        });

        $('.js--wp-2').waypoint(function(direction) {
            $('.js--wp-2').addClass('animated fadeInUp');
        }, {
            offset: '50%'
        });

        $('.js--wp-3').waypoint(function(direction) {
            $('.js--wp-3').addClass('animated fadeIn');
        }, {
            offset: '50%'
        });

        $('.js--wp-4').waypoint(function(direction) {
            $('.js--wp-4').addClass('animated pulse');
        }, {
            offset: '50%'
        });


        /* MOBILE NAV */
        $('.js--nav-icon').click(function() {
            var nav = $('.js--main-nav');
            var icon = $('.js--nav-icon i');

            nav.slideToggle(200);

            if(icon.hasClass('fa-bars')) {
                icon.addClass('fa-times');
                icon.removeClass('fa-bars');
            } else {
                icon.addClass('fa-bars');
                icon.removeClass('fa-times');
            }
        })

});