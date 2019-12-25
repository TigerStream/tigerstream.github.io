$(document).ready(function() {
  
  /***************** Page Mask ******************/
  
  jQuery.waitForImages.hasImgProperties = ['background','backgroundImage'];
  jQuery('body').waitForImages(function() {
      jQuery(".page-mask").delay(5000).fadeOut('1000');
      jQuery('body').css('overflowY','auto');
  });
  
  // $(".page-mask").delay(5000).fadeOut('500');
  
  $('.wp1,.wp2,.wp3,.wp4').addClass('animated fadeInUp');

  $('.wp5').addClass('animated fadeIn');

  /***************** Waypoints ******************/

  $('.features').waypoint(function() {
    $('.wp6,.wp7,.wp8').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  
  $('.services').waypoint(function() {
    $('.wp9,.wp10,.wp11').addClass('animated fadeInLeft');
    $('.wp10,.wp11').addClass('animated fadeInUp');
    $('.wp12').addClass('animated zoomIn');
    $('.wp13').addClass('animated fadeIn');
  }, {
    offset: '65%'
  });

  $('.services-extra').waypoint(function() {
    $('.wp14').addClass('animated fadeInLeft');
    $('.wp15').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });

  $('.products').waypoint(function() {
    $('.wp16,.wp17,.wp18,.wp19').addClass('animated fadeIn');
    $('.wp20').addClass('animated fadeInDown');
  }, {
    offset: '75%'
  });

  $('.why').waypoint(function() {
    $('.wp21').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });

  $('.contact').waypoint(function() {
    $('.wp22').addClass('animated fadeIn');
  }, {
    offset: '75%'
  });
  


	/***************** Initiate Flexslider ******************/
	$('.flexslider').flexslider({
		animation: "slide"
	});

	/***************** Initiate Fancybox ******************/

	$('.single_image').fancybox({
		padding: 4,
	});

	/***************** Tooltips ******************/
    $('[data-toggle="tooltip"]').tooltip();

	/***************** Nav Transformicon ******************/

	/* When user clicks the Icon */
	$('.nav-toggle').click(function() {
		$(this).toggleClass('active');
		$('.header-nav').toggleClass('open');
		event.preventDefault();
	});
	/* When user clicks a link */
	$('.header-nav li a').click(function() {
		$('.nav-toggle').toggleClass('active');
		$('.header-nav').toggleClass('open');

	});

	/***************** Header BG Scroll ******************/

	$(function() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();

			if (scroll >= 20) {
				$('section.navigation').addClass('fixed');
				$('header').css({
					"border-bottom": "none",
					"padding": "35px 0"
				});
				$('header .member-actions').css({
					"top": "26px",
				});
				$('header .navicon').css({
					"top": "34px",
				});
			} else {
				$('section.navigation').removeClass('fixed');
				$('header').css({
					"border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
					"padding": "50px 0"
				});
				$('header .member-actions').css({
					"top": "41px",
				});
				$('header .navicon').css({
					"top": "48px",
				});
			}
		});
	});
	/***************** Smooth Scrolling ******************/

	$(function() {

		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 2000);
					return false;
				}
			}
		});

	});

});