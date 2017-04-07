var $root = $('html, body');
var $wHeight = $(window).height();
var $wWidth = $(window).width();
var $links = $('.link');
var $menuBtn = $('.menu-icon');

$(window).scroll(function(){
    var $wScroll=$(this).scrollTop();
    var $leftPageTop = $('.left-title-page').offset().top;
    var $rightPageTop =  $('.right-content').offset().top;
    console.log('window scroll____________________________ ' + $wScroll);
    console.log('right page offset.top ' + $rightPageTop);
    console.log('left page offset.top ' + $leftPageTop) ;


    if($wScroll > $leftPageTop *.3){
        $('.page-name').addClass('is-showing');
        console.log(' left is showing');

    }else{
        $('.page-name').removeClass('is-showing');
        console.log('left not showing');

    }


    if($wScroll > $rightPageTop*.7){
        $('.about-me').fadeIn(900);
        console.log('right fadeIn');
    }else{
        $('.about-me').fadeOut(500);
        console.log('right fadeOut');
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
