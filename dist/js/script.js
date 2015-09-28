$(document).ready(function() {
	$("#carousel").owlCarousel({
		navigation : false, // Show next and prev buttons
		slideSpeed : 300, //miliseconds
		paginationSpeed : 400, //miliseconds
		responsiveRefreshRate: 100,
		autoPlay : 5000, //miliseconds
		singleItem: true
	});
	//on-view scroll animation
	var $about = $('.about-us-wrapper');
	var $materials = $('.materials-wrapper');
	var $window = $(window);
	var window_top_position = $window.scrollTop();
	var element_heights = [$about.outerHeight(),
	 						$materials.outerHeight()];
	function check_if_in_view() {
		window_top_position = $window.scrollTop();
		if (window_top_position >= element_heights[0] / 2.0) {
			$about.addClass('in-view');
			$materials.addClass('in-view');
		} else if (window_top_position == 0) {
			$about.removeClass('in-view');
			$materials.removeClass('in-view');
		}
	}
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');


});
