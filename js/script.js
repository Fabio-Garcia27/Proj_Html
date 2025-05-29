// Ativando o menu mobile
function mostraMenu(){
  $('nav#nav-esquerda ul.menu-principal').css('display', 'flex');
  $('nav#nav-esquerda ul.menu-principal').addClass('animate_animated animate_fadeInRight animate_slow');

  $('nav#nav-esquerda ul#icone-menu li#menu').css('display', 'nome');
  $('nav#nav-esquerda ul#icone-menu li#menuX').css('display', 'flex');
}  

function esconderMenu(){
  $('nav#nav-esquerda ul.menu-principal').css('display', 'nome');

  $('nav#nav-esquerda ul#icone-menu li#menu').css('display', 'flex');
  $('nav#nav-esquerda ul#icone-menu li#menuX').css('display', 'nome');
}  

let controle = true;

$('nav#nav-esquerda ul#icone-menu').click(function(){
  if (controle ==  true){
      mostraMenu();
      controle = false;
  }else{
      esconderMenu();
      controle = true;
  }
})