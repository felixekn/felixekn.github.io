// Splash banner sticky variables
var splash_height = $('.splash').outerHeight();
var nav_height = $('.navbar').outerHeight();
var splash_from_top = $('.navbar').outerHeight(true) + 
                      $('.banner-placement').outerHeight(true);
var slide = true;

// Updates sticky variables after a screen resize
$(window).resize(function() {
    splash_from_top = $('.navbar').outerHeight(true) +
                      $('.banner-placement').outerHeight(true);
    if ($('.splash').hasClass('sticky')) {
        console.log("Margin Resize")
        $('.text').animate({marginTop: "-=" + splash_height}, 0);
        splash_height = $('.splash').outerHeight();
        $('.text').animate({marginTop: "+=" + splash_height}, 0);
    } else {
        console.log("Margin Same")
        splash_height = $('.splash').outerHeight();
    }
});

// Splash banner sticks below nav when the splash banner is scrolled past the nav
$(window).scroll(function() {
    if (($(window).scrollTop() >= (splash_from_top - nav_height)) && slide) {
        $('.splash').addClass('sticky');
    	$('.text').animate({marginTop: "+=" + splash_height}, 0);
    	slide = false;
    } else if (($(window).scrollTop() < (splash_from_top - nav_height)) && !slide) {
        console.log("removed sticky")
        $('.splash').removeClass('sticky');
    	$('.text').animate({marginTop: "-=" + splash_height}, 0);
    	slide = true;
    }
});
