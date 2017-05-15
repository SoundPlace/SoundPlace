
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

  $('audio').mediaelementplayer();

});

$(document).ready(function () {
	$('.home-tabs li a').click(function(){
	    if($(this).parent().hasClass('active')){
	     return false;
	   }
	$('.home-tabs li').removeClass('active');
	 $(this).parent().addClass('active');
	});

	$('.home-tabs li a').click(function(){
		if($('.home-tabs .charts-item').hasClass('active')) {
			$('.stream-content').css({"display":"none"});
			$('.charts-content').css({"display":"block"});
			$('.discover-content').css({"display":"none"});
		}
		else if($('.home-tabs .discover-item').hasClass('active')) {
			$('.stream-content').css({"display":"none"});
			$('.charts-content').css({"display":"none"});
			$('.discover-content').css({"display":"block"});
		}
		else {
			$('.stream-content').css({"display":"block"});
			$('.charts-content').css({"display":"none"});
			$('.discover-content').css({"display":"none"});
		}
	});
});

$(document).ready(function () {
	$('.header-nav li a').click(function(){
	    if($(this).parent().hasClass('selected')){
	     return false;
	    }
	    if($('.upload-btn').hasClass('selected')){
	    	return false;
	    }

	$('.header-nav li').removeClass('selected');
	 $(this).parent().addClass('selected');
	});

	$('.header-nav li a').click(function(){
		if($('.header-nav .home-item').hasClass('selected')) {
			$('.home').css({"display":"block"});
			$('.collection').css({"display":"none"});
			$('.upload').css({"display":"none"});
		}
		else if($('.header-nav .collection-item').hasClass('selected')) {
			$('.home').css({"display":"none"});
			$('.collection').css({"display":"block"});
			$('.upload').css({"display":"none"});
		}
		else {
			$('.home').css({"display":"none"});
			$('.collection').css({"display":"none"});
			$('.upload').css({"display":"block"});
		}
	});
});


$(document).ready(function () {
	$('.collection-tabs li a').click(function(){
	    if($(this).parent().hasClass('active')){
	     return false;
	    }

	$('.collection-tabs li').removeClass('active');
	 $(this).parent().addClass('active');
	});

	$('.collection-tabs li a').click(function(){
		if($('.collection-tabs .overview-item').hasClass('active')) {
			$('.overview-content').css({"display":"block"});
			$('.likes-content').css({"display":"none"});
			$('.playlists-content').css({"display":"none"});
			$('.albums-content').css({"display":"none"});
			$('.following-content').css({"display":"none"});
			$('.history-content').css({"display":"none"});
		}
		else if($('.collection-tabs .likes-item').hasClass('active')) {
			$('.overview-content').css({"display":"none"});
			$('.likes-content').css({"display":"block"});
			$('.playlists-content').css({"display":"none"});
			$('.albums-content').css({"display":"none"});
			$('.following-content').css({"display":"none"});
			$('.history-content').css({"display":"none"});
		}	
		else if($('.collection-tabs .playlists-item').hasClass('active')) {
			$('.overview-content').css({"display":"none"});
			$('.likes-content').css({"display":"none"});
			$('.playlists-content').css({"display":"block"});
			$('.albums-content').css({"display":"none"});
			$('.following-content').css({"display":"none"});
			$('.history-content').css({"display":"none"});
		}
		else if($('.collection-tabs .albums-item').hasClass('active')) {
			$('.overview-content').css({"display":"none"});
			$('.likes-content').css({"display":"none"});
			$('.playlists-content').css({"display":"none"});
			$('.albums-content').css({"display":"block"});
			$('.following-content').css({"display":"none"});
			$('.history-content').css({"display":"none"});
		}
		else if($('.collection-tabs .following-item').hasClass('active')) {
			$('.overview-content').css({"display":"none"});
			$('.likes-content').css({"display":"none"});
			$('.playlists-content').css({"display":"none"});
			$('.albums-content').css({"display":"none"});
			$('.following-content').css({"display":"block"});
			$('.history-content').css({"display":"none"});
		}
		else {
			$('.overview-content').css({"display":"none"});
			$('.likes-content').css({"display":"none"});
			$('.playlists-content').css({"display":"none"});
			$('.albums-content').css({"display":"none"});
			$('.following-content').css({"display":"none"});
			$('.history-content').css({"display":"block"});
		}
	});
});

$(document).ready(function () {

	$('.likes-content a').click(function(){
		$('.header-nav li').removeClass('selected');
	 	$('.header-nav .home-item').addClass('selected');
		$('.home-tabs li').removeClass('active');
		$('.home-tabs .charts-item').addClass('active');
		$('.collection').css({"display":"none"});
		$('.home').css({"display":"block"});
		$('.stream-content').css({"display":"none"});
		$('.charts-content').css({"display":"block"});

	});
});
