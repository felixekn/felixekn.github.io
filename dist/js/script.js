$(document).ready(function() {
	//------------Mobile View Navigation------------//
	var $menu = $('.menu');
	var $menuToggle = $('.menu-toggle');
	var $toTop = $('.back-to-top');
	var $scrollDown = $('.scroll-down-wrapper');
	var resized;
	// switches menu to mobile view if screen width or device width are <= 700px
	function mobileView(menu, menuToggle, toTop, scrollDown) {
		if (window.matchMedia('(max-device-width: 700px)').matches || window.matchMedia('(max-width: 700px)').matches ) {
			menu.removeClass('desktop');
			menu.addClass('mobile')
			menuToggle.addClass('mobile');
			toTop.css({
				display: "block",
				opacity: "1"
			});
			scrollDown.css("display", "none");
		} else {
			menu.removeClass('mobile');
			menu.addClass('desktop');
			menuToggle.removeClass('mobile');
			toTop.css({
				display: "none",
				opacity: "0"
			});
			scrollDown.css("display", "block");
		}
	}
	mobileView($menu, $menuToggle, $toTop, $scrollDown);

	// open and closes nav
	$menuToggle.click(function(event) {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$menu.addClass('close');
		} else {
			$(this).addClass('active');
			$menu.removeClass('close');
		}
	});
	$(document).on('mousedown touchstart', function(e) {
	  //if the click has happend inside the menu the menu toggle then ignore it
	  if (!$(e.target).closest('.menu ul li a, .menu ul li span a, .menu-toggle').length) {
	    	$menuToggle.removeClass('active');
			$menu.addClass('close');
	  }
	})

	//----------Image Gallery Photo Resize----------//
	var $container = $('.img-container');
	var $img = $('.img-container img');
	function imageCover($image) {
		console.log("accessed");
		$image.each(function(){
	        var imgRatio = $(this).height() / $(this).width();
	       	var containerRatio = $container.height() / $container.width();
	        if(imgRatio<containerRatio){
	            $(this).addClass('wide-img');
	            ($(this).hasClass('tall-img')) ? $(this).removeClass('tall-img') : null;
	        }else{
	            $(this).addClass('tall-img');
	            ($(this).hasClass('wide-img')) ? $(this).removeClass('wide-img') : null;
	        }
	    });
	};
	// when screen is resized, runs mobileView() every 100ms
	window.onresize = function () {
		clearTimeout(resized);
		resized = setTimeout(function() {
			mobileView($menu, $menuToggle, $toTop, $scrollDown);
			imageCover($img);
		}, 100);
	};

	// Code stolen from css-tricks for smooth scrolling to an anchor
	// https://css-tricks.com/snippets/jquery/smooth-scrolling/
	$(function() {
  		$('a[href*=#]:not([href=#])').click(function() {
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      			var target = $(this.hash);
      			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      			if (target.length) {
        			$('html,body').animate({
          				scrollTop: target.offset().top
        			}, 1000);
        			return false;
      			}
    		}
  		});
	});
});
