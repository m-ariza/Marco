var $root = $('html, body');
var $wHeight = $(window).height();
var $wWidth = $(window).width();
var $links = $('.link');
var $menuBtn = $('.menu-icon');

$(window).scroll(function(){
    var $wScroll=$(this).scrollTop();
    
    if($wScroll > $('.left-title-page').offset().top*.7){
console.log($('.left-title-page').offset().top);
        $('.page-name').addClass('is-showing');
        $('.right-content').fadeIn(500);
        console.log('hello there!')
    }else{
        $('.page-name').removeClass('is-showing');
        $('.right-content').fadeOut(500);
        console.log('ho there')
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
