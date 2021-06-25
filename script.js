$(function(){
    // header
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let toggleNav = $("#toggleNav");
    let formcall = $("#formcall");
    let toggleForm = $("#form_message")

    checkScroll(scrollPos, introH)

    $(window).on("scroll resize", function(){
      let introH = intro.innerHeight();
      scrollPos = $(this).scrollTop();

      checkScroll(scrollPos, introH);

    });

    function checkScroll(scrollPos, introH){
      if(scrollPos > introH){
            header.addClass("follow")
      } else {
            header.removeClass("follow")
      }
    }

    // scroll
    $("[data-scroll]").on("click", function(event){
      event.preventDefault();

      let blockId = $(this).data('scroll');
      let blockOffset = $(blockId).offset().top;

      nav.removeClass("show")

      $("html, body").animate({
        scrollTop: blockOffset - 145
      })
    });

    // nav

    toggleNav.on("click", function(event){
      event.preventDefault();
      nav.toggleClass("show");
    });

    //quickinfo anim

    // review
    // initReview();
    // function initReview()
  	// {
  	// 	if($('.review_slider').length)
  	// 	{
  	// 		var reviewSlider = $('.review_slider');
  	// 		reviewSlider.owlCarousel(
  	// 		{
  	// 			loop:true,
  	// 			autoplay:false,
  	// 			smartSpeed:1200,
  	// 			nav:false,
  	// 			dots:false,
  	// 			// responsive:
  	// 			// {
  	// 			// 	0:{items:1},
  	// 			// 	480:{items:1},
  	// 			// 	720:{items:1},
  	// 			// 	990:{items:1}
  	// 			// }
  	// 		});
    //
  	// 		if($('.review_prev').length)
  	// 		{
  	// 			var prev = $('.review_prev');
  	// 			prev.on('click', function()
  	// 			{
  	// 				langSlider.trigger('prev.owl.carousel');
  	// 			});
  	// 		}
    //
  	// 		if($('.review_next').length)
  	// 		{
  	// 			var next = $('.review_next');
  	// 			next.on('click', function()
  	// 			{
  	// 				langSlider.trigger('next.owl.carousel');
  	// 			});
  	// 		}
  	// 	}
  	// }

    // form
    formcall.on("click", function(event){
      event.preventDefault();
      toggleForm.toggleClass("show");
    });

    //login

      function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();

        var id_token = googleUser.getAuthResponse().id_token;
      }

    function signOut() {
  gapi.auth2.getAuthInstance().signOut().then(function() {
    console.log('user signed out')
  })
}
});
