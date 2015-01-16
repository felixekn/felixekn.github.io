
var splash_height = $('.splash').height();
var splash_from_top = $('.splash').offset().top;
var slide = true;

// Carousel image resize function
$(function() {
    $(window).resize(function() {
        var $i = $('.image');
        var $c = $i.parent();
        var dimen = $i.width() - $c.width(), height = $i.height() - $c.height();            
        if (dimen[0] < 0) { $i.width($c.width()); }
        if (dimen[1] < 0) { $i.height($c.height()); }
    });
    $(window).resize();
    splash_height = $('.splash').height();
	splash_from_top = $('.splash').offset().top;
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
