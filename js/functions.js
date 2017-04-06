var $root = $('html, body');
var $wHeight = $(window).height();
var $wWidth = $(window).width();
var $links = $('.link');
var $menuBtn = $('.menu-icon');

$(window).scroll(function(){
    var $wScroll=$(this).scrollTop();
    
    if($wScroll > $('.left-title-page').offset().top*.7){
        $('.page-name').addClass('is-showing');
        }else{
        $('.page-name').removeClass('is-showing');
        }
    if($wScroll > $('right-content').offset().top*.7){
        $('.right-content > p').fadeIn(500);
    }else{
        $('.right-content > p').fadeOut(500);
    }
});

$menuBtn.click(function(){
    var $wWidth = $(window).width();
    if($wWidth >500 && $wWidth <820){
        $('.links-container').animate({
            'width': 'toggle'
        });
    }else {
        $('.links-container').slideToggle(300);
    }

});
$links.click(function() {
    var $wWidth = $(window).width();

    if($wWidth >500 && $wWidth <820){
        $('.links-container').animate({
            'width': 'toggle'
        });
    }else {
        $('.links-container').slideToggle(300);
    }

    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    },500, function () {
        window.location.hash = href;
    });
});
