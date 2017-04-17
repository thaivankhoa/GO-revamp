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
  // show details
  var all = document.getElementById('all-group');
  var details = document.getElementById('detail-project');
  var elAll1 = document.getElementById('techlist');
  var elAll2 = document.getElementById('idea-burn');
  var elAll3 = document.getElementById('giveasia');
  var elAll4 = document.getElementById('weath');
  var elAll13 = document.getElementById('artfolo');
  var elAll14 = document.getElementById('cpd');
  var elAll15 = document.getElementById('blix');
  var elAll16 = document.getElementById('built');
  var elAll17 = document.getElementById('flat');
  var elAll18 = document.getElementById('gllu');
  var elAll19 = document.getElementById('fit');
  var elAll20 = document.getElementById('stage');
  var elAll21 = document.getElementById('study');
  var elAll22 = document.getElementById('iadoa');
  var elAll23 = document.getElementById('serumi');
  var elAll24 = document.getElementById('scope');
  var elAll25 = document.getElementById('toned');
  var elAll26 = document.getElementById('tyk');
  var elAll27 = document.getElementById('war');
  var elAll28 = document.getElementById('natt');

  var elWeb1 = document.getElementById('corpzap');
  var elWeb2 = document.getElementById('luxufy');
  var elWeb3 = document.getElementById('student');
  var elWeb4 = document.getElementById('luxenomad');
  var elMobile1 = document.getElementById('booqed');
  var elMobile2 = document.getElementById('mywork');
  var elMobile3 = document.getElementById('app2rist');
  var elMobile4 = document.getElementById('nattrart');

  function all1Click(){
    details.style.display = "block";
    details.lastChild.childNodes[0].style.display = "block"
  }
  function all2Click(){
    details.style.display = "block";
    details.lastChild.childNodes[1].style.display = "block"
  }
  function all3Click(){
    details.style.display = "block";
    details.lastChild.childNodes[2].style.display = "block"
  }
  function all4Click(){
    details.style.display = "block";
    details.lastChild.childNodes[3].style.display = "block"
  }
  function all13Click(){
    details.style.display = "block";
    details.lastChild.childNodes[12].style.display = "block"
  }
  function all14Click(){
    details.style.display = "block";
    details.lastChild.childNodes[13].style.display = "block"
  }
  function all15Click(){
    details.style.display = "block";
    details.lastChild.childNodes[14].style.display = "block"
  }
  function all16Click(){
    details.style.display = "block";
    details.lastChild.childNodes[15].style.display = "block"
  }
  function all17Click(){
    details.style.display = "block";
    details.lastChild.childNodes[16].style.display = "block"
  }
  function all18Click(){
    details.style.display = "block";
    details.lastChild.childNodes[17].style.display = "block"
  }
  function all19Click(){
    details.style.display = "block";
    details.lastChild.childNodes[18].style.display = "block"
  }
  function all20Click(){
    details.style.display = "block";
    details.lastChild.childNodes[19].style.display = "block"
  }
  function all21Click(){
    details.style.display = "block";
    details.lastChild.childNodes[20].style.display = "block"
  }
  function all22Click(){
    details.style.display = "block";
    details.lastChild.childNodes[21].style.display = "block"
  }
  function all23Click(){
    details.style.display = "block";
    details.lastChild.childNodes[22].style.display = "block"
  }
  function all24Click(){
    details.style.display = "block";
    details.lastChild.childNodes[23].style.display = "block"
  }
  function all25Click(){
    details.style.display = "block";
    details.lastChild.childNodes[24].style.display = "block"
  }
  function all26Click(){
    details.style.display = "block";
    details.lastChild.childNodes[25].style.display = "block"
  }
  function all27Click(){
    details.style.display = "block";
    details.lastChild.childNodes[26].style.display = "block"
  }
  function all28Click(){
    details.style.display = "block";
    details.lastChild.childNodes[27].style.display = "block"
  }
  function web1Click(){
    details.style.display = "block";
    details.lastChild.childNodes[4].style.display = "block"
  }
  function web2Click(){
    details.style.display = "block";
    details.lastChild.childNodes[5].style.display = "block"
  }
  function web3Click(){
    details.style.display = "block";
    details.lastChild.childNodes[6].style.display = "block"
  }
  function web4Click(){
    details.style.display = "block";
    details.lastChild.childNodes[7].style.display = "block"
  }
  function mobile1Click(){
    details.style.display = "block";
    details.lastChild.childNodes[8].style.display = "block"
  }
  function mobile2Click(){
    details.style.display = "block";
    details.lastChild.childNodes[9].style.display = "block"
  }
  function mobile3Click(){
    details.style.display = "block";
    details.lastChild.childNodes[10].style.display = "block"
  }
  function mobile4Click(){
    details.style.display = "block";
    details.lastChild.childNodes[11].style.display = "block"
  }

  elAll1.addEventListener('click', all1Click, false);
  elAll2.addEventListener('click', all2Click, false);
  elAll3.addEventListener('click', all3Click, false);
  elAll4.addEventListener('click', all4Click, false);
  elWeb1.addEventListener('click', web1Click, false);
  elWeb2.addEventListener('click', web2Click, false);
  elWeb3.addEventListener('click', web3Click, false);
  elWeb4.addEventListener('click', web4Click, false);
  elMobile1.addEventListener('click', mobile1Click, false);
  elMobile2.addEventListener('click', mobile2Click, false);
  elMobile3.addEventListener('click', mobile3Click, false);
  elMobile4.addEventListener('click', mobile4Click, false);
  elAll13.addEventListener('click', all13Click, false);
  elAll14.addEventListener('click', all14Click, false);
  elAll15.addEventListener('click', all15Click, false);
  elAll16.addEventListener('click', all16Click, false);
  elAll17.addEventListener('click', all17Click, false);
  elAll18.addEventListener('click', all18Click, false);
  elAll19.addEventListener('click', all19Click, false);
  elAll20.addEventListener('click', all20Click, false);
  elAll21.addEventListener('click', all21Click, false);
  elAll22.addEventListener('click', all22Click, false);
  elAll23.addEventListener('click', all23Click, false);
  elAll24.addEventListener('click', all24Click, false);
  elAll25.addEventListener('click', all25Click, false);
  elAll26.addEventListener('click', all26Click, false);
  elAll27.addEventListener('click', all27Click, false);
  elAll28.addEventListener('click', all28Click, false);

  //return page
  var bg = document.getElementById('bg-project');
  function returnClick (){
    details.style.display = "none";
    for (var i =0; i<details.lastChild.childNodes.length;i++)
    {
      details.lastChild.childNodes[i].style.display = "none";
    }
  }
  bg.addEventListener('click', returnClick, false);
