$(document).ready(function() {
	$("#carousel").owlCarousel({
		navigation : false, // Show next and prev buttons
		slideSpeed : 300, //miliseconds
		paginationSpeed : 400, //miliseconds
		responsiveRefreshRate: 100,
		// autoPlay : 5000, //miliseconds
		singleItem: true
	});
	//on-view scroll animation
	var $about = $('.about-us');
	var $materials = $('.quality-materials');
	var $window = $(window);
	var window_top_position = $window.scrollTop();
	var element_heights = [$about.outerHeight(),
	 						$materials.outerHeight()];
	function check_if_in_view() {
		window_top_position = $window.scrollTop();
		if (window_top_position >= element_heights[0] / 2.0) {
			$about.find($("p")).addClass('in-view');
		} else if (window_top_position == 0) {
			$about.find($("p")).removeClass('in-view');
		}
		if (window_top_position >= element_heights[0] + element_heights[1]) {
			$materials.find($("section")).addClass('in-view');
		} else if (window_top_position <= element_heights[0]) {
			$materials.find($("section")).removeClass('in-view');
		}
	}
	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');


});
