$('.content').hide();

$(window).on("load",function(){
   $(".loader-wrapper").fadeOut("slow");
   $('.content').show();
    });

var title = $('.name');
var btn = $('.about');
var line = $('.line').hide();

var close1 = $('.close1').hide();
var about = $('.about-me').hide();

btn.click(() => {
    title.animate({
        top: 50
    }, 1200);

    btn.animate({opacity: 0}, 1000);

    setTimeout(() => {
        line.fadeIn(1000);
    }, 1200);

    setTimeout(() => {
        about.fadeIn(1000);
        close1.fadeIn(1000);
    }, 2200);
});

close1.click(() => {
    about.fadeOut(1000);
    setTimeout(() => {
        line.fadeOut(1000);
    }, 1000);

    setTimeout(() => {
        btn.animate({opacity: 1}, 1000);
    }, 2000);

    setTimeout(() => {
        title.animate({
            top: 467
        }, 1200);
    }, 3000);
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
