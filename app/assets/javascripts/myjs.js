$('document').ready(function() {
  	var mn = $('.menu-section');
  	var mns = 'menu-section-scroll';
  	var hdr = $('.header-section').height();
  	$(window).scroll(function(){
  		if($(this).scrollTop() > hdr){
  			mn.addClass(mns);
  		}else{
  			mn.removeClass(mns);
  		}
  	});
});