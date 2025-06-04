/*Animação jQuery*/
$('header nav#nav-esquerda ul.menu-principal li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 1000)
})
$('header nav#nav-esquerda ul.menu-principal li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section.sobre').offset().top}, 1000)
})
$('header nav#nav-esquerda ul.menu-principal li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section.solucao').offset().top}, 1000)
})
$('header nav#nav-esquerda ul.menu-principal li:eq(3)').click(function(){
    $('html, body').animate({scrollTop:$('section.makes').offset().top}, 1000)
})
//Footer
$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 1000)
})
$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section.sobre').offset().top}, 1000)
})
$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section.solucao').offset().top}, 1000)
})
$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(3)').click(function(){
    $('html, body').animate({scrollTop:$('section.makes').offset().top}, 1000)
})

//Chama as Div e carregta devagar 
// elementos com capacidade 0
$('div.sobre-mestre').css('opacity', 0);
$('div.sobre-mestre').waypoint(function(direcao) {
  //console.log('Waypoint acionado!');
  //console.log('Direção:', direcao);
  if (direcao === 'down') {         
    $('div.sobre-mestre').addClass('animate__animated animate__fadeInUp animate__slow');
  } else {
    $('div.sobre-mestre').removeClass('animate__animated animate__fadeInUp animate__slow');
  }
}, {
  offset: '550px'
})

$('div.solucao-mestre').css('opacity', 0);
$('div.solucao-mestre').waypoint(function(direcao) {
  //console.log('Waypoint acionado!');
  //console.log('Direção:', direcao);
  if (direcao === 'down') {         
    $('div.solucao-mestre').addClass('animate__animated animate__fadeInUp animate__slow');
  } else {
    $('div.solucao-mestre').removeClass('animate__animated animate__fadeInUp animate__slow');
  }
}, {
  offset: '550px'
})

$('div.makes-container').css('opacity', 0);
$('div.makes-container').waypoint(function(direcao) {
  //console.log('Waypoint acionado!');
  //console.log('Direção:', direcao);
  if (direcao === 'down') {         
    $('div.makes-container').addClass('animate__animated animate__fadeInUp animate__slow');
  } else {
    $('div.makes-container').removeClass('animate__animated animate__fadeInUp animate__slow');
  }
}, {
  offset: '550px'
})

$('div.footer-container').css('opacity', 0);
$('div.footer-container').waypoint(function(direcao) {
  //console.log('Waypoint acionado!');
  //console.log('Direção:', direcao);
  if (direcao === 'down') {         
    $('div.footer-container').addClass('animate__animated animate__fadeInUp animate__slow');
  } else {
    $('div.footer-container').removeClass('animate__animated animate__fadeInUp animate__slow');
  }
}, {
  offset: '550px'
})