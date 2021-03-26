$(document).ready(function() {
    $('.production-slider_top').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.production-slider_bottom'
    });
    $('.production-slider_bottom').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_left"><div>',
        nextArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_right"><div>',
        asNavFor: '.production-slider_top'
    });
});