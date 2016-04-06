$('document').ready(function() {
    var current_menu = $('.menu-content > li:nth-child(2)');
    var numMenu = $('.menu-content > li').size();

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

      for(var i = 2; i <= numMenu; i++){
        var index = $('.menu-content > li:nth-child(' + i + ')').attr('id');
        var top = $('.' + index + '-section').height() - 60;
        // if($(this).scrollTop() > height){
        //   current_menu.removeClass('active');
        //   current_menu = $('.menu-content > li:nth-child(' + i + ')');
        //   current_menu.addClass('active');
        // }
      }

      if ($(this).scrollTop() > $('.service-section').offset().top - 200){
        $('.service-element:nth-child(5)').css({'margin-left':'0px','opacity':'1','transition':'1s'});
        $('.service-element:nth-child(6)').css({'margin-top':'100px','opacity':'1','transition':'1s 0.8s'});
        $('.service-element:nth-child(7)').css({'margin-top':'100px','opacity':'1','transition':'1s 0.8s'});
        $('.service-element:nth-child(8)').css({'margin-right':'50px','opacity':'1','transition':'1s'});
      }

      if ($(this).scrollTop() > $('.porfolio-section').offset().top - 200){
        var delay_project = 0;
        for(var i = 1; i <= numProject; i++){
          $('.project-element:nth-child(' + i + ')').delay(delay_project).animate({'opacity':'1'}, 500);
          delay_project = delay_project + 200;
        }
        $('.image-first').delay(delay_project).animate({'margin-left':'0px','opacity':'1'}, 500);
        $('.portfolio-info').delay(delay_project).animate({'right':'0px','opacity':'1'}, 500);
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
          $('.service-element:nth-child(6)').css({'margin-top':'100px','opacity':'1','transition':'1s 2s'});
          $('.service-element:nth-child(7)').css({'margin-top':'100px','opacity':'1','transition':'1s 2s'});
          $('.service-element:nth-child(8)').css({'margin-right':'50px','opacity':'1','transition':'1s 1.2s'});
        }
        if(index === 'porfolio'){
          var delay_project = 1000;
          for(var i = 1; i <= numProject; i++){
            $('.project-element:nth-child(' + i + ')').delay(delay_project).animate({'opacity':'1'}, 500);
            delay_project = delay_project + 300;
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
});

