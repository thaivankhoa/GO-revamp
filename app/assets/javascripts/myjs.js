$('document').ready(function() {
    var current_menu = $('.menu-content > li:nth-child(2)');
    var numService = $('.service-row').size();

    //Set position project element
    var left = 60;
    var numProject = $('.project-element').size();
    for(var i = 1; i <= numProject; i++){
      $('.project-element:nth-child(' + i + ')').css('left',left + 'px');
      left = left + 110;
    }

    //Button left project
    var btn_left = 0;
    var first_left = 60;
    // $('.btn-left').click(function(){
    //   btn_left = btn_left + 110;
    //   var current_left = first_left;
    //   for(var i = 1; i <= numProject; i++){
    //     var project_left = current_left + btn_left;
    //     $('.project-element:nth-child(' + i + ')').animate({'left':project_left + 'px'},500);
    //     current_left = current_left + 110;
    //     if(i === 1){
    //       first_left = project_left - 110;
    //     }
    //   }
    //   alert(first_left);
    //   if(btn_left === 0){
    //     current_left = 60;
    //     for(var i = 1; i <= numProject; i++){
    //       $('.project-element:nth-child(' + i + ')').animate({'left':current_left + 'px'},500);
    //       current_left = current_left + 110;
    //     }
    //   }
    // });

    //Button left project
    // $('.btn-right').click(function(){
    //   btn_left = btn_left + 110;
    //   var current_left = first_left;
    //   for(var i = 1; i <= numProject; i++){
    //     var project_left = current_left - btn_left;
    //     $('.project-element:nth-child(' + i + ')').animate({'left':project_left + 'px'},500);
    //     current_left = current_left + 110;
    //     if(i === 1){
    //       first_left = project_left;
    //     }
    //   }
    //   if(btn_left > current_left){
    //     current_left = 60;
    //     for(var i = 1; i <= numProject; i++){
    //       $('.project-element:nth-child(' + i + ')').animate({'left':current_left + 'px'},500);
    //       current_left = current_left + 110;
    //     }
    //   }
    // });

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

    //Set height auto for portfolio
    var heightPortfolio = $('.work-section > .content').height() + 160;
    $('.bg-portfolio').css('height', heightPortfolio + 'px');

    //Set height auto for contact
    var heightContact = $('.contact-section').height() + 100;
    $('.bg-contact').css('height', heightContact + 'px');

    //Auto slider
    var autoNext = setInterval(setAuto,10000); 
    $('.image-slider > .image:nth-child(1) > img').css({'transform':'scale(1)','opacity':'0.3'});

    
    //Scroll
    $(window).scroll(function(){

      //Check to see if the window is top if not then display button
      var height_slider = $('.slider-section').height() - 100;
      if ($(this).scrollTop() > height_slider) {
        $('.scrollToTop').fadeIn();
        $('.header-section').css('position','fixed');
        $('.header-section').addClass('header-fixed');
      } else {
         $('.scrollToTop').fadeOut();
         $('.header-section').css('position','absolute');
         $('.header-section').removeClass('header-fixed');
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

    //Input contact
    var current_text = 1;
    $('.form').click(function(){
      $('.form:nth-child(' + current_text + ') > h5').css('top','30px');
      $('.form:nth-child(' + current_text + ') > h5').css('color','#878787');
      $('.form:nth-child(' + current_text + ') > input').css('border-bottom','1px solid #d8d8d8');
      current_text = $(this).index() + 1;
      $('.form:nth-child(' + current_text + ') > h5').css('top','0px');
      $('.form:nth-child(' + current_text + ') > h5').css('color','#f7c31b');
      $('.form:nth-child(' + current_text + ') > input').css('border-bottom','2px solid #f7c31b');
      $('.form:nth-child(' + current_text + ') > input').focus();
    });
    $('.form').focusout(function(){
      $('.form:nth-child(' + current_text + ') > h5').css('top','30px');
      $('.form:nth-child(' + current_text + ') > h5').css('color','#878787');
      $('.form:nth-child(' + current_text + ') > input').css('border-bottom','1px solid #d8d8d8');
    });


    
    //Function
    function setAuto(){
      current_slider = current_slider + 1;
      if(current_slider > 3){
        current_slider = 1;
      }
      $('.image-slider > .image:nth-child(' + current_slider + ') > img').css({'transform':'scale(1)','opacity':'0.4'});
      var before = current_slider - 1;
      var next = current_slider + 1;
      if(before < 1){
        before = 3;
      }
      if(next > 3){
        next = 1;
      }
      $('.image-slider > .image:nth-child(' + next + ') > img').css({'transform':'scale(1.5)','opacity':'0'});
      $('.image-slider > .image:nth-child(' + before + ') > img').css({'opacity':'0'});
    }
    function animateService_01(){
      //Amination image
      $('.service-row:nth-child(1) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'1s'});
      $('.service-row:nth-child(2) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'1.5s'});
      $('.service-row:nth-child(3) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'2.5s'});
      $('.service-row:nth-child(4) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'2s'});
      //Amination Text
      $('.service-row:nth-child(1) > .text-service').delay(3000).animate({'opacity':'1'}, 500);
      $('.service-row:nth-child(2) > .text-service').delay(3500).animate({'opacity':'1'}, 500);
      $('.service-row:nth-child(3) > .text-service').delay(4500).animate({'opacity':'1'}, 500);
      $('.service-row:nth-child(4) > .text-service').delay(4000).animate({'opacity':'1'}, 500);
    }
    function animateService_02(){
      //Amination image
      $('.service-row:nth-child(1) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'1s'});
      $('.service-row:nth-child(2) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'2s'});
      $('.service-row:nth-child(3) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'3s'});
      $('.service-row:nth-child(4) > .service-img').css({'transform':'scale(1)','top':'0px','left':'0px', 'transition-delay':'4s'});
      //Amination Text
      $('.service-row:nth-child(1) > .text-service').delay(1500).animate({'opacity':'1'}, 500);
      $('.service-row:nth-child(2) > .text-service').delay(2500).animate({'opacity':'1'}, 500);
      $('.service-row:nth-child(3) > .text-service').delay(3500).animate({'opacity':'1'}, 500);
      $('.service-row:nth-child(4) > .text-service').delay(4500).animate({'opacity':'1'}, 500);
    }

});

