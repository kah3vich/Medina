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