$('document').ready(function() {

  var showMoreButton = $('#show-more-team');
  var showLessButton = $('#show-less-team');
  var hiddenTeam = $('#hidden-team');

  showLessButton.hide();
  hiddenTeam.hide();

  showMoreButton.click(function() {
      $('html, body').animate({
          scrollTop: $('.team-section').offset().top + 440
      }, 500);
      hiddenTeam.slideDown(500,"linear",false);
      showMoreButton.hide();
      showLessButton.fadeIn(500);
  });

  showLessButton.click(function() {
      $('html, body').animate({
          scrollTop: $('.team-section').offset().top - 50
      }, 500);
      hiddenTeam.slideUp(500,"linear",false);

      showLessButton.hide();
      showMoreButton.fadeIn(500);

  });

});
