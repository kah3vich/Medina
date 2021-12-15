var recSlider = new Swiper(".recSlider", {
    navigation: {
        nextEl: ".rec__slider .swiper-controls .swiper-button-next",
        prevEl: ".rec__slider .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".rec__slider .swiper-controls .swiper-pagination",
    },
    // mousewheel: true,
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
});
var videoSlider = new Swiper(".videoSlider", {
    navigation: {
        nextEl: ".video__slider .swiper-controls .swiper-button-next",
        prevEl: ".video__slider .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".video__slider .swiper-controls .swiper-pagination",
    },
    // mousewheel: true,
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
});
var authorsSlider = new Swiper(".authorsSlider", {
    navigation: {
        nextEl: ".authors__slider .swiper-controls .swiper-button-next",
        prevEl: ".authors__slider .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".authors__slider .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    slidesPerView: 5,
    spaceBetween: 0,
});
var partSlider = new Swiper(".partSlider", {
    navigation: {
        nextEl: ".part__slider .swiper-controls .swiper-button-next",
        prevEl: ".part__slider .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".part__slider .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    slidesPerView: 5,
    spaceBetween: 0,
});
var indexShopSlider = new Swiper(".indexShopSlider", {
    navigation: {
        nextEl: ".shop__block-slider .swiper-controls .swiper-button-next",
        prevEl: ".shop__block-slider .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".shop__block-slider .swiper-controls .swiper-pagination",
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
    effect: "fade",
    fadeEffect: { 
        crossFade: true 
    },
});


$('#indexShopButton-1').on('click', function() {
    $(this).addClass('shop__block-list-item-active')
    $('#indexShopButton-2').removeClass('shop__block-list-item-active')
    $('#indexShopButton-3').removeClass('shop__block-list-item-active')
    $('#indexShopButton-4').removeClass('shop__block-list-item-active')
    $('#indexShopButton-5').removeClass('shop__block-list-item-active')
    $('#indexShopElement-1').removeClass('display-n')
    $('#indexShopElement-2').addClass('display-n')
    $('#indexShopElement-3').addClass('display-n')
    $('#indexShopElement-4').addClass('display-n')
    $('#indexShopElement-5').addClass('display-n')
});
$('#indexShopButton-2').on('click', function() {
    $(this).addClass('shop__block-list-item-active')
    $('#indexShopButton-1').removeClass('shop__block-list-item-active')
    $('#indexShopButton-3').removeClass('shop__block-list-item-active')
    $('#indexShopButton-4').removeClass('shop__block-list-item-active')
    $('#indexShopButton-5').removeClass('shop__block-list-item-active')
    $('#indexShopElement-2').removeClass('display-n')
    $('#indexShopElement-1').addClass('display-n')
    $('#indexShopElement-3').addClass('display-n')
    $('#indexShopElement-4').addClass('display-n')
    $('#indexShopElement-5').addClass('display-n')
});
$('#indexShopButton-3').on('click', function() {
    $(this).addClass('shop__block-list-item-active')
    $('#indexShopButton-2').removeClass('shop__block-list-item-active')
    $('#indexShopButton-1').removeClass('shop__block-list-item-active')
    $('#indexShopButton-4').removeClass('shop__block-list-item-active')
    $('#indexShopButton-5').removeClass('shop__block-list-item-active')
    $('#indexShopElement-3').removeClass('display-n')
    $('#indexShopElement-2').addClass('display-n')
    $('#indexShopElement-1').addClass('display-n')
    $('#indexShopElement-4').addClass('display-n')
    $('#indexShopElement-5').addClass('display-n')
});
$('#indexShopButton-4').on('click', function() {
    $(this).addClass('shop__block-list-item-active')
    $('#indexShopButton-2').removeClass('shop__block-list-item-active')
    $('#indexShopButton-3').removeClass('shop__block-list-item-active')
    $('#indexShopButton-1').removeClass('shop__block-list-item-active')
    $('#indexShopButton-5').removeClass('shop__block-list-item-active')
    $('#indexShopElement-4').removeClass('display-n')
    $('#indexShopElement-2').addClass('display-n')
    $('#indexShopElement-3').addClass('display-n')
    $('#indexShopElement-1').addClass('display-n')
    $('#indexShopElement-5').addClass('display-n')
});
$('#indexShopButton-5').on('click', function() {
    $(this).addClass('shop__block-list-item-active')
    $('#indexShopButton-2').removeClass('shop__block-list-item-active')
    $('#indexShopButton-3').removeClass('shop__block-list-item-active')
    $('#indexShopButton-4').removeClass('shop__block-list-item-active')
    $('#indexShopButton-1').removeClass('shop__block-list-item-active')
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



$(function() {
    $('#city').css('display', 'none')
    $('#city').after('<div class="header-select-item"><div class="header-select-placeholder"><svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect y="-1" width="28" height="17" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_264_578" transform="translate(0 -0.0501176) scale(0.004 0.00658824)"/></pattern><image id="image0_264_578" width="250" height="167" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACnBAMAAADK0lwnAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAD1BMVEX///+qveEAOaaOMEvVKx7/j+iDAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UCBQU6IahIjw8AAABeSURBVHja7c0BCQAgEASwq2AFK1jB/plM8RzIVmAJAAAAAAAAfG01ZTfZ7Xa73W632+12u91ut9vtdrvdbrfb7eP7acptstvtdrvdbrfb7Xa73W632+12u91ut9unPdMX1Q14hi66AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAyLTA1VDA1OjU4OjMzKzAwOjAw1ZGbDgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMi0wNVQwNTo1ODozMyswMDowMKTMI7IAAAAASUVORK5CYII="/></defs></svg></div><div id="listConstructorElementHeader" class="header-select-wrapper display-n"></div></div>')
    let count = $('#city').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#city').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("header-select-element")
        newElementBlock.id = `header-select-element-${i}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("listConstructorElementHeader").appendChild(newElementBlock);
        $(`#header-select-element-${i}`).attr('value', `${arrows}`)
        $(`#header-select-element-${i}`).attr('type', `button`)
    }
    $('#header-select-element-0').css('display', 'none')
    $('.header-select-item').on('click', function() {
        $('.header-select-wrapper').toggleClass('display-n')
        $('.header-select-item').toggleClass('header-select-item-active')
    })
    $(".header-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.header-select-placeholder').html(valueElement)
        $('#city option:nth-child(1)').val(valueElement)
        $('#city option:nth-child(1)').html(valueElement)
    })
})
