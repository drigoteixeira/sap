jQuery(document).ready(function($) {


// MENU MOBILE

$('header').addClass('js');

var $menu = $('#menu'),$menulink = $('.menu-link');

$menulink.click(function() {
	$menulink.toggleClass('active');
	$menu.toggleClass('active');
	return false;
});

$("nav[role=navigation] li a").click(function() {
    $menu.toggleClass('active');
    return false;
});

// FADE IN TAGLINE

$(".tagline h2").delay(1000).animate({opacity: 1}, 300);
$(".tagline p").delay(1000).animate({opacity: 1}, 700);
$(".tagline a").delay(1000).animate({opacity: 1}, 1200);


// EFEITO MENU ATIVO

$(document).on("scroll", onScroll);

//smoothscroll
$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
        $(this).removeClass('active');
    });
    $(this).addClass('active');

    var target = this.hash, menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });

});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


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
