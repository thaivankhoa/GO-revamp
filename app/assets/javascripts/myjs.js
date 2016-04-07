$('document').ready(function() {
    var current_menu = $('.menu-content > li:nth-child(2)');
    var numMenu = $('.menu-content > li').size();

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
    $('.slider-content > button').css({'opacity':'1','transition':'1s','transition-delay':'1.5s'});

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
    $('.project-page > .project-element').click(function() {
      current_portfolio.animate({'margin-left':'-100%'},500);
      current_id_project.removeClass('active');

      var id = $(this).attr('id');
      current_portfolio = $('#' + id + '_project');
      current_id_project = $(this);

      current_id_project.addClass('active');
      current_portfolio.css({'margin-left':'100%'});
      current_portfolio.animate({'margin-left':'0%'},500);
    });

    //Scroll
    var scroll_header = 0;
    $(window).scroll(function(){

      //Check to see if the window is top if not then display button
      var height_slider = $('.slider-section').height() - 100;
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

      if ($(this).scrollTop() > $('.slider-section').offset().top - 60){
        
        current_menu.removeClass('active');
        current_menu = $('#home');
        current_menu.addClass('active');
      }

      if ($(this).scrollTop() > $('.service-section').offset().top - 60){
        $('.service-element:nth-child(5)').css({'margin-left':'0px','opacity':'1','transition':'1s'});
        $('.service-element:nth-child(6)').css({'margin-top':'100px','opacity':'1','transition':'1s 0.5s'});
        $('.service-element:nth-child(7)').css({'margin-top':'100px','opacity':'1','transition':'1s 0.5s'});
        $('.service-element:nth-child(8)').css({'margin-right':'50px','opacity':'1','transition':'1s'});
        current_menu.removeClass('active');
        current_menu = $('#service');
        current_menu.addClass('active');
      }

      if ($(this).scrollTop() > $('.porfolio-section').offset().top - 60){
        var delay_project = 0;
        for(var i = 1; i <= numProject; i++){
          $('.project-element:nth-child(' + i + ')').delay(delay_project).animate({'opacity':'1'}, 500);
          delay_project = delay_project + 200;
        }
        $('.image-first').delay(delay_project).animate({'margin-left':'0px','opacity':'1'}, 500);
        $('.portfolio-info').delay(delay_project).animate({'right':'0px','opacity':'1'}, 500);
        current_menu.removeClass('active');
        current_menu = $('#porfolio');
        current_menu.addClass('active');
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
        var current_top = $('.' + index + '-section').offset().top - 60;
        $('html, body').animate({ scrollTop: current_top }, 1000);

        if(index === 'service'){
          $('.service-element:nth-child(5)').css({'margin-left':'0px','opacity':'1','transition':'1s 1.2s'});
          $('.service-element:nth-child(6)').css({'margin-top':'100px','opacity':'1','transition':'1s 1.7s'});
          $('.service-element:nth-child(7)').css({'margin-top':'100px','opacity':'1','transition':'1s 1.7s'});
          $('.service-element:nth-child(8)').css({'margin-right':'50px','opacity':'1','transition':'1s 1.2s'});
        }
        if(index === 'porfolio'){
          var delay_project = 1000;
          for(var i = 1; i <= numProject; i++){
            $('.project-element:nth-child(' + i + ')').delay(delay_project).animate({'opacity':'1'}, 500);
            delay_project = delay_project + 200;
          }
          $('.image-first').delay(delay_project).animate({'margin-left':'0px','opacity':'1'}, 500);
          $('.portfolio-info').delay(delay_project).animate({'right':'0px','opacity':'1'}, 500);
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

    
    //Function
    function setAuto(){
      
    }
    // 
});

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

