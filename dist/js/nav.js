$(document).ready(function() {
//------------Mobile view------------//
	var $menu = $('.menu');
	var $menuToggle = $('.menu-toggle');
	var resized;
	// switches menu to mobile view if screen width or device width are <= 700px
	function mobileView(menu, menuToggle) {
		if (window.matchMedia('(max-device-width: 700px)').matches || window.matchMedia('(max-width: 700px)').matches ) {
			menu.removeClass('desktop');
			menu.addClass('mobile')
			menuToggle.addClass('mobile');
		} else {
			menu.removeClass('mobile');
			menu.addClass('desktop');
			menuToggle.removeClass('mobile');
		}
	}
	mobileView($menu, $menuToggle);
	// when screen is resized, runs mobileView() every 250ms
	window.onresize = function () {
		clearTimeout(resized);
		resized = setTimeout(function() {
			mobileView($menu, $menuToggle);
		}, 250);
	};
	// open and closes nav
	$menuToggle.click(function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$menu.addClass('close');
		} else {
			$(this).addClass('active');
			$menu.removeClass('close');
		}
	})
});
