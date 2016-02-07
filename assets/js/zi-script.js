$(document).ready( function() {

	/*----------------------/
	/* PAGE LOADER
	/*---------------------*/

	$(window).on('load', function() {
		$('#preloader .loader-wrapper').fadeOut('slow');
		$('#preloader').delay(350).fadeOut('slow');
	});

	/*----------------------/
	/* NAVIGATION
	/*---------------------*/

	$('#navigation').localScroll({
		duration: 1000,
		easing: 'easeInOutExpo'
	});

	$(window).on('scroll', function(){
		if( $(document).scrollTop() > 150 ) {
			$('.navbar').addClass('active');

		}else {
			$('.navbar').removeClass('active');
		}
	});
	
	$('#navigation li a').on('click', function() {
		if($(this).parents('.navbar-collapse.collapse').hasClass('in')) {
			$('#navigation').collapse('hide');
		}
	});


	/*----------------------/
	/* INIT FITVID
	/*---------------------*/

	$('.page-video-wrapper').fitVids();


	/*-----------------------------/
	/* FEATURE CONTENT SLIDER
	/*---------------------------*/

	$('.feature-slides').bxSlider({
		mode: 'fade',
		auto: true,
		speed: 500,
		controls: false,
		adaptiveHeight: true
	});

	
	/*-----------------------------/
	/* INFINITE SCREENSHOT SLIDER
	/*---------------------------*/

	$('.app-screenshots').slick({
		dots: true,
		centerMode: true,
		cssEase: 'ease-in',
		variableWidth: true,
	});


	/*----------------------/
	/* NAVIGATION SCROLLING
	/*---------------------*/

	$(window).scroll( function() {
		if( $(this).scrollTop() > 300 ) {
			$('.back-to-top').fadeIn();
		} else {
			$('.back-to-top').fadeOut();
		}
	});

	$('.back-to-top').on( 'click', function(e) {
		e.preventDefault();

		$('body, html').animate({
			scrollTop: 0
		}, 800, 'easeInOutExpo');
	});

	if($('.learn-more').length > 0) {
		$('.learn-more').localScroll({
			duration: 1000,
			easing: 'easeInOutExpo'
		});
	}


	/*----------------------/
	/* FULLSCREEN VIDEO
	/*---------------------*/

	if($(".fullscreen-video-bg").length > 0) {
		if($.browser.mobile) {
			$(".fullscreen-video-bg").addClass('no-video-bg');
		}
	}


	/*----------------------/
	/* INIT WOW JS
	/*---------------------*/

	if($('.wow').length > 0) {
		new WOW().init();
	}


	/*----------------------/
	/* Fullscreen slider
	/*---------------------*/

	if($('.fullscreen-slider .slides').length > 0) {
		$('.fullscreen-slider .slides').maximage({
			cycleOptions: {
				fx: 'fade',
				prev: '#fullslider-arrow_left',
				next: '#fullslider-arrow_right',
				pager: '#fullslider-pager',
				speed: 4000
				// autostop: 1, // uncomment to disable autoplay
				// autostopCount: 1 // uncomment to disable autoplay
			}
		});
	}

});