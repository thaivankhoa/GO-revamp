$(document).ready(function(){

  //Navigation Menu
  if(this.location.pathname == "/home/na50"){
    $('.navbar-nav > li:nth-child(2)').addClass('active');
    $('#na100 > a').css('font-weight','normal');
  }
  else if(this.location.pathname == "/home/na100"){
    $('.navbar-nav > li:nth-child(2)').addClass('active');
    $('#na50 > a').css('font-weight','normal');
  }
  else if(this.location.pathname == "/home/therma_tech" || this.location.pathname == "/home/fil_tration"){
    $('.navbar-nav > li:nth-child(3)').addClass('active');
  }
  else if(this.location.pathname == "/home/negative" || this.location.pathname == "/home/ozone"){
    $('.navbar-nav > li:nth-child(4)').addClass('active');
  }
  else{
    $('a[href="' + this.location.pathname + '"]').parent().addClass('active');
  }

  //Auto Image
  var numIMG = $('.img-element').size();
  var current = $('.list-image > .active').index()+1;
  var autoNext = setInterval(
    function() {
        if(current == numIMG)
        {
          deleteCurrent(current);
          current = 1;
          addCurrent(current);
        }
        else
        {
          deleteCurrent(current);
          current++;
          addCurrent(current);
        }
        setTimeout("switchImage()", 4000);
      },
      4000
  );

  colorDisplayNone("pink", "blue");

  $current_list = $('#img-0' + current);
  $('.img-element').click(function() {
    deleteCurrent(current);

    $current_list = $(this);
    current = $current_list.index() + 1;
    addCurrent(current);
  });
   
  var $current_color = $('#white');
  $('.product-color').click(function() {
    deleteCurrent(current);
    current = 1;
    $current_color.removeClass('product-active');
    $current_color = $(this);
    $current_color.addClass('product-active');
    var img_id = $current_color.attr('id');

    addCurrent(1);

    for(var img = 2; img <= numIMG; img++){
      deleteCurrent(i);
    }
    for(var i = 1; i <= numIMG; i++){
      $('#'+img_id+'-0'+i).css('display','inline-block');
      $('#list-'+img_id+'-0'+i).css('display','inline-block');
    }
    if(img_id == 'white'){
      colorDisplayNone("pink", "blue");
    }
    if(img_id == 'blue'){
      colorDisplayNone("pink", "white");
    }
    if(img_id == 'pink'){
      colorDisplayNone("white", "blue");
    }
  });

  $('#iconup').css('display','none');
  $('.dropdown').hover(function(){
      $('.dropdown-menu').css('display','block');
      $('#iconup').css('display','inline-block');
      $('#icondown').css('display','none');
    },function(){
      $('.dropdown-menu').css('display','none');
      $('#iconup').css('display','none');
      $('#icondown').css('display','inline-block');
  });
  $('.dropdown-menu').hover(function(){
    $('.dropdown-menu').css('display','block');
    $('#iconup').css('display','inline-block');
    $('#icondown').css('display','none');
  });

  //Header Dropdown
  $current_header = $('.dropdown:nth-child(0)');
  var count_header = 1;
  $('.dropdown').click(function(){
    if($current_header.index() === $(this).index()){
      count_header ++;
      if(count_header % 2 === 0){
        $current_header.animate({height: '60px'}, '1s');
        $('.navbar-nav').animate({height: '320px'}, '1s');
        $('.discover-section > #na50').animate({top: '665px'});
      }
      else if(count_header % 2 === 1){
        $current_header.animate({height: '180px'}, '1s');
        $('.navbar-nav').animate({height: '450px'}, '1s');
        $('.discover-section > #na50').animate({top: '800px'});
      }
    }
    else if ($current_header.index() != $(this).index()){
      $current_header.animate({height: '60px'}, '1s');
      $current_header = $(this);
      $current_header.animate({height: '180px'}, '1s');
      $('.navbar-nav').animate({height: '450px'}, '1s');
      $('.discover-section > #na50').animate({top: '800px'});
      count_header = 1;
    }
  });

  var count = 0;
  $('.sidebar').click(function(){
    count ++;
    if(count % 2 === 0){
      $('.navbar-nav').animate({height: '0px'});
      $('.discover-section > #na50').animate({top: '335px'});
    }
    else if(count % 2 === 1){
      $('.navbar-nav').animate({height: '320px'});
      $('.discover-section > #na50').animate({top: '665px'});
    }
  });

  //Footer Dropdown
  $current_footer = $('.footer-element:nth-child(0)');
  var count_footer = 1;
  $('.footer-element').click(function(){
    if($current_footer.index() === $(this).index()){
      count_footer ++;
      if(count_footer % 2 === 0){
        $current_footer.animate({height: '60px'}, '1s');
      }
      else if(count_footer % 2 === 1){
        $current_footer.animate({height: '180px'}, '1s');
        
      }
    }
    else if ($current_footer.index() != $(this).index()){
      $current_footer.animate({height: '60px'}, '1s');
      $current_footer = $(this);
      $current_footer.animate({height: '180px'}, '1s');
      count_footer = 1;
    }
  });

  //Functions
  function deleteCurrent(current){
    $('#img-0' + current).removeClass('active');
    $('#img-large-0' + current).removeClass('active');
    $('#indicator-0' + current).removeClass('active');
  }

  function addCurrent(current){
    $('#img-0' + current).addClass('active');
    $('#img-large-0' + current).addClass('active');
    $('#indicator-0' + current).addClass('active');
  }

  function colorDisplayNone(color1, color2){
    for(var i = 1; i <= numIMG; i++){
      $('#' + color1 + '-0' + i).css('display','none');
      $('#' + color2 + '-0' + i).css('display','none');
      $('#list-' + color1 + '-0' + i).css('display','none');
      $('#list-' + color2 + '-0' + i).css('display','none');
    }
  }
});
