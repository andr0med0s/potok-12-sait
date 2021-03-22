$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        infinite: true,
        // initialSlide: 0,
        // autoplay: false,
        // autoplaySpeed: 1500,
        // pausedOnFocus: false,
        // pausedOnHover: false,
        // pausedOnDotHover: false,
        draggable: true,
        swipe: true,
        touchThreshold: 10,
        touchMove: true,
        waitForAnimate: false,
        centerMode: true,
        rows: 1,
        slidesPerRow: 1,
        focusOnSelect: true,
        asNavFor: '.sliderbig',
    });
    $('.sliderbig').slick({
        arrows: false,
        fade: true,
        asNavFor: '.slider',
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});


// $('.sliderbig').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider'
// });
// $('.slider').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.sliderbig',
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true
// });