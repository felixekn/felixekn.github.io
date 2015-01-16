// Stick and unstick News and Press navigation column
var nav_height = 50;
var sidebar_position = $('.sidebar-module').position();
var slide = true;
$(window).scroll(function() {
    if ($(window).scrollTop() > nav_height) {
        $('.sidebar').addClass('sticky');
		if (slide) {
        	$('.sidebar').animate({left: "+=" + (sidebar_position["left"])}, 0);
        	slide = false;
        }
    } else {
        $('.sidebar').removeClass('sticky');
        if (!slide) {
        	$('.sidebar').animate({left: "-=" + sidebar_position["left"]}, 0);
        	slide = true;
        }
    }
});