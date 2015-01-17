// Splash banner sticky variables
var splash_height = $('.splash').outerHeight();
var nav_height = $('.navbar-header').height();
var splash_from_top = $('.splash').offset().top;
var slide = true;

$(window).resize(function() {
    splash_height = $('.splash').outerHeight();
    nav_height = $('.navbar-header').height();
    splash_from_top = $('.splash').offset().top;
});

// Splash banner sticky function
$(window).scroll(function() {
    if ($(window).scrollTop() >= (splash_from_top - nav_height)) {
        $('.splash').addClass('sticky');
        if (slide) {
        	$('.body-text').animate({marginTop: "+=" + splash_height}, 0);
        	slide = false;
        }
    } else {
        $('.splash').removeClass('sticky');
        if (!slide) {
        	$('.body-text').animate({marginTop: "-=" + splash_height}, 0);
        	slide = true;
        }
    }
});
