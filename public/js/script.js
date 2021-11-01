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



let activeContentIndex = 0
let elementContentCount = 4

$('#indexCatalogNext').on('click', function() {
    changeSlide('next')
})

$('#indexCatalogPrev').on('click', function() {
    changeSlide('prev')
})

$('#indexCatalogButton-1').on('click', function() {
    changeSlide(0)
})
$('#indexCatalogButton-2').on('click', function() {
    changeSlide(1)
})
$('#indexCatalogButton-3').on('click', function() {
    changeSlide(2)
})
$('#indexCatalogButton-4').on('click', function() {
    changeSlide(3)
})

function changeSlide(id) { 
    if(id === 'next') {
        activeContentIndex++
        if (activeContentIndex === elementContentCount) {
            activeContentIndex = 0
        } 
    } else if (id === 'prev') {
        activeContentIndex--
        if (activeContentIndex < 0) {
            activeContentIndex = elementContentCount - 1
        }
    }
    if(activeContentIndex == 0) {
        $('#indexCatalogButton-1').addClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-2').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-3').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-4').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogBlock-1').removeClass('display-n')
        $('#indexCatalogBlock-2').addClass('display-n')
        $('#indexCatalogBlock-3').addClass('display-n')
        $('#indexCatalogBlock-4').addClass('display-n')
    }
    if(activeContentIndex == 1) {
        $('#indexCatalogButton-2').addClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-1').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-3').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-4').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogBlock-2').removeClass('display-n')
        $('#indexCatalogBlock-1').addClass('display-n')
        $('#indexCatalogBlock-3').addClass('display-n')
        $('#indexCatalogBlock-4').addClass('display-n')
    }
    if(activeContentIndex == 2) {
        $('#indexCatalogButton-3').addClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-2').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-1').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-4').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogBlock-3').removeClass('display-n')
        $('#indexCatalogBlock-2').addClass('display-n')
        $('#indexCatalogBlock-1').addClass('display-n')
        $('#indexCatalogBlock-4').addClass('display-n')
    }
    if(activeContentIndex == 3) {
        $('#indexCatalogButton-4').addClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-3').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-2').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-1').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogBlock-4').removeClass('display-n')
        $('#indexCatalogBlock-3').addClass('display-n')
        $('#indexCatalogBlock-2').addClass('display-n')
        $('#indexCatalogBlock-1').addClass('display-n')
    }
    if(id == 0) {
        activeContentIndex = 0
        $('#indexCatalogButton-1').addClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-2').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-3').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-4').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogBlock-1').removeClass('display-n')
        $('#indexCatalogBlock-2').addClass('display-n')
        $('#indexCatalogBlock-3').addClass('display-n')
        $('#indexCatalogBlock-4').addClass('display-n')
    }
    if(id == 1) {
        activeContentIndex = 1
        $('#indexCatalogButton-2').addClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-1').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-3').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-4').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogBlock-2').removeClass('display-n')
        $('#indexCatalogBlock-1').addClass('display-n')
        $('#indexCatalogBlock-3').addClass('display-n')
        $('#indexCatalogBlock-4').addClass('display-n')
    }
    if(id == 2) {
        activeContentIndex = 2
        $('#indexCatalogButton-3').addClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-2').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-1').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-4').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogBlock-3').removeClass('display-n')
        $('#indexCatalogBlock-2').addClass('display-n')
        $('#indexCatalogBlock-1').addClass('display-n')
        $('#indexCatalogBlock-4').addClass('display-n')
    }
    if(id == 3) {
        activeContentIndex = 3
        $('#indexCatalogButton-4').addClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-3').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-2').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogButton-1').removeClass('ind-catalog__content-count-item-active')
        $('#indexCatalogBlock-4').removeClass('display-n')
        $('#indexCatalogBlock-3').addClass('display-n')
        $('#indexCatalogBlock-2').addClass('display-n')
        $('#indexCatalogBlock-1').addClass('display-n')
    }
}
