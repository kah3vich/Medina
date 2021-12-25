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
    breakpoints: {
        1300: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
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
    breakpoints: {
        1300: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
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
    breakpoints: {
        1200: {
            slidesPerView: 5,
            spaceBetweenSlides: 0
        },
        900: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        700: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        }
    }
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
    breakpoints: {
        1250: {
            slidesPerView: 5,
            spaceBetweenSlides: 0
        },
        1000: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        890: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        550: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
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



var shopSlider_1 = new Swiper(".shopSlider-1", {
    navigation: {
        nextEl: "#indexShopElement-1 .swiper-controls .swiper-button-next",
        prevEl: "#indexShopElement-1 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: "#indexShopElement-1 .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 5,
    spaceBetween: 40,
    breakpoints: {
        1200: {
            slidesPerView: 5,
            spaceBetweenSlides: 40
        },
        950: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        650: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        }
    }
});
var shopSlider_2 = new Swiper(".shopSlider-2", {
    navigation: {
        nextEl: "#indexShopElement-2 .swiper-controls .swiper-button-next",
        prevEl: "#indexShopElement-2 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: "#indexShopElement-2 .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 5,
    spaceBetween: 40,
    breakpoints: {
        1200: {
            slidesPerView: 5,
            spaceBetweenSlides: 40
        },
        950: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        650: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        }
    }
});

var shopSlider_3 = new Swiper(".shopSlider-3", {
    navigation: {
        nextEl: "#indexShopElement-3 .swiper-controls .swiper-button-next",
        prevEl: "#indexShopElement-3 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: "#indexShopElement-3 .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 5,
    spaceBetween: 40,
    breakpoints: {
        1200: {
            slidesPerView: 5,
            spaceBetweenSlides: 40
        },
        950: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        650: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        }
    }
});

var shopSlider_4 = new Swiper(".shopSlider-4", {
    navigation: {
        nextEl: "#indexShopElement-4 .swiper-controls .swiper-button-next",
        prevEl: "#indexShopElement-4 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: "#indexShopElement-4 .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 5,
    spaceBetween: 40,
    breakpoints: {
        1200: {
            slidesPerView: 5,
            spaceBetweenSlides: 40
        },
        950: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        650: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        }
    }
});

var shopSlider_5 = new Swiper(".shopSlider-5", {
    navigation: {
        nextEl: "#indexShopElement-5 .swiper-controls .swiper-button-next",
        prevEl: "#indexShopElement-5 .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: "#indexShopElement-5 .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    slidesPerView: 5,
    spaceBetween: 40,
    breakpoints: {
        1200: {
            slidesPerView: 5,
            spaceBetweenSlides: 40
        },
        950: {
            slidesPerView: 4,
            spaceBetweenSlides: 0
        },
        650: {
            slidesPerView: 3,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        }
    }
});


var shopTabs = new Swiper(".shopTabs", {
    navigation: {
        nextEl: ".shop__block-list .swiper-controls .swiper-button-next",
        prevEl: ".shop__block-list .swiper-controls .swiper-button-prev",
    },
    pagination: {
        el: ".shop__block-list .swiper-controls .swiper-pagination",
    },
    mousewheel: true,
    breakpoints: {
        1400: {
            slidesPerView: 5,
            spaceBetweenSlides: 0
        },
        650: {
            slidesPerView: 2,
            spaceBetweenSlides: 0
        },
        0: {
            slidesPerView: 1,
            spaceBetweenSlides: 0
        }
    }
});



$(function() {
    $('#shopList').css('display', 'none')
    $('#shopList').after(`<div class="shop-select-item"><div class="shop-select-placeholder">${$('#shopList').children('option').eq(0).val()}</div><div class="shop-select-block display-n"><div id="listConstructorElementshopList" class="shop-select-wrapper"></div></div></div></div>`)
    let count = $('#shopList').children('option').length
    for( let i = 0; i < count; i++) {
        let arrows = $('#shopList').children('option').eq(i).val()
        let newElementBlock = document.createElement("button");
        newElementBlock.classList.add("shop-select-element")
        newElementBlock.id = `shop-select-element-${i + 1}`;
        newElementBlock.innerHTML = `${arrows}`
        document.getElementById("listConstructorElementshopList").appendChild(newElementBlock);
        $(`#shop-select-element-${i + 1}`).attr('value', `${arrows}`)
        $(`#shop-select-element-${i + 1}`).attr('type', `button`)
    }
    $('#shop-select-element-0').css('display', 'none')
    $('.shop-select-item').on('click', function() {
        $('.shop-select-block').toggleClass('display-n')
        $('.shop-select-item').toggleClass('shop-select-item-active')
    })
    $(".shop-select-element").on('click', function() {
        let idElement = this.id
        let valueElement = $(`#${idElement}`).val()
        $('.shop-select-placeholder').html(valueElement)
        $('#shopList option:nth-child(1)').val(valueElement)
        $('#shopList option:nth-child(1)').html(valueElement)
        let counts = $('.shop__block .containers ').children('.shop__block-slider').length
        for (let i = 1; i <= counts; i++ ) {
            $(`#indexShopElement-${i}`).addClass('display-n')
        }
        var last = idElement.toString().slice(-1);
        $(`#indexShopElement-${last}`).removeClass('display-n')
    })
})
