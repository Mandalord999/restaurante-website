$(document).ready(function(){

    // efecto MENU

    $('.menu a').each(function(index,elemento){
        $(this).css ({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

    // Efecto Header

    if( $(window).width() > 800  ){
        $('header .textos').css ({
            opacity: 0,
            margingTop:0 
        });

        $('header .textos').animate ({
            opacity: 1,
            margingTop: '-52px' 
        }, 1500);
    } 

    // Scroll Menu
    
    var acercaDe = $ ('#acerca').offset().top,
        menu = $ ('#menu').offset().top,
        galeria = $ ('#galeria').offset().top,
        ubica = $ ('#ubicacion').offset().top;
    
    $('#btn-acerca').on('click', function(e){
        e.preventDefault();
        $('html , body').animate({
            scrollTop: 620
        },500);
    });

    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html , body').animate({
            scrollTop: 1200
        },500);
    });

    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html , body').animate({
            scrollTop: 2063
        },500);
    });

    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html , body').animate({
            scrollTop: 2750
        },500);
    });

});
