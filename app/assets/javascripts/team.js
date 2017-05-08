$('document').ready(function() {
  var elShowmore = document.getElementById('show-more-team');
  var elShowless = document.getElementById('show-less-team');

  function showMoreMember() {
    var elHidden = document.getElementById('hidden-team');
    elHidden.style.display = "block";
    elShowmore.style.display = "none";
    elShowless.style.display = "block";
  }

  function showLessMember() {
    var elHidden = document.getElementById('hidden-team');
    elHidden.style.display = "none";
    elShowmore.style.display = "block";
    elShowless.style.display = "none";
  }

  elShowmore.addEventListener('click', showMoreMember, false);
  elShowless.addEventListener('click', showLessMember, false);
});
