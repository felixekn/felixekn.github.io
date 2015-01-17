
var splash_height = $('.splash').height();
var splash_from_top = $('.splash').offset().top;
var slide = true;

$(window).resize(function() {
    splash_height = $('.splash').height();
    splash_from_top = $('.splash').offset().top + $('.splash').scrollTop();
});

// Splash banner sticky function
$(window).scroll(function() {
    if ($(window).scrollTop() >= (splash_from_top - splash_height)) {
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
