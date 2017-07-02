$('document').ready(function(){
  var elAll = document.getElementById('all');
  var elWeb = document.getElementById('web');
  var elMobile = document.getElementById('mobile');
  var elAllGroup = document.getElementById('all-group');
  var elWebGroup = document.getElementById('web-group');
  var elMobileGroup = document.getElementById('mobile-group');
  elAllGroup.style.display = 'block';
  elWebGroup.style.display = 'none';
  elMobileGroup.style.display = 'none';
  function changeState() {
    var elNav = document.getElementsByTagName('li');
    elAll.firstChild.className = 'deactive';
    elWeb.firstChild.className = 'deactive';
    elMobile.firstChild.className = 'deactive';
    this.firstChild.className = "active";
    if (elAll.firstChild.className == 'active')
    {
        elAllGroup.style.display = 'block';
        elWebGroup.style.display = 'none';
        elMobileGroup.style.display = 'none';
    }
        if (elWeb.firstChild.className == 'active')
    {
        elAllGroup.style.display = 'none';
        elWebGroup.style.display = 'block';
        elMobileGroup.style.display = 'none';
    }
        if (elMobile.firstChild.className == 'active')
    {
        elAllGroup.style.display = 'none';
        elWebGroup.style.display = 'none';
        elMobileGroup.style.display = 'block';
    }
  }
  elAll.addEventListener('click', changeState, false);
  elMobile.addEventListener('click', changeState, false);
  elWeb.addEventListener('click', changeState, false);
});



