
$(document).ready(function(){
  $('.header-carousel.slick-slider').slick({
	   	slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		infinite: true,
	  	speed: 500,
	  	fade: true,
	  	cssEase: 'linear'
  	});

  $('.testimonials-carousel.slick-slider').slick({
	   	slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
		draggable: false,
		pauseOnFocus: true,

	});	

  $(window).bind('scroll',function(){
  	if($(window).scrollTop()>0){
  		$('.logo-nav-box').addClass('navbar-fixed-top')}
	else{
		$('.logo-nav-box').removeClass('navbar-fixed-top')}
	});


});




