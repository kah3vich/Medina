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
    $('#city').after('<div class="header-select-item"><div class="header-select-placeholder">RU</div><div id="listConstructorElementHeader" class="header-select-wrapper display-n"></div></div>')
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

$('.catalog-content__block-filter-titles').on('click', () => {
    $('.catalog-content__block-filter-titles svg').toggleClass('rotate-180');
});



let activeContentCatalog = 0
let elementContentCountCatalog = 4

$('#catalogCatalogNext').on('click', function() {
    changeSlideCatalog('next')
})

$('#catalogCatalogPrev').on('click', function() {
    changeSlideCatalog('prev')
})

$('#catalogCatalogButton-1').on('click', function() {
    changeSlideCatalog(0)
})
$('#catalogCatalogButton-2').on('click', function() {
    changeSlideCatalog(1)
})
$('#catalogCatalogButton-3').on('click', function() {
    changeSlideCatalog(2)
})
$('#catalogCatalogButton-4').on('click', function() {
    changeSlideCatalog(3)
})

function changeSlideCatalog(id) { 
    if(id === 'next') {
        activeContentCatalog++
        if (activeContentCatalog === elementContentCountCatalog) {
            activeContentCatalog = 0
        } 
    } else if (id === 'prev') {
        activeContentCatalog--
        if (activeContentCatalog < 0) {
            activeContentCatalog = elementContentCountCatalog - 1
        }
    }
    if(activeContentCatalog == 0) {
        $('#catalogCatalogButton-1').addClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-2').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-3').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-4').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogBlock-1').removeClass('display-n')
        $('#catalogCatalogBlock-2').addClass('display-n')
        $('#catalogCatalogBlock-3').addClass('display-n')
        $('#catalogCatalogBlock-4').addClass('display-n')
    }
    if(activeContentCatalog == 1) {
        $('#catalogCatalogButton-2').addClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-1').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-3').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-4').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogBlock-2').removeClass('display-n')
        $('#catalogCatalogBlock-1').addClass('display-n')
        $('#catalogCatalogBlock-3').addClass('display-n')
        $('#catalogCatalogBlock-4').addClass('display-n')
    }
    if(activeContentCatalog == 2) {
        $('#catalogCatalogButton-3').addClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-2').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-1').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-4').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogBlock-3').removeClass('display-n')
        $('#catalogCatalogBlock-2').addClass('display-n')
        $('#catalogCatalogBlock-1').addClass('display-n')
        $('#catalogCatalogBlock-4').addClass('display-n')
    }
    if(activeContentCatalog == 3) {
        $('#catalogCatalogButton-4').addClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-3').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-2').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-1').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogBlock-4').removeClass('display-n')
        $('#catalogCatalogBlock-3').addClass('display-n')
        $('#catalogCatalogBlock-2').addClass('display-n')
        $('#catalogCatalogBlock-1').addClass('display-n')
    }
    if(id == 0) {
        activeContentCatalog = 0
        $('#catalogCatalogButton-1').addClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-2').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-3').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-4').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogBlock-1').removeClass('display-n')
        $('#catalogCatalogBlock-2').addClass('display-n')
        $('#catalogCatalogBlock-3').addClass('display-n')
        $('#catalogCatalogBlock-4').addClass('display-n')
    }
    if(id == 1) {
        activeContentCatalog = 1
        $('#catalogCatalogButton-2').addClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-1').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-3').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-4').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogBlock-2').removeClass('display-n')
        $('#catalogCatalogBlock-1').addClass('display-n')
        $('#catalogCatalogBlock-3').addClass('display-n')
        $('#catalogCatalogBlock-4').addClass('display-n')
    }
    if(id == 2) {
        activeContentCatalog = 2
        $('#catalogCatalogButton-3').addClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-2').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-1').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-4').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogBlock-3').removeClass('display-n')
        $('#catalogCatalogBlock-2').addClass('display-n')
        $('#catalogCatalogBlock-1').addClass('display-n')
        $('#catalogCatalogBlock-4').addClass('display-n')
    }
    if(id == 3) {
        activeContentCatalog = 3
        $('#catalogCatalogButton-4').addClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-3').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-2').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogButton-1').removeClass('catalog-content__block-count-item-active')
        $('#catalogCatalogBlock-4').removeClass('display-n')
        $('#catalogCatalogBlock-3').addClass('display-n')
        $('#catalogCatalogBlock-2').addClass('display-n')
        $('#catalogCatalogBlock-1').addClass('display-n')
    }
}
$(() => {
    for ( let i = 1; i <= 5; i++ ) {
        $(`#detailLines-${i}`).css('width', `${$(`#detailLineSum-${i}`).html()}`)
    }
});