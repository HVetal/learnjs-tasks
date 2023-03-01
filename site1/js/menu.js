$(document).ready(function () {
    $('.menu_burger__header').click(function () {
        $('.menu_burger__header').toggleClass('open_menu');
        $('.menu').toggleClass('open-menu');
    });
});