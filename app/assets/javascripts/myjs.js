$('document').ready(function() {
  	var mn = $('.menu-section');
  	var mns_01 = 'menu-section-scroll-01';
    var mns_02 = 'menu-section-scroll-02';
  	var hdr = $('.service-section').offset().top;
    var work = $('.work-section').offset().top;
    var about = $('.about-section').offset().top - $('.menu-section').height();
  	$(window).scroll(function(){
  		if($(this).scrollTop() > hdr){
  			mn.addClass(mns_01);
  		}else{
  			mn.removeClass(mns_01);
  		}
      if($(this).scrollTop() > work){
        mn.addClass(mns_02);
      }else{
        mn.removeClass(mns_02);
      }
      if($(this).scrollTop() > about){
        mn.removeClass(mns_02);
      }
  	});
});