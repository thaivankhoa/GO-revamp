$('document').ready(function(){

  if ( window.innerWidth > 800 ) {
    $('.portfolio-details .portfolio-content .item').css('height', $(window).width()/4 + 'px');
  }
  else
  {
    $('.portfolio-details .portfolio-content .item').css('height', $(window).width() + 'px');
  }

  $(window).resize(function (){
    if ( window.innerWidth > 800 ) {
      $('.portfolio-details .portfolio-content .item').css('height', $(window).width()/4 + 'px');
    }
    else
    {
      $('.portfolio-details .portfolio-content .item').css('height', $(window).width() + 'px');
    }
  })
});



