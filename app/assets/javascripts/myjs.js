$('document').ready(function() {
    var current_menu = $('.menu-content > li:nth-child(2)');
    var numMenu = $('.menu-content > li').size();

    //Set width for partner-section

    var width = 20.5 * $('.partner-element').size();
    var navbar = window.matchMedia("screen and (min-width: 768px)");
    var navbar_01 = window.matchMedia("screen and (max-width: 767px)");
    if(navbar_01.matches){
      width = 410;
    }
    var navbar_02 = window.matchMedia("screen and (max-width: 586px)");
    if(navbar_02.matches){
      width = 620;
    }
    var navbar_03 = window.matchMedia("screen and (max-width: 368px)");
    if(navbar_03.matches){
      width = 1200;
    }

    $('.partner').css('width',width + '%');

    var left_partner = 0;
    $('.btn-right').click(function(){
      var sreen = 0;
      if(navbar.matches){
        sreen = 105;
      }
      if(navbar_01.matches){
        sreen = 103;
      }
      if(navbar_02.matches){
        sreen = 104;
      }
      if(navbar_03.matches){
        sreen = 102;
      }
      left_partner = left_partner - sreen;
      var width_partner = 0 - width;
      if(left_partner > width_partner){
        $('.partner').animate({'margin-left': left_partner + '%'},500);
      }else{
        left_partner = left_partner + sreen;
      }
    });
    $('.btn-left').click(function(){
      var sreen = 0;
      if(navbar.matches){
        sreen = 105;
      }
      if(navbar_01.matches){
        sreen = 103;
      }
      if(navbar_02.matches){
        sreen = 104;
      }
      if(navbar_03.matches){
        sreen = 102;
      }
      left_partner = left_partner + sreen;
      if(left_partner <= 0){
        $('.partner').animate({'margin-left': left_partner + '%'},500);
      }else{
        left_partner = left_partner - sreen;
      }
    });
    //jQuery for video loop background
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

    //Animation Content Slider
    $('.slider-title').css({'animation':'slider_content 0.5s forwards','animation-delay':'0.8s'});
    $('.slider-content > button').delay(1500).animate({'opacity':'1'},1000);

    //Set position project element
    var left = 60;
    var numProject = $('.project-element').size();
    for(var i = 1; i <= numProject; i++){
      $('.project-element:nth-child(' + i + ')').css('left',left + 'px');
      left = left + 110;
    }
    

    //Set height auto for slider
    var current_portfolio = $('#ideaburn_project');
    var current_id_project = $('.project-page > .project-element:first-child');
    var current_pro = 1;
    $('.project-page > .project-element').click(function() {
      $('.portfolio-content > .portfolio-element:nth-of-type(' + current_pro + ')').animate({'margin-left':'-100%'},500);
      $('.project-page > .project-element:nth-of-type(' + current_pro + ')').removeClass('active');
      current_id_project.removeClass('active');

      var id = $(this).attr('id');
      current_portfolio = $('#' + id + '_project');
      current_id_project = $(this);

      current_pro = current_portfolio.index();
      current_id_project.addClass('active');
      current_portfolio.css({'margin-left':'100%'});
      current_portfolio.animate({'margin-left':'5%'},500);
    });

    //Scroll
    var scroll_header = 0;
    var scroll_body = 0;
    var count_scroll = 0;
    $(window).scroll(function(){
      var navbar = window.matchMedia("screen and (min-width: 768px)");
      
      //Check to see if the window is top if not then display button
      var height_slider = $('.slider-section').height() - 100;
      if(navbar.matches){
        if ($(this).scrollTop() > height_slider) {
          $('.scrollToTop').fadeIn();
          $('.header-section').css('position','fixed');
          $('.header-section').addClass('header-fixed');

          scroll_header = scroll_header + 1;
          if(scroll_header === 1){
            $('.header-section').css({'margin-top':'-50px','opacity':'0'});
            $('.header-section').animate({'margin-top':'0px','opacity':'1'},500);
          }
        } else {
          scroll_header = 0;
          $('.scrollToTop').fadeOut();
          $('.header-section').css('position','absolute');
          $('.header-section').removeClass('header-fixed');
        }
      }
      

      if ($(this).scrollTop() > $('.slider-section').offset().top - 60){
        
        current_menu.removeClass('active');
        current_menu = $('#home');
        current_menu.addClass('active');
      }

      if ($(this).scrollTop() > $('.service-section').offset().top - 60){
        current_menu.removeClass('active');
        current_menu = $('#service');
        current_menu.addClass('active');
      }
      if ($(this).scrollTop() > $('.service-section').offset().top - 300){
        if(navbar.matches){
          $('.service-element:nth-child(1)').css({'margin-left':'0px','opacity':'1','transition':'1s'});
          $('.service-element:nth-child(2)').css({'margin-top':'100px','opacity':'1','transition':'1s 0.5s'});
          $('.service-element:nth-child(3)').css({'margin-right':'0px','opacity':'1','transition':'1s'});
        }
      }

      if ($(this).scrollTop() > $('.porfolio-section').offset().top - 60){
        current_menu.removeClass('active');
        current_menu = $('#porfolio');
        current_menu.addClass('active');
      }
      if ($(this).scrollTop() > $('.porfolio-section').offset().top - 300){
        if(navbar.matches){
          for(var i = 1; i <= 7; i++){
            $('.project-element:nth-child(1)').delay(0).animate({'opacity':'1'}, 500);
              $('.project-element:nth-child(7)').delay(0).animate({'opacity':'1'}, 500);
              $('.project-element:nth-child(2)').delay(200).animate({'opacity':'1'}, 500);
              $('.project-element:nth-child(6)').delay(200).animate({'opacity':'1'}, 500);
              $('.project-element:nth-child(3)').delay(400).animate({'opacity':'1'}, 500);
              $('.project-element:nth-child(5)').delay(400).animate({'opacity':'1'}, 500);
              $('.project-element:nth-child(4)').delay(600).animate({'opacity':'1'}, 500);
          }
          $('.image-first').delay(600).animate({'margin-left':'0px','opacity':'1'}, 500);
          $('.portfolio-info').delay(600).animate({'right':'0px','opacity':'1'}, 500);
        }
      }
      if ($(this).scrollTop() > $('.about-section').offset().top - 60){
        
        current_menu.removeClass('active');
        current_menu = $('#about');
        current_menu.addClass('active');
      }
      if ($(this).scrollTop() > $('.team-section').offset().top - 60){
        
        current_menu.removeClass('active');
        current_menu = $('#team');
        current_menu.addClass('active');
      }
      if ($(this).scrollTop() > $('.partner-section').offset().top - 60){
        
        current_menu.removeClass('active');
        current_menu = $('#partner');
        current_menu.addClass('active');
      }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });

    //Navbar Responsive
    $('.navbar').click(function(){
      $('.menu-content').slideToggle();
    });
    
    //Navigation
    $('.menu-content > li').click(function(){
      var index = $(this).attr('id');
      if (index === 'home') {
        $('html, body').animate({ scrollTop: 0 }, 1000);
      } else{
        var current_top = $('.' + index + '-section').offset().top - 59;
        $('html, body').animate({ scrollTop: current_top }, 1000);

        if(index === 'service'){
          $('.service-element:nth-child(1)').css({'margin-left':'0px','opacity':'1','transition':'1s 1.2s'});
          $('.service-element:nth-child(2)').css({'margin-top':'100px','opacity':'1','transition':'1s 1.7s'});
          $('.service-element:nth-child(3)').css({'margin-right':'0px','opacity':'1','transition':'1s 1.2s'});
        }
        if(index === 'porfolio'){
          for(var i = 1; i <= 7; i++){
            $('.project-element:nth-child(1)').delay(1000).animate({'opacity':'1'}, 500);
            $('.project-element:nth-child(7)').delay(1000).animate({'opacity':'1'}, 500);
            $('.project-element:nth-child(2)').delay(1200).animate({'opacity':'1'}, 500);
            $('.project-element:nth-child(6)').delay(1200).animate({'opacity':'1'}, 500);
            $('.project-element:nth-child(3)').delay(1400).animate({'opacity':'1'}, 500);
            $('.project-element:nth-child(5)').delay(1400).animate({'opacity':'1'}, 500);
            $('.project-element:nth-child(4)').delay(1600).animate({'opacity':'1'}, 500);
          }
          $('.image-first').delay(1600).animate({'margin-left':'0px','opacity':'1'}, 500);
          $('.portfolio-info').delay(1600).animate({'right':'0px','opacity':'1'}, 500);
        }
      }
      current_menu.removeClass('active');
      current_menu = $('#' + index);
      current_menu.addClass('active');
    });

    //Btn View About Us
    $('.btn-view').click(function(){
      var current_top = $('.about-section').offset().top - 100;
      $('html, body').animate({ scrollTop: current_top }, 1000);
    });

    //Btn See Details
    $('.btn-details ').click(function() {
      var about_section = $('.about-section').offset().top - 60;
      $('html, body').animate({ scrollTop: about_section }, 1000);
    });

    //Btn more project
    $('.btn-more-project').click(function() {
      $('.project-element').css('opacity','1');
      $('.project-element').css('display','block');
      $('.project-page').css('height','auto');
    });

    //Btn left portfolio
    $('.btn-left ').click(function() {
      $('.project-page > .project-element:nth-of-type(' + current_pro + ')').removeClass('active');
      $('.portfolio-content > .portfolio-element:nth-of-type(' + current_pro + ')').css({'margin-left':'5%'});
      $('.portfolio-content > .portfolio-element:nth-of-type(' + current_pro + ')').animate({'margin-left':'100%'},500);
      current_pro = current_pro - 1;
      if(current_pro < 1){
        current_pro = numProject;
      }
      $('.project-page > .project-element:nth-of-type(' + current_pro + ')').addClass('active');
      $('.portfolio-content > .portfolio-element:nth-of-type(' + current_pro + ')').css({'margin-left':'-100%'});
      $('.portfolio-content > .portfolio-element:nth-of-type(' + current_pro + ')').animate({'margin-left':'5%'},500);
    });

    //Btn right portfolio
    $('.btn-right ').click(function() {
      $('.project-page > .project-element:nth-of-type(' + current_pro + ')').removeClass('active');
      $('.portfolio-content > .portfolio-element:nth-of-type(' + current_pro + ')').css({'margin-left':'5%'});
      $('.portfolio-content > .portfolio-element:nth-of-type(' + current_pro + ')').animate({'margin-left':'-100%'},500);
      current_pro = current_pro + 1;
      if(current_pro > numProject){
        current_pro = 1;
      }
      $('.project-page > .project-element:nth-of-type(' + current_pro + ')').addClass('active');
      $('.portfolio-content > .portfolio-element:nth-of-type(' + current_pro + ')').css({'margin-left':'100%'});
      $('.portfolio-content > .portfolio-element:nth-of-type(' + current_pro + ')').animate({'margin-left':'5%'},500);
    });

    //Btn view demo project
    $('.btn-viewdemo').click(function() {
      $('.detail-project').css('display', 'block');
      $('.image-large > img:nth-child(' + current_pro + ')').css('display','block');
    });

    $('.bg-project').click(function() {
      $('.detail-project').css('display', 'none');
      $('.image-large > img:nth-child(' + current_pro + ')').css('display','none');
    });
    $('.image-large').hover(function(){
      var top_image = $('.image-large > img:nth-child(' + current_pro + ')').height() - $('.image-large').height();
      if(top_image > 0){
        $('.image-large').animate({'margin-top': '-' + top_image + 'px'}, 500);
      }
      }, function(){
        $('.image-large').animate({'margin-top': '0px'}, 500);
    });
    //Function
    function setAuto(){
    }
    // 
});

//Video Loop BackGround
function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);
}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

//Smooth Scroll Mouse
$(function(){
  
  var $window = $(window);    //Window object
  
  var scrollTime = 0.5;     //Scroll time
  var scrollDistance = 150;   //Distance. Use smaller value for shorter scroll and greater value for longer scroll
    
  $window.on("mousewheel DOMMouseScroll", function(event){
    
    event.preventDefault(); 
                    
    var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta*scrollDistance);
      
    TweenMax.to($window, scrollTime, {
      scrollTo : { y: finalScroll, autoKill:true },
        ease: Power1.easeOut, //For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
        autoKill: true,
        overwrite: 5              
      });
          
  });
  
});

