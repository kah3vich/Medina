var indexAddSlider = new Swiper(".indexAddSlider", {
    navigation: {
        nextEl: ".ind-add__slider .swiper-controls .swiper-button-next",
        prevEl: ".ind-add__slider .swiper-controls .swiper-button-prev",
    },
    mousewheel: true,
    slidesPerView: 5,
    spaceBetween: 40,
});
var indexShopSlider = new Swiper(".indexShopSlider", {
    navigation: {
        nextEl: ".ind-shop__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".ind-shop__block-slider .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".ind-shop__block-slider .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    slidesPerView: 5,
    spaceBetween: 40,
});
var indexHeaderSlider = new Swiper(".indexHeaderSlider", {
    navigation: {
        nextEl: ".ind-header__content  .swiper-controls .swiper-button-next",
        prevEl: ".ind-header__content  .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".ind-header__content .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    effect: "fade",
    fadeEffect: { 
        crossFade: true 
    },
});


$('#indexShopButton-1').on('click', function() {
    $(this).addClass('ind-shop__block-list-item-active')
    $('#indexShopButton-2').removeClass('ind-shop__block-list-item-active')
    $('#indexShopButton-3').removeClass('ind-shop__block-list-item-active')
    $('#indexShopButton-4').removeClass('ind-shop__block-list-item-active')
    $('#indexShopButton-5').removeClass('ind-shop__block-list-item-active')
    $('#indexShopElement-1').removeClass('display-n')
    $('#indexShopElement-2').addClass('display-n')
    $('#indexShopElement-3').addClass('display-n')
    $('#indexShopElement-4').addClass('display-n')
    $('#indexShopElement-5').addClass('display-n')
});
$('#indexShopButton-2').on('click', function() {
    $(this).addClass('ind-shop__block-list-item-active')
    $('#indexShopButton-1').removeClass('ind-shop__block-list-item-active')
    $('#indexShopButton-3').removeClass('ind-shop__block-list-item-active')
    $('#indexShopButton-4').removeClass('ind-shop__block-list-item-active')
    $('#indexShopButton-5').removeClass('ind-shop__block-list-item-active')
    $('#indexShopElement-2').removeClass('display-n')
    $('#indexShopElement-1').addClass('display-n')
    $('#indexShopElement-3').addClass('display-n')
    $('#indexShopElement-4').addClass('display-n')
    $('#indexShopElement-5').addClass('display-n')
});
$('#indexShopButton-3').on('click', function() {
    $(this).addClass('ind-shop__block-list-item-active')
    $('#indexShopButton-2').removeClass('ind-shop__block-list-item-active')
    $('#indexShopButton-1').removeClass('ind-shop__block-list-item-active')
    $('#indexShopButton-4').removeClass('ind-shop__block-list-item-active')
    $('#indexShopButton-5').removeClass('ind-shop__block-list-item-active')
    $('#indexShopElement-3').removeClass('display-n')
    $('#indexShopElement-2').addClass('display-n')
    $('#indexShopElement-1').addClass('display-n')
    $('#indexShopElement-4').addClass('display-n')
    $('#indexShopElement-5').addClass('display-n')
});
$('#indexShopButton-4').on('click', function() {
    $(this).addClass('ind-shop__block-list-item-active')
    $('#indexShopButton-2').removeClass('ind-shop__block-list-item-active')
    $('#indexShopButton-3').removeClass('ind-shop__block-list-item-active')
    $('#indexShopButton-1').removeClass('ind-shop__block-list-item-active')
    $('#indexShopButton-5').removeClass('ind-shop__block-list-item-active')
    $('#indexShopElement-4').removeClass('display-n')
    $('#indexShopElement-2').addClass('display-n')
    $('#indexShopElement-3').addClass('display-n')
    $('#indexShopElement-1').addClass('display-n')
    $('#indexShopElement-5').addClass('display-n')
});
$('#indexShopButton-5').on('click', function() {
    $(this).addClass('ind-shop__block-list-item-active')
    $('#indexShopButton-2').removeClass('ind-shop__block-list-item-active')
    $('#indexShopButton-3').removeClass('ind-shop__block-list-item-active')
    $('#indexShopButton-4').removeClass('ind-shop__block-list-item-active')
    $('#indexShopButton-1').removeClass('ind-shop__block-list-item-active')
    $('#indexShopElement-5').removeClass('display-n')
    $('#indexShopElement-2').addClass('display-n')
    $('#indexShopElement-3').addClass('display-n')
    $('#indexShopElement-4').addClass('display-n')
    $('#indexShopElement-1').addClass('display-n')
});
