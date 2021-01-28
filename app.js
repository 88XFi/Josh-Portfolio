$('.name h2').css({opacity: '0'});
$('.name p').css({opacity: '0'});
$('.name h5').css({opacity: '0'});

$(window).on('load', function () {
    setTimeout(() => {
        $('.name h2').animate({
            opacity: 1
        }, 1000);
        setTimeout(() => {
            $('.name p').animate({
                opacity: 1
            }, 1000);
            setTimeout(() => {
                $('.name h5').animate({
                    opacity: 1
                }, 1000);
            }, 1000);
        }, 1000);
    }, 500)
});

$('.content').hide();

$(window).on("load",function(){
   $(".center").fadeOut("slow");
   $('.content').show();
    });

var tab = $('.tab').hide();
var menu = $('.menu');

menu.click(() => {
    menu.fadeOut(500);
    setTimeout(() => {
        tab.slideDown(1000);
    }, 500);
});

var close = $('.close');

close.click(() => {
    tab.slideUp(1000);
    setTimeout(() => {
        menu.fadeIn(500);
    }, 1500);
});

$('.active').click(() => {
    $('.active').addClass('animate__animated animate__headShake');
    setTimeout(() => {
        $('.active').removeClass('animate__animated animate__headShake');
    }, 500);
});

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800
});

$('.home').click(function() {
    $('.home a').addClass('active');
    $('.about a, .project a, .contact a').removeClass('active');
});

$('.about').click(function() {
    $('.about a').addClass('active');
    $('.home a, .project a, .contact a').removeClass('active');
});

$('.project').click(function() {
    $('.project a').addClass('active');
    $('.about a, .home a, .contact a').removeClass('active');
});

$('.contact').click(function() {
    $('.contact a').addClass('active');
    $('.home a, .project a, .home a').removeClass('active');
});