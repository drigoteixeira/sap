jQuery(document).ready(function($) {


// MENU MOBILE

$('header').addClass('js');

var $menu = $('#menu'),$menulink = $('.menu-link');

$menulink.click(function() {
	$menulink.toggleClass('active');
	$menu.toggleClass('active');
	return false;
});


// FADE IN TAGLINE

$(".tagline h2").delay(1000).animate({opacity: 1}, 300);
$(".tagline p").delay(1000).animate({opacity: 1}, 700);
$(".tagline a").delay(1000).animate({opacity: 1}, 1200);





/* FADE IN NOS ELEMENTOS NO SCROLL DA PÁGINA */
$(window).scroll( function(){
    $('.hideme').each( function(i){
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},500);
        }
    });
});

/* ABRE LINKS EXTERNOS EM OUTRA JANELA */

$("a[href^='http://']").attr("target","_blank");




});
