var $root = $('html, body');
var $wHeight = $(window).height();
var $wWidth = $(window).width();
var $navBar = $('.nav > a');
var $menuBtn = $('.menu-icon');

$(window).scroll(function(){
    var $wScroll = $(this).scrollTop();
    console.log($wScroll);


    $('.logo').css({
        'transform':'translate(0px, -'+ $wScroll /3 +'%)'
    });
});
$menuBtn.click(function() {
    $navBar.each(function(){
        $(this).slideToggle(500);
    });
});


$navBar.click(function () {
    var href = $.attr(this, 'href');
    $('body').animate({
        opacity: '0'

    }, 200, function(){
        $('body').animate({
            opacity: '1'
        });
    });

    $root.animate({
        scrollTop: $(href).offset().top
    },200, function () {
        window.location.hash = href;
    });
    return false;
});
$(window).resize(function(){
    var $wWidth = $(window).width();

    if ($wWidth < 650) {
       $navBar.addClass('mobile-nav');
       $('.logo').hide(500);

        console.log('hello');
       $menuBtn.slideDown(100);
       $navBar.click(function () {
            var href = $.attr(this, 'href');
        });
    }
    else {
        $('.logo').show(200);
        $navBar.removeClass('mobile-nav');
        $menuBtn.slideUp(0);


    }
});
$(window).scroll(function () { /*pushes logo to background; makes logo BIGGER when
 screen scrolls halfway down*/

    var $wScroll = $(window).scrollTop();


    if ($wScroll < ($wHeight/10)) {

        $('.logo').stop(true, false).animate({
            'opacity': '.7'
        },300);
        $navBar.css({
            'color': 'rgb(255, 255, 255, 1)',
        });
        $('.nav').animate({
            'top': '45%'
        });

        console.log('logo appear');
    }

    else {if ($wScroll > ($wHeight/10) ) {
        $('.logo').stop(true, false).animate({
            'opacity':'0'
        },300);
        $navBar.css({
            'color': 'white'
        });
        $('.nav').animate({
            'top': '0'
        });
        console.log('logo disappear');
    }}


    // Do something
});


