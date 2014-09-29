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


/* ABRE LINKS EXTERNOS EM OUTRA JANELA */

$("a[href^='http://']").attr("target","_blank");


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

/* SLIDESHOW */

$(function() {
  var Page = (function() {
     var $nav = $( '#nav-dots > span' ),
        slitslider = $( '#slider' ).slitslider( {
           onBeforeChange : function( slide, pos ) {
              $nav.removeClass( 'nav-dot-current' );
              $nav.eq( pos ).addClass( 'nav-dot-current' );
           }
        } ),
        init = function() {
           initEvents();
        },
        initEvents = function() {
           $nav.each( function( i ) {
              $( this ).on( 'click', function( event ) {
                 var $dot = $( this );
                 if( !slitslider.isActive() ) {
                    $nav.removeClass( 'nav-dot-current' );
                    $dot.addClass( 'nav-dot-current' );
                 }
                 slitslider.jump( i + 1 );
                 return false;
              } );
           } );
        };
        return { init : init };
  })();
  Page.init();
});

});
		
