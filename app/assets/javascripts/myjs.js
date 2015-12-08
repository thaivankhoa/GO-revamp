$('document').ready(function() {
  	var mn = $('.menu-section');
  	var mns_01 = 'menu-section-scroll-01';
  	var hdr = $('.header-section').height();
    var service = $('.header-section').height()+$('.menu-section').height()+$('.service-section').height();
  	$(window).scroll(function(){
  		if($(this).scrollTop() > hdr){
  			mn.addClass(mns_01);
  		}else{
  			mn.removeClass(mns_01);
  		}
      if($(this).scrollTop() > service){
        mn.addClass(mns);
      }else{
        mn.removeClass(mns);
      }
  	});
});