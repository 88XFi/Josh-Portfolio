$('.content').hide();

$(window).on("load",function(){
   $(".loader-wrapper").fadeOut("slow");
   $('.content').show();
    });

var home = $('.name');

home.click(() => {
    home.addClass('animate__animated animate__headShake');

    setTimeout(() => {
        home.removeClass('animate__animated animate__headShake');
    }, 500);
});

var tab = $('.tab').hide();
var menu = $('.menu');

menu.click(() => {
    tab.slideToggle(1500);
});