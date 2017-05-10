$('document').ready(function() {

  var showMoreButton = $('#show-more-team');
  var showLessButton = $('#show-less-team');
  var hiddenTeam = $('.hidden-team');

  showLessButton.hide();
  hiddenTeam.hide();

  showMoreButton.click(function() {
      hiddenTeam.slideDown(500,"linear",false);
      $('html, body').animate({
          scrollTop: $('.hidden-team').offset().top - 75
      }, 1000);
      showMoreButton.hide();
      showLessButton.fadeIn(500);
  });

  showLessButton.click(function() {
      $('html, body').animate({
          scrollTop: $('.team-section').offset().top - 50
      }, 1000);
      hiddenTeam.slideUp(500,"linear",false);
      showLessButton.hide();
      showMoreButton.fadeIn(500);

  });

});
