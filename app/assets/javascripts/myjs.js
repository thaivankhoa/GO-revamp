$('document').ready(function() {
  	var mn = $('.menu-section');
  	var mns = 'menu-section-scroll';
  	var hdr = $('.header-section').height();
    var service = $('.header-section').height()+$('.menu-section').height()+$('.service-section').height();
  	$(window).scroll(function(){
  		if($(this).scrollTop() > service){
  			mn.addClass(mns);
  		}else{
  			mn.removeClass(mns);
  		}
  	});
});