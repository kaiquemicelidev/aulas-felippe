$(document).ready(function(){
    $(".section_home").load('home.html');
    $(".section_about").load('about.html');
    $(".section_projects").load('projects.html');
    $("#section_contact").load('contact.html');
});

$("#menuItem_home").on('click', function(){
    
});

$(".menuButton").on('click', function(){
    $('.invisibleBox').css('display','block');
    $('.menuRight').css('display','block');
});

$('.invisibleBox').on('click', function(){
    $('.menuRight').css('display','none');
    $('.invisibleBox').css('display','none');
});