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

    // review
    //
    // let slider = $("#reviewSlider");
    //
    // slider.slick({
    //   infinite: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   fade: true,
    //   arrows: false
    // });

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
