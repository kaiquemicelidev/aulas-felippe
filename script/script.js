
//AQUI ESTA SENDO CONFIGURADO AO INICIALIZAR A PAGINA
$(document).ready(function(){
    $(".section_home").load('home.html'); //CARREGA A PAGINA HOME NO MAIN
    $(".section_about").load('about.html'); //CARREGA A PAGINA ABOUT 
    $(".section_projects").load('projects.html'); // CARREGA A PAGINA PROJECTS
    $("#section_contact").load('contact.html'); // CARREGA A PAGINA CONTACT
});

//AO CLICAR NO BOTAO MENU, ELE VAI ABRIR O MENU QUE ESTAVA DISPLAY NONE E TBM A INIVISIBLE BOX
$(".menuButton").on('click', function(){
    $('.invisibleBox').css('display','block');
    $('.menuRight').css('display','block');
});

//AO CLICAR NO INVISIBLE BOX ELE VAI FECHAR O MENU E TBM O BOX e mPOPDRAW (AMBOS SE TIVEREM ABERTOS)
$('.invisibleBox').on('click', function(){
    if($('.menuRight').css('display') == 'block'){
        $('.menuRight').css('display','none');
    }else if($('.caixaVerde').css('display') == 'block'){
        $('.caixaVerde').css('display','none');
    }else{
        $('.invisibleBox').css('display','none');
    }

    $('.invisibleBox').css('display','none');
});


//AO CLICAR NO MENU ITEM HOME, ABRE MENU POPDRAW
$('#menuItem_home').on('click', function(){
    $('.invisibleBox').css('display','block');
    $('.caixaVerde').css('display','block');
});