$( document ).ready(function() {
  // Used for the Nav
  if ($("body.home").length > 0){
  	$('.nav_home').addClass('active');
  	// $('.big-logo').removeClass('hidden');
  	// $('.header-sticky').removeClass('header-fixed-shrink');
  	// $('.small-logo').addClass('visible-xs-block').addClass('visible-sm-block');
  	// $('.nav.navbar-nav').addClass('big-nav');
  }
  else if ($("body.pain_management").length > 0){
  	$('.nav_pain_management').addClass('active');
  }
  else if ($("body.wellness").length > 0){
  	$('.nav_wellness').addClass('active');
  }
  else if ($("body.about").length > 0){
  	$('.nav_about').addClass('active');
  }
  else if ($("body.portal").length > 0){
  	$('.nav_portal').addClass('active');
  }
  else if ($("body.faq").length > 0){
  	$('.nav_faq').addClass('active');
  }
  else if ($("body.contact").length > 0){
  	$('.nav_contact').addClass('active');
  }

  // Used for the Collapse (services page)

  $(".collapse-link").click(function () {
    var $this = $(this);
    $('.collapse').removeClass("in")
  });
});
