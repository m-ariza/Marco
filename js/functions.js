var $root = $('html, body');
var $wHeight = $(window).height();
var $wWidth = $(window).width();
var $links = $('.link');
var $menuBtn = $('.menu-icon');

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
});

$links.click(function () {

    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    },500, function () {
        window.location.hash = href;
    });
});

/*
$(window).resize(function(){
    var $wWidth = $(window).width();

    if ($wWidth < 650) {
       $navBar.addClass('mobile-nav');
       $('.logo').hide(500);
       console.log('hello');
       $menuBtn.slideDown(100);
    }
    else {
        $('.logo').show(200);
        $menuBtn.slideUp(0);
    }
});
*/