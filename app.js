$('.content').hide();

$(window).on("load",function(){
   $(".loader-wrapper").fadeOut("slow");
   $('.content').show();
    });

var home = $('.name');

home.click(() => {
    home.animate(() => {
        bottom: '500px'
    });
});

var tab = $('.tab').hide();
var menu = $('.menu');

menu.click(() => {
    menu.fadeOut(500);
    setTimeout(() => {
        tab.slideDown(1500);
    }, 500);
});

var close = $('.close');

close.click(() => {
    tab.slideUp(1500);
    setTimeout(() => {
        menu.fadeIn(500);
    }, 1500);
});


$('.home').click(() => {
    $('.home').addClass('animate__animated animate__headShake');

    setTimeout(() => {
        $('.home').removeClass('animate__animated animate__headShake');
    }, 500);
});