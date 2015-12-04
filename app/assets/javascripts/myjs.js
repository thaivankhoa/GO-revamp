$('document').ready(function() {
  	var mn = $('.menu-section');
  	mns = 'menu-section-scroll';
  	hdr = $('.header-section').height();
  	$(window).scroll(function(){
  		if($(this).scrollTop() > hdr){
  			mn.addClass(mns);
  		}else{
  			mn.removeClass(mns);
  		}
  	});
});