$(function(){

    $(".header__nav-gamburger").click(function() {
        $(".header__nav-items").toggleClass("active__menu"),
        $("body").toggleClass("active__body");         
        $(this).toggleClass("active");
    });

    $(".form__button").click(function() {
        $(".form__thank").toggleClass("active__text"),        
        $(this).toggleClass("active");
    });
});
