$('document').ready(function() {
    var mn = $('.menu-section');
    var mns_01 = 'menu-section-scroll-01';
    var mns_02 = 'menu-section-scroll-02';
    var hdr = $('.service-section').offset().top-100;
    var work = $('.work-section').offset().top - 100;
    var about = $('.about-section').offset().top - 100;
    var team  = $('.team-section').offset().top - 100;
    var contact = $('.contact-section').offset().top-100;

    var stt = $('.scrollToTop');
    var stt_1 = 'scrollToTop-1';
    var stt_2 = 'scrollToTop-2';
    $(window).scroll(function(){
      if($(this).scrollTop() > hdr){
        mn.addClass(mns_01);
        //stt.addClass(stt_1);
      }else{
        mn.removeClass(mns_01);
        //stt.removeClass(stt_1);
      }
      if($(this).scrollTop() > work){
        mn.addClass(mns_02);
        //stt.addClass(stt_2);
      }else{
        mn.removeClass(mns_02);
        //stt.removeClass(stt_2);
      }
      if($(this).scrollTop() > about){
        mn.removeClass(mns_02);
        //stt.removeClass(stt_2);
      }
      if($(this).scrollTop() > team){
        mn.addClass(mns_02);
        //stt.addClass(stt_2);
      }
      if($(this).scrollTop() > contact){
        mn.removeClass(mns_02);
        //stt.removeClass(stt_2);
      }
      //Check to see if the window is top if not then display button
      if ($(this).scrollTop() > 100) {
         $('.scrollToTop').fadeIn();
      } else {
         $('.scrollToTop').fadeOut();
      }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });
    var h0 = 0;
    var h1 = h0 + $('.header-section').height();
    var h2 = h1 + $('.service-section').height();
    var h3 = h2 + $('.work-section').height();
    var h4 = h3 +  $('.carousel-section').height() + $('.about-section').height();
    var h5 = h4  + $('.team-section').height()+ 100;
    //Click event to scroll to div
    $('.home-btt').on("click",function(){
      $('html, body').animate({ scrollTop: h0}, 1000);
    });
    $('.service-btt').on("click",function(){
      $('html, body').animate({ scrollTop: h1 }, 1000);
    });
    $('.work-btt').on("click",function(){
      $("html, body").animate({ scrollTop: h2}, 1000);
    });
    $('.about-btt').on("click",function(){
      $("html, body").animate({ scrollTop: h3}, 1000);
    });
    $('.team-btt').on("click",function(){
      $("html, body").animate({ scrollTop: h4}, 1000);
    });
    $('.contact-btt').on("click",function(){
      $("html, body").animate({ scrollTop: h5}, 1000);
    });
});
