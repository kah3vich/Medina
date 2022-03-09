'use strict'

var recSlider = new Swiper('.recSlider', {
		navigation: {
			nextEl: '.rec__slider .swiper-controls .swiper-button-next',
			prevEl: '.rec__slider .swiper-controls .swiper-button-prev',
		},
		pagination: {
			el: '.rec__slider .swiper-controls .swiper-pagination',
		},
		slidesPerView: 3,
		spaceBetween: 0,
		loop: !0,
		preventClicksPropagation: false,
		preventClicks: false,
		breakpoints: {
			1300: {
				slidesPerView: 3,
				spaceBetweenSlides: 0,
			},
			0: {
				slidesPerView: 1,
				spaceBetweenSlides: 0,
			},
		},
	}),
	videoSlider = new Swiper('.videoSlider', {
		navigation: {
			nextEl: '.video__slider .swiper-controls .swiper-button-next',
			prevEl: '.video__slider .swiper-controls .swiper-button-prev',
		},
		pagination: {
			el: '.video__slider .swiper-controls .swiper-pagination',
		},
		slidesPerView: 3,
		spaceBetween: 0,
		loop: !0,
		breakpoints: {
			1300: {
				slidesPerView: 3,
				spaceBetweenSlides: 0,
			},
			0: {
				slidesPerView: 1,
				spaceBetweenSlides: 0,
			},
		},
	}),
	authorsSlider = new Swiper('.authorsSlider', {
		navigation: {
			nextEl: '.authors__slider .swiper-controls .swiper-button-next',
			prevEl: '.authors__slider .swiper-controls .swiper-button-prev',
		},
		pagination: {
			el: '.authors__slider .swiper-controls .swiper-pagination',
		},
		mousewheel: !0,
		slidesPerView: 5,
		spaceBetween: 0,
		breakpoints: {
			1200: {
				slidesPerView: 5,
				spaceBetweenSlides: 0,
			},
			900: {
				slidesPerView: 4,
				spaceBetweenSlides: 0,
			},
			700: {
				slidesPerView: 3,
				spaceBetweenSlides: 0,
			},
			0: {
				slidesPerView: 2,
				spaceBetweenSlides: 0,
			},
		},
	}),
	partSlider = new Swiper('.partSlider', {
		navigation: {
			nextEl: '.part__slider .swiper-controls .swiper-button-next',
			prevEl: '.part__slider .swiper-controls .swiper-button-prev',
		},
		pagination: {
			el: '.part__slider .swiper-controls .swiper-pagination',
		},
		mousewheel: !0,
		slidesPerView: 5,
		spaceBetween: 0,
		breakpoints: {
			1250: {
				slidesPerView: 5,
				spaceBetweenSlides: 0,
			},
			1e3: {
				slidesPerView: 4,
				spaceBetweenSlides: 0,
			},
			890: {
				slidesPerView: 3,
				spaceBetweenSlides: 0,
			},
			550: {
				slidesPerView: 2,
				spaceBetweenSlides: 0,
			},
			0: {
				slidesPerView: 1,
				spaceBetweenSlides: 0,
			},
		},
	}),
	indexHeaderSlider = new Swiper('.indexHeaderSlider', {
		navigation: {
			nextEl: '.ind-header__content  .swiper-controls .swiper-button-next',
			prevEl: '.ind-header__content  .swiper-controls .swiper-button-prev',
		},
		pagination: {
			el: '.ind-header__content .swiper-controls .swiper-pagination',
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: !0,
		},
	})
var activeContentIndex = 0,
	elementContentCount = 4

function changeSlide(e) {
	'next' === e
		? (activeContentIndex++,
		  activeContentIndex === elementContentCount && (activeContentIndex = 0))
		: 'prev' === e &&
		  (activeContentIndex--,
		  activeContentIndex < 0 && (activeContentIndex = elementContentCount - 1)),
		0 == activeContentIndex &&
			($('#indexCatalogButton-1').addClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-2').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-3').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-4').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogBlock-1').removeClass('display-n'),
			$('#indexCatalogBlock-2').addClass('display-n'),
			$('#indexCatalogBlock-3').addClass('display-n'),
			$('#indexCatalogBlock-4').addClass('display-n')),
		1 == activeContentIndex &&
			($('#indexCatalogButton-2').addClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-1').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-3').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-4').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogBlock-2').removeClass('display-n'),
			$('#indexCatalogBlock-1').addClass('display-n'),
			$('#indexCatalogBlock-3').addClass('display-n'),
			$('#indexCatalogBlock-4').addClass('display-n')),
		2 == activeContentIndex &&
			($('#indexCatalogButton-3').addClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-2').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-1').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-4').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogBlock-3').removeClass('display-n'),
			$('#indexCatalogBlock-2').addClass('display-n'),
			$('#indexCatalogBlock-1').addClass('display-n'),
			$('#indexCatalogBlock-4').addClass('display-n')),
		3 == activeContentIndex &&
			($('#indexCatalogButton-4').addClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-3').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-2').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-1').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogBlock-4').removeClass('display-n'),
			$('#indexCatalogBlock-3').addClass('display-n'),
			$('#indexCatalogBlock-2').addClass('display-n'),
			$('#indexCatalogBlock-1').addClass('display-n')),
		0 == e &&
			((activeContentIndex = 0),
			$('#indexCatalogButton-1').addClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-2').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-3').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-4').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogBlock-1').removeClass('display-n'),
			$('#indexCatalogBlock-2').addClass('display-n'),
			$('#indexCatalogBlock-3').addClass('display-n'),
			$('#indexCatalogBlock-4').addClass('display-n')),
		1 == e &&
			((activeContentIndex = 1),
			$('#indexCatalogButton-2').addClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-1').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-3').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-4').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogBlock-2').removeClass('display-n'),
			$('#indexCatalogBlock-1').addClass('display-n'),
			$('#indexCatalogBlock-3').addClass('display-n'),
			$('#indexCatalogBlock-4').addClass('display-n')),
		2 == e &&
			((activeContentIndex = 2),
			$('#indexCatalogButton-3').addClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-2').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-1').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-4').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogBlock-3').removeClass('display-n'),
			$('#indexCatalogBlock-2').addClass('display-n'),
			$('#indexCatalogBlock-1').addClass('display-n'),
			$('#indexCatalogBlock-4').addClass('display-n')),
		3 == e &&
			((activeContentIndex = 3),
			$('#indexCatalogButton-4').addClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-3').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-2').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogButton-1').removeClass(
				'ind-catalog__content-count-item-active'
			),
			$('#indexCatalogBlock-4').removeClass('display-n'),
			$('#indexCatalogBlock-3').addClass('display-n'),
			$('#indexCatalogBlock-2').addClass('display-n'),
			$('#indexCatalogBlock-1').addClass('display-n'))
}

$('#indexCatalogNext').on('click', function () {
	changeSlide('next')
}),
	$('#indexCatalogPrev').on('click', function () {
		changeSlide('prev')
	}),
	$('#indexCatalogButton-1').on('click', function () {
		changeSlide(0)
	}),
	$('#indexCatalogButton-2').on('click', function () {
		changeSlide(1)
	}),
	$('#indexCatalogButton-3').on('click', function () {
		changeSlide(2)
	}),
	$('#indexCatalogButton-4').on('click', function () {
		changeSlide(3)
	}),
	$(function () {
		$('#city').css('display', 'none'),
			$('#city').after(
				'<div class="header-select-item"><div class="header-select-placeholder">RU</div><div id="listConstructorElementHeader" class="header-select-wrapper display-n"></div></div>'
			)
		var e = $('#city').children('option').length

		for (var t = 0; t < e; t++) {
			var _e = $('#city').children('option').eq(t).val(),
				a = document.createElement('button')

			a.classList.add('header-select-element'),
				(a.id = 'header-select-element-'.concat(t)),
				(a.innerHTML = ''.concat(_e)),
				document.getElementById('listConstructorElementHeader').appendChild(a),
				$('#header-select-element-'.concat(t)).attr('value', ''.concat(_e)),
				$('#header-select-element-'.concat(t)).attr('type', 'button')
		}

		$('#header-select-element-0').css('display', 'none'),
			$('.header-select-item').on('click', function () {
				$('.header-select-wrapper').toggleClass('display-n'),
					$('.header-select-item').toggleClass('header-select-item-active')
			}),
			$('.header-select-element').on('click', function () {
				var e = this.id,
					t = $('#'.concat(e)).val()
				$('.header-select-placeholder').html(t),
					$('#city option:nth-child(1)').val(t),
					$('#city option:nth-child(1)').html(t)
			})
	})
var shopSlider_1 = new Swiper('.shopSlider-1', {
		navigation: {
			nextEl: '#indexShopElement-1 .swiper-controls .swiper-button-next',
			prevEl: '#indexShopElement-1 .swiper-controls .swiper-button-prev',
		},
		pagination: {
			el: '#indexShopElement-1 .swiper-controls .swiper-pagination',
		},
		mousewheel: !0,
		keyboard: !0,
		slidesPerView: 5,
		spaceBetween: 40,
		breakpoints: {
			1200: {
				slidesPerView: 5,
				spaceBetweenSlides: 40,
			},
			950: {
				slidesPerView: 4,
				spaceBetweenSlides: 0,
			},
			650: {
				slidesPerView: 3,
				spaceBetweenSlides: 0,
			},
			0: {
				slidesPerView: 2,
				spaceBetweenSlides: 0,
			},
		},
	}),
	shopSlider_2 = new Swiper('.shopSlider-2', {
		navigation: {
			nextEl: '#indexShopElement-2 .swiper-controls .swiper-button-next',
			prevEl: '#indexShopElement-2 .swiper-controls .swiper-button-prev',
		},
		pagination: {
			el: '#indexShopElement-2 .swiper-controls .swiper-pagination',
		},
		mousewheel: !0,
		keyboard: !0,
		slidesPerView: 5,
		spaceBetween: 40,
		breakpoints: {
			1200: {
				slidesPerView: 5,
				spaceBetweenSlides: 40,
			},
			950: {
				slidesPerView: 4,
				spaceBetweenSlides: 0,
			},
			650: {
				slidesPerView: 3,
				spaceBetweenSlides: 0,
			},
			0: {
				slidesPerView: 2,
				spaceBetweenSlides: 0,
			},
		},
	}),
	shopSlider_3 = new Swiper('.shopSlider-3', {
		navigation: {
			nextEl: '#indexShopElement-3 .swiper-controls .swiper-button-next',
			prevEl: '#indexShopElement-3 .swiper-controls .swiper-button-prev',
		},
		pagination: {
			el: '#indexShopElement-3 .swiper-controls .swiper-pagination',
		},
		mousewheel: !0,
		keyboard: !0,
		slidesPerView: 5,
		spaceBetween: 40,
		breakpoints: {
			1200: {
				slidesPerView: 5,
				spaceBetweenSlides: 40,
			},
			950: {
				slidesPerView: 4,
				spaceBetweenSlides: 0,
			},
			650: {
				slidesPerView: 3,
				spaceBetweenSlides: 0,
			},
			0: {
				slidesPerView: 2,
				spaceBetweenSlides: 0,
			},
		},
	}),
	shopSlider_4 = new Swiper('.shopSlider-4', {
		navigation: {
			nextEl: '#indexShopElement-4 .swiper-controls .swiper-button-next',
			prevEl: '#indexShopElement-4 .swiper-controls .swiper-button-prev',
		},
		pagination: {
			el: '#indexShopElement-4 .swiper-controls .swiper-pagination',
		},
		mousewheel: !0,
		keyboard: !0,
		slidesPerView: 5,
		spaceBetween: 40,
		breakpoints: {
			1200: {
				slidesPerView: 5,
				spaceBetweenSlides: 40,
			},
			950: {
				slidesPerView: 4,
				spaceBetweenSlides: 0,
			},
			650: {
				slidesPerView: 3,
				spaceBetweenSlides: 0,
			},
			0: {
				slidesPerView: 2,
				spaceBetweenSlides: 0,
			},
		},
	}),
	shopSlider_5 = new Swiper('.shopSlider-5', {
		navigation: {
			nextEl: '#indexShopElement-5 .swiper-controls .swiper-button-next',
			prevEl: '#indexShopElement-5 .swiper-controls .swiper-button-prev',
		},
		pagination: {
			el: '#indexShopElement-5 .swiper-controls .swiper-pagination',
		},
		mousewheel: !0,
		keyboard: !0,
		slidesPerView: 5,
		spaceBetween: 40,
		breakpoints: {
			1200: {
				slidesPerView: 5,
				spaceBetweenSlides: 40,
			},
			950: {
				slidesPerView: 4,
				spaceBetweenSlides: 0,
			},
			650: {
				slidesPerView: 3,
				spaceBetweenSlides: 0,
			},
			0: {
				slidesPerView: 2,
				spaceBetweenSlides: 0,
			},
		},
	})

var activeContentCatalog = 0,
	elementContentCountCatalog = 4

function changeSlideCatalog(e) {
	'next' === e
		? (activeContentCatalog++,
		  activeContentCatalog === elementContentCountCatalog &&
				(activeContentCatalog = 0))
		: 'prev' === e &&
		  (activeContentCatalog--,
		  activeContentCatalog < 0 &&
				(activeContentCatalog = elementContentCountCatalog - 1)),
		0 == activeContentCatalog &&
			($('#catalogCatalogButton-1').addClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-2').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-3').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-4').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogBlock-1').removeClass('display-n'),
			$('#catalogCatalogBlock-2').addClass('display-n'),
			$('#catalogCatalogBlock-3').addClass('display-n'),
			$('#catalogCatalogBlock-4').addClass('display-n')),
		1 == activeContentCatalog &&
			($('#catalogCatalogButton-2').addClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-1').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-3').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-4').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogBlock-2').removeClass('display-n'),
			$('#catalogCatalogBlock-1').addClass('display-n'),
			$('#catalogCatalogBlock-3').addClass('display-n'),
			$('#catalogCatalogBlock-4').addClass('display-n')),
		2 == activeContentCatalog &&
			($('#catalogCatalogButton-3').addClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-2').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-1').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-4').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogBlock-3').removeClass('display-n'),
			$('#catalogCatalogBlock-2').addClass('display-n'),
			$('#catalogCatalogBlock-1').addClass('display-n'),
			$('#catalogCatalogBlock-4').addClass('display-n')),
		3 == activeContentCatalog &&
			($('#catalogCatalogButton-4').addClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-3').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-2').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-1').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogBlock-4').removeClass('display-n'),
			$('#catalogCatalogBlock-3').addClass('display-n'),
			$('#catalogCatalogBlock-2').addClass('display-n'),
			$('#catalogCatalogBlock-1').addClass('display-n')),
		0 == e &&
			((activeContentCatalog = 0),
			$('#catalogCatalogButton-1').addClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-2').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-3').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-4').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogBlock-1').removeClass('display-n'),
			$('#catalogCatalogBlock-2').addClass('display-n'),
			$('#catalogCatalogBlock-3').addClass('display-n'),
			$('#catalogCatalogBlock-4').addClass('display-n')),
		1 == e &&
			((activeContentCatalog = 1),
			$('#catalogCatalogButton-2').addClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-1').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-3').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-4').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogBlock-2').removeClass('display-n'),
			$('#catalogCatalogBlock-1').addClass('display-n'),
			$('#catalogCatalogBlock-3').addClass('display-n'),
			$('#catalogCatalogBlock-4').addClass('display-n')),
		2 == e &&
			((activeContentCatalog = 2),
			$('#catalogCatalogButton-3').addClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-2').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-1').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-4').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogBlock-3').removeClass('display-n'),
			$('#catalogCatalogBlock-2').addClass('display-n'),
			$('#catalogCatalogBlock-1').addClass('display-n'),
			$('#catalogCatalogBlock-4').addClass('display-n')),
		3 == e &&
			((activeContentCatalog = 3),
			$('#catalogCatalogButton-4').addClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-3').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-2').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogButton-1').removeClass(
				'catalog-content__block-count-item-active'
			),
			$('#catalogCatalogBlock-4').removeClass('display-n'),
			$('#catalogCatalogBlock-3').addClass('display-n'),
			$('#catalogCatalogBlock-2').addClass('display-n'),
			$('#catalogCatalogBlock-1').addClass('display-n'))
}

$('#catalogCatalogNext').on('click', function () {
	changeSlideCatalog('next')
}),
	$('#catalogCatalogPrev').on('click', function () {
		changeSlideCatalog('prev')
	}),
	$('#catalogCatalogButton-1').on('click', function () {
		changeSlideCatalog(0)
	}),
	$('#catalogCatalogButton-2').on('click', function () {
		changeSlideCatalog(1)
	}),
	$('#catalogCatalogButton-3').on('click', function () {
		changeSlideCatalog(2)
	}),
	$('#catalogCatalogButton-4').on('click', function () {
		changeSlideCatalog(3)
	})
//$("#headerGalleryMenu").hover(function () {
//	if ($(window).width() > 768) {
//       //$(".header__block-list-item-add").toggleClass("display-n");
//     }
//
//}),
//$(".header__block-list-item-add").hover(function () {
//	if ($(window).width()> 768) {
// $(".header__block-list-item-add").removeClass("display-n");
//}
//}),
$(function () {
	for (var e = 1; e <= 5; e++) {
		$('#detailLines-'.concat(e)).css(
			'width',
			''.concat($('#detailLineSum-'.concat(e)).html())
		)
	}
})
;(function (e, t) {
	'use strict'
	var n = e.console || t,
		r = e.document,
		i = e.navigator,
		s = !1,
		o = e.setTimeout,
		u = e.clearTimeout,
		a = e.setInterval,
		f = e.clearInterval,
		l = e.JSON,
		c = e.alert,
		h = (e.History = e.History || {}),
		p = e.history
	try {
		;(s = e.sessionStorage), s.setItem('TEST', '1'), s.removeItem('TEST')
	} catch (d) {
		s = !1
	}
	;(l.stringify = l.stringify || l.encode), (l.parse = l.parse || l.decode)
	if (typeof h.init != 'undefined')
		throw new Error('History.js Core has already been loaded...')
	;(h.init = function (e) {
		return typeof h.Adapter == 'undefined'
			? !1
			: (typeof h.initCore != 'undefined' && h.initCore(),
			  typeof h.initHtml4 != 'undefined' && h.initHtml4(),
			  !0)
	}),
		(h.initCore = function (d) {
			if (typeof h.initCore.initialized != 'undefined') return !1
			;(h.initCore.initialized = !0),
				(h.options = h.options || {}),
				(h.options.hashChangeInterval = h.options.hashChangeInterval || 100),
				(h.options.safariPollInterval = h.options.safariPollInterval || 500),
				(h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500),
				(h.options.disableSuid = h.options.disableSuid || !1),
				(h.options.storeInterval = h.options.storeInterval || 1e3),
				(h.options.busyDelay = h.options.busyDelay || 250),
				(h.options.debug = h.options.debug || !1),
				(h.options.initialTitle = h.options.initialTitle || r.title),
				(h.options.html4Mode = h.options.html4Mode || !1),
				(h.options.delayInit = h.options.delayInit || !1),
				(h.intervalList = []),
				(h.clearAllIntervals = function () {
					var e,
						t = h.intervalList
					if (typeof t != 'undefined' && t !== null) {
						for (e = 0; e < t.length; e++) f(t[e])
						h.intervalList = null
					}
				}),
				(h.debug = function () {
					;(h.options.debug || !1) && h.log.apply(h, arguments)
				}),
				(h.log = function () {
					var e =
							typeof n != 'undefined' &&
							typeof n.log != 'undefined' &&
							typeof n.log.apply != 'undefined',
						t = r.getElementById('log'),
						i,
						s,
						o,
						u,
						a
					e
						? ((u = Array.prototype.slice.call(arguments)),
						  (i = u.shift()),
						  typeof n.debug != 'undefined'
								? n.debug.apply(n, [i, u])
								: n.log.apply(n, [i, u]))
						: (i = '\n' + arguments[0] + '\n')
					for (s = 1, o = arguments.length; s < o; ++s) {
						a = arguments[s]
						if (typeof a == 'object' && typeof l != 'undefined')
							try {
								a = l.stringify(a)
							} catch (f) {}
						i += '\n' + a + '\n'
					}
					return (
						t
							? ((t.value += i + '\n-----\n'),
							  (t.scrollTop = t.scrollHeight - t.clientHeight))
							: e || c(i),
						!0
					)
				}),
				(h.getInternetExplorerMajorVersion = function () {
					var e = (h.getInternetExplorerMajorVersion.cached =
						typeof h.getInternetExplorerMajorVersion.cached != 'undefined'
							? h.getInternetExplorerMajorVersion.cached
							: (function () {
									var e = 3,
										t = r.createElement('div'),
										n = t.getElementsByTagName('i')
									while (
										(t.innerHTML =
											'<!--[if gt IE ' + ++e + ']><i></i><![endif]-->') &&
										n[0]
									);
									return e > 4 ? e : !1
							  })())
					return e
				}),
				(h.isInternetExplorer = function () {
					var e = (h.isInternetExplorer.cached =
						typeof h.isInternetExplorer.cached != 'undefined'
							? h.isInternetExplorer.cached
							: Boolean(h.getInternetExplorerMajorVersion()))
					return e
				}),
				h.options.html4Mode
					? (h.emulated = { pushState: !0, hashChange: !0 })
					: (h.emulated = {
							pushState: !Boolean(
								e.history &&
									e.history.pushState &&
									e.history.replaceState &&
									!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(
										i.userAgent
									) &&
									!/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)
							),
							hashChange: Boolean(
								!('onhashchange' in e || 'onhashchange' in r) ||
									(h.isInternetExplorer() &&
										h.getInternetExplorerMajorVersion() < 8)
							),
					  }),
				(h.enabled = !h.emulated.pushState),
				(h.bugs = {
					setHash: Boolean(
						!h.emulated.pushState &&
							i.vendor === 'Apple Computer, Inc.' &&
							/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)
					),
					safariPoll: Boolean(
						!h.emulated.pushState &&
							i.vendor === 'Apple Computer, Inc.' &&
							/AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)
					),
					ieDoubleCheck: Boolean(
						h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8
					),
					hashEscape: Boolean(
						h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7
					),
				}),
				(h.isEmptyObject = function (e) {
					for (var t in e) if (e.hasOwnProperty(t)) return !1
					return !0
				}),
				(h.cloneObject = function (e) {
					var t, n
					return e ? ((t = l.stringify(e)), (n = l.parse(t))) : (n = {}), n
				}),
				(h.getRootUrl = function () {
					var e =
						r.location.protocol +
						'//' +
						(r.location.hostname || r.location.host)
					if (r.location.port || !1) e += ':' + r.location.port
					return (e += '/'), e
				}),
				(h.getBaseHref = function () {
					var e = r.getElementsByTagName('base'),
						t = null,
						n = ''
					return (
						e.length === 1 && ((t = e[0]), (n = t.href.replace(/[^\/]+$/, ''))),
						(n = n.replace(/\/+$/, '')),
						n && (n += '/'),
						n
					)
				}),
				(h.getBaseUrl = function () {
					var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl()
					return e
				}),
				(h.getPageUrl = function () {
					var e = h.getState(!1, !1),
						t = (e || {}).url || h.getLocationHref(),
						n
					return (
						(n = t.replace(/\/+$/, '').replace(/[^\/]+$/, function (e, t, n) {
							return /\./.test(e) ? e : e + '/'
						})),
						n
					)
				}),
				(h.getBasePageUrl = function () {
					var e =
						h
							.getLocationHref()
							.replace(/[#\?].*/, '')
							.replace(/[^\/]+$/, function (e, t, n) {
								return /[^\/]$/.test(e) ? '' : e
							})
							.replace(/\/+$/, '') + '/'
					return e
				}),
				(h.getFullUrl = function (e, t) {
					var n = e,
						r = e.substring(0, 1)
					return (
						(t = typeof t == 'undefined' ? !0 : t),
						/[a-z]+\:\/\//.test(e) ||
							(r === '/'
								? (n = h.getRootUrl() + e.replace(/^\/+/, ''))
								: r === '#'
								? (n = h.getPageUrl().replace(/#.*/, '') + e)
								: r === '?'
								? (n = h.getPageUrl().replace(/[\?#].*/, '') + e)
								: t
								? (n = h.getBaseUrl() + e.replace(/^(\.\/)+/, ''))
								: (n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, ''))),
						n.replace(/\#$/, '')
					)
				}),
				(h.getShortUrl = function (e) {
					var t = e,
						n = h.getBaseUrl(),
						r = h.getRootUrl()
					return (
						h.emulated.pushState && (t = t.replace(n, '')),
						(t = t.replace(r, '/')),
						h.isTraditionalAnchor(t) && (t = './' + t),
						(t = t.replace(/^(\.\/)+/g, './').replace(/\#$/, '')),
						t
					)
				}),
				(h.getLocationHref = function (e) {
					return (
						(e = e || r),
						e.URL === e.location.href
							? e.location.href
							: e.location.href === decodeURIComponent(e.URL)
							? e.URL
							: e.location.hash &&
							  decodeURIComponent(e.location.href.replace(/^[^#]+/, '')) ===
									e.location.hash
							? e.location.href
							: e.URL.indexOf('#') == -1 && e.location.href.indexOf('#') != -1
							? e.location.href
							: e.URL || e.location.href
					)
				}),
				(h.store = {}),
				(h.idToState = h.idToState || {}),
				(h.stateToId = h.stateToId || {}),
				(h.urlToId = h.urlToId || {}),
				(h.storedStates = h.storedStates || []),
				(h.savedStates = h.savedStates || []),
				(h.normalizeStore = function () {
					;(h.store.idToState = h.store.idToState || {}),
						(h.store.urlToId = h.store.urlToId || {}),
						(h.store.stateToId = h.store.stateToId || {})
				}),
				(h.getState = function (e, t) {
					typeof e == 'undefined' && (e = !0),
						typeof t == 'undefined' && (t = !0)
					var n = h.getLastSavedState()
					return (
						!n && t && (n = h.createStateObject()),
						e && ((n = h.cloneObject(n)), (n.url = n.cleanUrl || n.url)),
						n
					)
				}),
				(h.getIdByState = function (e) {
					var t = h.extractId(e.url),
						n
					if (!t) {
						n = h.getStateString(e)
						if (typeof h.stateToId[n] != 'undefined') t = h.stateToId[n]
						else if (typeof h.store.stateToId[n] != 'undefined')
							t = h.store.stateToId[n]
						else {
							for (;;) {
								t =
									new Date().getTime() +
									String(Math.random()).replace(/\D/g, '')
								if (
									typeof h.idToState[t] == 'undefined' &&
									typeof h.store.idToState[t] == 'undefined'
								)
									break
							}
							;(h.stateToId[n] = t), (h.idToState[t] = e)
						}
					}
					return t
				}),
				(h.normalizeState = function (e) {
					var t, n
					if (!e || typeof e != 'object') e = {}
					if (typeof e.normalized != 'undefined') return e
					if (!e.data || typeof e.data != 'object') e.data = {}
					return (
						(t = {}),
						(t.normalized = !0),
						(t.title = e.title || ''),
						(t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref())),
						(t.hash = h.getShortUrl(t.url)),
						(t.data = h.cloneObject(e.data)),
						(t.id = h.getIdByState(t)),
						(t.cleanUrl = t.url.replace(/\??\&_suid.*/, '')),
						(t.url = t.cleanUrl),
						(n = !h.isEmptyObject(t.data)),
						(t.title || n) &&
							h.options.disableSuid !== !0 &&
							((t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, '')),
							/\?/.test(t.hash) || (t.hash += '?'),
							(t.hash += '&_suid=' + t.id)),
						(t.hashedUrl = h.getFullUrl(t.hash)),
						(h.emulated.pushState || h.bugs.safariPoll) &&
							h.hasUrlDuplicate(t) &&
							(t.url = t.hashedUrl),
						t
					)
				}),
				(h.createStateObject = function (e, t, n) {
					var r = { data: e, title: t, url: n }
					return (r = h.normalizeState(r)), r
				}),
				(h.getStateById = function (e) {
					e = String(e)
					var n = h.idToState[e] || h.store.idToState[e] || t
					return n
				}),
				(h.getStateString = function (e) {
					var t, n, r
					return (
						(t = h.normalizeState(e)),
						(n = { data: t.data, title: e.title, url: e.url }),
						(r = l.stringify(n)),
						r
					)
				}),
				(h.getStateId = function (e) {
					var t, n
					return (t = h.normalizeState(e)), (n = t.id), n
				}),
				(h.getHashByState = function (e) {
					var t, n
					return (t = h.normalizeState(e)), (n = t.hash), n
				}),
				(h.extractId = function (e) {
					var t, n, r, i
					return (
						e.indexOf('#') != -1 ? (i = e.split('#')[0]) : (i = e),
						(n = /(.*)\&_suid=([0-9]+)$/.exec(i)),
						(r = n ? n[1] || e : e),
						(t = n ? String(n[2] || '') : ''),
						t || !1
					)
				}),
				(h.isTraditionalAnchor = function (e) {
					var t = !/[\/\?\.]/.test(e)
					return t
				}),
				(h.extractState = function (e, t) {
					var n = null,
						r,
						i
					return (
						(t = t || !1),
						(r = h.extractId(e)),
						r && (n = h.getStateById(r)),
						n ||
							((i = h.getFullUrl(e)),
							(r = h.getIdByUrl(i) || !1),
							r && (n = h.getStateById(r)),
							!n &&
								t &&
								!h.isTraditionalAnchor(e) &&
								(n = h.createStateObject(null, null, i))),
						n
					)
				}),
				(h.getIdByUrl = function (e) {
					var n = h.urlToId[e] || h.store.urlToId[e] || t
					return n
				}),
				(h.getLastSavedState = function () {
					return h.savedStates[h.savedStates.length - 1] || t
				}),
				(h.getLastStoredState = function () {
					return h.storedStates[h.storedStates.length - 1] || t
				}),
				(h.hasUrlDuplicate = function (e) {
					var t = !1,
						n
					return (n = h.extractState(e.url)), (t = n && n.id !== e.id), t
				}),
				(h.storeState = function (e) {
					return (
						(h.urlToId[e.url] = e.id), h.storedStates.push(h.cloneObject(e)), e
					)
				}),
				(h.isLastSavedState = function (e) {
					var t = !1,
						n,
						r,
						i
					return (
						h.savedStates.length &&
							((n = e.id),
							(r = h.getLastSavedState()),
							(i = r.id),
							(t = n === i)),
						t
					)
				}),
				(h.saveState = function (e) {
					return h.isLastSavedState(e)
						? !1
						: (h.savedStates.push(h.cloneObject(e)), !0)
				}),
				(h.getStateByIndex = function (e) {
					var t = null
					return (
						typeof e == 'undefined'
							? (t = h.savedStates[h.savedStates.length - 1])
							: e < 0
							? (t = h.savedStates[h.savedStates.length + e])
							: (t = h.savedStates[e]),
						t
					)
				}),
				(h.getCurrentIndex = function () {
					var e = null
					return (
						h.savedStates.length < 1 ? (e = 0) : (e = h.savedStates.length - 1),
						e
					)
				}),
				(h.getHash = function (e) {
					var t = h.getLocationHref(e),
						n
					return (n = h.getHashByUrl(t)), n
				}),
				(h.unescapeHash = function (e) {
					var t = h.normalizeHash(e)
					return (t = decodeURIComponent(t)), t
				}),
				(h.normalizeHash = function (e) {
					var t = e.replace(/[^#]*#/, '').replace(/#.*/, '')
					return t
				}),
				(h.setHash = function (e, t) {
					var n, i
					return t !== !1 && h.busy()
						? (h.pushQueue({
								scope: h,
								callback: h.setHash,
								args: arguments,
								queue: t,
						  }),
						  !1)
						: (h.busy(!0),
						  (n = h.extractState(e, !0)),
						  n && !h.emulated.pushState
								? h.pushState(n.data, n.title, n.url, !1)
								: h.getHash() !== e &&
								  (h.bugs.setHash
										? ((i = h.getPageUrl()),
										  h.pushState(null, null, i + '#' + e, !1))
										: (r.location.hash = e)),
						  h)
				}),
				(h.escapeHash = function (t) {
					var n = h.normalizeHash(t)
					return (
						(n = e.encodeURIComponent(n)),
						h.bugs.hashEscape ||
							(n = n
								.replace(/\%21/g, '!')
								.replace(/\%26/g, '&')
								.replace(/\%3D/g, '=')
								.replace(/\%3F/g, '?')),
						n
					)
				}),
				(h.getHashByUrl = function (e) {
					var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, '$2')
					return (t = h.unescapeHash(t)), t
				}),
				(h.setTitle = function (e) {
					var t = e.title,
						n
					t ||
						((n = h.getStateByIndex(0)),
						n && n.url === e.url && (t = n.title || h.options.initialTitle))
					try {
						r.getElementsByTagName('title')[0].innerHTML = t
							.replace('<', '&lt;')
							.replace('>', '&gt;')
							.replace(' & ', ' &amp; ')
					} catch (i) {}
					return (r.title = t), h
				}),
				(h.queues = []),
				(h.busy = function (e) {
					typeof e != 'undefined'
						? (h.busy.flag = e)
						: typeof h.busy.flag == 'undefined' && (h.busy.flag = !1)
					if (!h.busy.flag) {
						u(h.busy.timeout)
						var t = function () {
							var e, n, r
							if (h.busy.flag) return
							for (e = h.queues.length - 1; e >= 0; --e) {
								n = h.queues[e]
								if (n.length === 0) continue
								;(r = n.shift()),
									h.fireQueueItem(r),
									(h.busy.timeout = o(t, h.options.busyDelay))
							}
						}
						h.busy.timeout = o(t, h.options.busyDelay)
					}
					return h.busy.flag
				}),
				(h.busy.flag = !1),
				(h.fireQueueItem = function (e) {
					return e.callback.apply(e.scope || h, e.args || [])
				}),
				(h.pushQueue = function (e) {
					return (
						(h.queues[e.queue || 0] = h.queues[e.queue || 0] || []),
						h.queues[e.queue || 0].push(e),
						h
					)
				}),
				(h.queue = function (e, t) {
					return (
						typeof e == 'function' && (e = { callback: e }),
						typeof t != 'undefined' && (e.queue = t),
						h.busy() ? h.pushQueue(e) : h.fireQueueItem(e),
						h
					)
				}),
				(h.clearQueue = function () {
					return (h.busy.flag = !1), (h.queues = []), h
				}),
				(h.stateChanged = !1),
				(h.doubleChecker = !1),
				(h.doubleCheckComplete = function () {
					return (h.stateChanged = !0), h.doubleCheckClear(), h
				}),
				(h.doubleCheckClear = function () {
					return (
						h.doubleChecker && (u(h.doubleChecker), (h.doubleChecker = !1)), h
					)
				}),
				(h.doubleCheck = function (e) {
					return (
						(h.stateChanged = !1),
						h.doubleCheckClear(),
						h.bugs.ieDoubleCheck &&
							(h.doubleChecker = o(function () {
								return h.doubleCheckClear(), h.stateChanged || e(), !0
							}, h.options.doubleCheckInterval)),
						h
					)
				}),
				(h.safariStatePoll = function () {
					var t = h.extractState(h.getLocationHref()),
						n
					if (!h.isLastSavedState(t))
						return (
							(n = t),
							n || (n = h.createStateObject()),
							h.Adapter.trigger(e, 'popstate'),
							h
						)
					return
				}),
				(h.back = function (e) {
					return e !== !1 && h.busy()
						? (h.pushQueue({
								scope: h,
								callback: h.back,
								args: arguments,
								queue: e,
						  }),
						  !1)
						: (h.busy(!0),
						  h.doubleCheck(function () {
								h.back(!1)
						  }),
						  p.go(-1),
						  !0)
				}),
				(h.forward = function (e) {
					return e !== !1 && h.busy()
						? (h.pushQueue({
								scope: h,
								callback: h.forward,
								args: arguments,
								queue: e,
						  }),
						  !1)
						: (h.busy(!0),
						  h.doubleCheck(function () {
								h.forward(!1)
						  }),
						  p.go(1),
						  !0)
				}),
				(h.go = function (e, t) {
					var n
					if (e > 0) for (n = 1; n <= e; ++n) h.forward(t)
					else {
						if (!(e < 0))
							throw new Error(
								'History.go: History.go requires a positive or negative integer passed.'
							)
						for (n = -1; n >= e; --n) h.back(t)
					}
					return h
				})
			if (h.emulated.pushState) {
				var v = function () {}
				;(h.pushState = h.pushState || v),
					(h.replaceState = h.replaceState || v)
			} else
				(h.onPopState = function (t, n) {
					var r = !1,
						i = !1,
						s,
						o
					return (
						h.doubleCheckComplete(),
						(s = h.getHash()),
						s
							? ((o = h.extractState(s || h.getLocationHref(), !0)),
							  o
									? h.replaceState(o.data, o.title, o.url, !1)
									: (h.Adapter.trigger(e, 'anchorchange'), h.busy(!1)),
							  (h.expectedStateId = !1),
							  !1)
							: ((r = h.Adapter.extractEventData('state', t, n) || !1),
							  r
									? (i = h.getStateById(r))
									: h.expectedStateId
									? (i = h.getStateById(h.expectedStateId))
									: (i = h.extractState(h.getLocationHref())),
							  i || (i = h.createStateObject(null, null, h.getLocationHref())),
							  (h.expectedStateId = !1),
							  h.isLastSavedState(i)
									? (h.busy(!1), !1)
									: (h.storeState(i),
									  h.saveState(i),
									  h.setTitle(i),
									  h.Adapter.trigger(e, 'statechange'),
									  h.busy(!1),
									  !0))
					)
				}),
					h.Adapter.bind(e, 'popstate', h.onPopState),
					(h.pushState = function (t, n, r, i) {
						if (h.getHashByUrl(r) && h.emulated.pushState)
							throw new Error(
								'History.js does not support states with fragement-identifiers (hashes/anchors).'
							)
						if (i !== !1 && h.busy())
							return (
								h.pushQueue({
									scope: h,
									callback: h.pushState,
									args: arguments,
									queue: i,
								}),
								!1
							)
						h.busy(!0)
						var s = h.createStateObject(t, n, r)
						return (
							h.isLastSavedState(s)
								? h.busy(!1)
								: (h.storeState(s),
								  (h.expectedStateId = s.id),
								  p.pushState(s.id, s.title, s.url),
								  h.Adapter.trigger(e, 'popstate')),
							!0
						)
					}),
					(h.replaceState = function (t, n, r, i) {
						if (h.getHashByUrl(r) && h.emulated.pushState)
							throw new Error(
								'History.js does not support states with fragement-identifiers (hashes/anchors).'
							)
						if (i !== !1 && h.busy())
							return (
								h.pushQueue({
									scope: h,
									callback: h.replaceState,
									args: arguments,
									queue: i,
								}),
								!1
							)
						h.busy(!0)
						var s = h.createStateObject(t, n, r)
						return (
							h.isLastSavedState(s)
								? h.busy(!1)
								: (h.storeState(s),
								  (h.expectedStateId = s.id),
								  p.replaceState(s.id, s.title, s.url),
								  h.Adapter.trigger(e, 'popstate')),
							!0
						)
					})
			if (s) {
				try {
					h.store = l.parse(s.getItem('History.store')) || {}
				} catch (m) {
					h.store = {}
				}
				h.normalizeStore()
			} else (h.store = {}), h.normalizeStore()
			h.Adapter.bind(e, 'unload', h.clearAllIntervals),
				h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))),
				s &&
					((h.onUnload = function () {
						var e, t, n
						try {
							e = l.parse(s.getItem('History.store')) || {}
						} catch (r) {
							e = {}
						}
						;(e.idToState = e.idToState || {}),
							(e.urlToId = e.urlToId || {}),
							(e.stateToId = e.stateToId || {})
						for (t in h.idToState) {
							if (!h.idToState.hasOwnProperty(t)) continue
							e.idToState[t] = h.idToState[t]
						}
						for (t in h.urlToId) {
							if (!h.urlToId.hasOwnProperty(t)) continue
							e.urlToId[t] = h.urlToId[t]
						}
						for (t in h.stateToId) {
							if (!h.stateToId.hasOwnProperty(t)) continue
							e.stateToId[t] = h.stateToId[t]
						}
						;(h.store = e), h.normalizeStore(), (n = l.stringify(e))
						try {
							s.setItem('History.store', n)
						} catch (i) {
							if (i.code !== DOMException.QUOTA_EXCEEDED_ERR) throw i
							s.length &&
								(s.removeItem('History.store'), s.setItem('History.store', n))
						}
					}),
					h.intervalList.push(a(h.onUnload, h.options.storeInterval)),
					h.Adapter.bind(e, 'beforeunload', h.onUnload),
					h.Adapter.bind(e, 'unload', h.onUnload))
			if (!h.emulated.pushState) {
				h.bugs.safariPoll &&
					h.intervalList.push(
						a(h.safariStatePoll, h.options.safariPollInterval)
					)
				if (
					i.vendor === 'Apple Computer, Inc.' ||
					(i.appCodeName || '') === 'Mozilla'
				)
					h.Adapter.bind(e, 'hashchange', function () {
						h.Adapter.trigger(e, 'popstate')
					}),
						h.getHash() &&
							h.Adapter.onDomLoad(function () {
								h.Adapter.trigger(e, 'hashchange')
							})
			}
		}),
		(!h.options || !h.options.delayInit) && h.init()
})(window)
;(function (e, t) {
	'use strict'
	var n = (e.History = e.History || {}),
		r = e.jQuery
	if (typeof n.Adapter != 'undefined')
		throw new Error('History.js Adapter has already been loaded...')
	;(n.Adapter = {
		bind: function (e, t, n) {
			r(e).bind(t, n)
		},
		trigger: function (e, t, n) {
			r(e).trigger(t, n)
		},
		extractEventData: function (e, n, r) {
			var i = (n && n.originalEvent && n.originalEvent[e]) || (r && r[e]) || t
			return i
		},
		onDomLoad: function (e) {
			r(e)
		},
	}),
		typeof n.init != 'undefined' && n.init()
})(window)

$(function () {
	$('.more-news').on('click', function (e) {
		e.preventDefault()
		var link = window.location.pathname,
			current = $(this).data('current'),
			max = $(this).data('max')

		current++
		$(this).data('current', current)

		$(this).attr('disabled', true)
		if (max == current) {
			$(this).hide()
		}

		$.get(link, { PAGEN_1: current, ajax: 'Y' }, function (html) {
			$('.new-catalog__block-table').append(html)
			$(this).attr('disabled', false)
		})
	})

	$('.catalog-content__block-filter-titles').on('click', function (e) {
		e.preventDefault()
		$(this).parent().toggleClass('m-open')
		$(this).parent().toggleClass('vaghb')
	})

	$('.js-range-slider').length && $('.js-range-slider').ionRangeSlider()

	$('select.js-select').each(function () {
		var $this = $(this)

		var html =
			'<div class="js-select-css shop-select-item"><div class="shop-select-placeholder">'
		html += $this.find('option:eq(0)').text()
		html +=
			'</div><div class="shop-select-block display-n"><div class="shop-select-wrapper">'
		$this.find('option').each(function () {
			html +=
				'<button class="shop-select-element" data-val="' +
				$(this).attr('value') +
				'" type="button">' +
				$(this).text() +
				'</button>'
		})
		html += '</div></div></div></div>'
		$(html).insertAfter($this.hide())

		var $next = $this.next()
		$next
			.find('.shop-select-placeholder')
			.on('click', function (e) {
				e.preventDefault()
				$next.find('.shop-select-block').toggleClass('display-n'),
					$next.toggleClass('shop-select-item-active')
			})
			.end()
			.find('.shop-select-element')
			.on('click', function (e) {
				e.preventDefault()
				$next.find('.shop-select-placeholder').text($(this).text())
				$this.val($(this).data('val')).trigger('change')
				$next.find('.shop-select-placeholder').trigger('click')
			})
	})

	var needAddPage = false,
		waitTimeout = null,
		getNextUrl = function () {
			var data = $('.catalog-content__block-filter').serialize(),
				$page = $('.catalog-content__block-count-item-active')
			if (needAddPage && $page.length) {
				data += '&page=' + $.trim($page.text())
			}
			needAddPage = false
			return window.location.pathname + '?' + data
		},
		changePage = function () {
			clearTimeout(waitTimeout)
			waitTimeout = setTimeout(function () {
				History.pushState(null, document.title, getNextUrl())
				console.log('after change page 7')
				//$(".catalog-content__block-list-items-content-authors").html("<p>Works</p>");
			}, 1000)
		}

	$('.catalog-content__block-filter').on(
		'change',
		'input,select',
		function (e) {
			needAddPage = true
			changePage()
		}
	)

	$('.catalog-content__block-list').on(
		'click',
		'.catalog-content__block-count-item',
		function (e) {
			e.preventDefault()
			var $target = $(e.target)
			if (!$target.hasClass('catalog-content__block-count-item'))
				$target = $target.parent()
			if (!$target.hasClass('catalog-content__block-count-item-active')) {
				$('.catalog-content__block-count-item-active').removeClass(
					'catalog-content__block-count-item-active'
				)
				$target.addClass('catalog-content__block-count-item-active')
				needAddPage = true
				changePage()
				console.log('after page change')
			}
		}
	)

	$('.catalog-content__block-list').on(
		'click',
		'.catalog-content__block-count-prev',
		function (e) {
			e.preventDefault()
			var $prev = $('.catalog-content__block-count-item-active').prev()
			if ($prev.hasClass('catalog-content__block-count-item')) {
				$prev.trigger('click')
			}
		}
	)

	$('.catalog-content__block-list').on(
		'click',
		'.catalog-content__block-count-next',
		function (e) {
			e.preventDefault()
			var $next = $('.catalog-content__block-count-item-active').next()
			if ($next.hasClass('catalog-content__block-count-item')) {
				$next.trigger('click')
			}
		}
	)

	History.Adapter.bind(window, 'statechange', function (e) {
		var State = History.getState()
		var mHeight = 0
		$('.catalog-content__block-list')
			.addClass('m-load')
			.load(State.url + ' .catalog-content__block-list > *', function () {
				$('.catalog-content__block-list').removeClass('m-load')
				//$(".catalog-content__block-list-items-content-authors").html("<p>New item1</p>");
				$('.catalog-content__block-list-items-content-title').each(function () {
					if ($(this).height() > mHeight) {
						mHeight = $(this).height()
					}
					console.log($(this).height())
				})
				console.log(mHeight)
				$('.catalog-content__block-list-items-content-title').each(function () {
					$(this).height(mHeight)
				})
			})
	})

	$('.catalog-content__block-filter-title').on('click', function (e) {
		e.preventDefault()
		$(this).parent().toggleClass('m-open')
		$(this).parent().toggleClass('m-gkb')
	})

	$('.catalog-content__block-filter-btn').on('click', function (e) {
		var $filter = $('.catalog-content__block-filter')
		$filter.find('input[type="checkbox"]').prop('checked', false)
		$('.js-range-slider')
			.data('ionRangeSlider')
			.update({
				from: $('.js-range-slider').data('min'),
				to: $('.js-range-slider').data('max'),
			})
		$('.shop-select-element:eq(0)').trigger('click')
	})

	$('.rec__slider-item-controls-add').on('click', function (e) {
		e.preventDefault()
		console.log('ffd')
		//e.stopPropagation();
		var $eTarget = $(this)
		if ($eTarget.hasClass('m-in')) {
			$.get(
				'/ajax/del-basket.php?id=' + $eTarget.data('id'),
				false,
				function (data) {
					updateBasketCount()
				}
			)
			$eTarget.removeClass('m-in')
		} else {
			$.get(
				'/ajax/add-basket.php?id=' + $eTarget.data('id'),
				false,
				function (data) {
					updateBasketCount()
				}
			)
			$eTarget.addClass('m-in')
		}
		//	updateBasketCount();
	})

	$('.catalog-content__block-list').on(
		'click',
		'.catalog-content__block-list-items-price-btn',
		function (e) {
			e.preventDefault()
			var $eTarget = $(e.target)
			if (!$eTarget.hasClass('catalog-content__block-list-items-price-btn')) {
				$eTarget = $eTarget.parents(
					'.catalog-content__block-list-items-price-btn'
				)
			}
			if ($eTarget.hasClass('m-in')) {
				$.get(
					'/ajax/del-basket.php?id=' + $eTarget.data('id'),
					false,
					function (data) {
						updateBasketCount()
					}
				)
				$eTarget.removeClass('m-in')
			} else {
				$.get(
					'/ajax/add-basket.php?id=' + $eTarget.data('id'),
					false,
					function (data) {
						updateBasketCount()
					}
				)
				$eTarget.addClass('m-in')
			}
		}
	)

	updateBasketCount()

	$('.header__block-burger').on('click', function (e) {
		e.preventDefault()
		$(this).parent().toggleClass('m-show')
	})

	$(window).on('resize', function () {
		$('.header__block').removeClass('m-show')
	})

	$('.det-header__block-bay-btn').on('click', function (e) {
		e.preventDefault()
		var $eTarget = $(this)
		if ($eTarget.hasClass('m-in')) {
			$.get('/ajax/del-basket.php?id=' + $eTarget.data('id'))
			$eTarget.removeClass('m-in')
		} else {
			$.get(
				'/ajax/add-basket.php?id=' +
					$eTarget.data('id') +
					'&q=' +
					$('.det-header__block-bay-count-sum').val()
			)
			$eTarget.addClass('m-in')
		}
		updateBasketCount()
	})

	$('.det-header__block-bay-count-sum').on('input', function () {
		if ($('.det-header__block-bay-count-sum').val() >= 10000) {
			$('.det-header__block-bay-count-sum').val(10000)
		}
	})

	//$('.basket-item-amount-filed').on('input', function(){ if ($('.basket-item-amount-filed').val() >=10000){$('.basket-item-amount-filed').val(10000);} })

	$('.det-header__block-bay-count-plus').on('click', function (e) {
		e.preventDefault()
		var sum = Number($('.det-header__block-bay-count-sum').val())
		sum++
		if (sum >= 10000) sum = 10000
		$('.det-header__block-bay-count-sum').val(sum)
	})

	$('.det-header__block-bay-count-minus').on('click', function (e) {
		e.preventDefault()
		var sum = Number($('.det-header__block-bay-count-sum').val())
		sum--
		if (sum < 1) sum = 1
		$('.det-header__block-bay-count-sum').val(sum)
	})

	var $moreBtn = $('.det-header__block-add')
	if ($moreBtn.length) {
		$(window)
			.on('resize', function () {
				if ($('.def-header__block-text-wrap').height() > 265) {
					$moreBtn.show()
					$('.det-header__block-text').addClass('m-hidetext')
					$moreBtn.find('p').text('Читать полностью')
				} else {
					$moreBtn.hide()
				}
			})
			.trigger('resize')
		$moreBtn.on('click', function (e) {
			e.preventDefault()
			if ($('.det-header__block-text').hasClass('m-hidetext')) {
				$('.det-header__block-text').removeClass('m-hidetext')
				$moreBtn.find('p').text('Скрыть')
			} else {
				$('.det-header__block-text').addClass('m-hidetext')
				$moreBtn.find('p').text('Читать полностью')
			}
		})
	}

	var $defPhotos = $('.det-header__photo-items'),
		defPhotosInterval = null
	if ($defPhotos.length) {
		$defPhotos.on('click', function (e) {
			e.preventDefault()
			if ($(this).index() != 0) {
				clearInterval(defPhotosInterval)
				$(this).prependTo($(this).parent())
				$defPhotos = $('.det-header__photo-items')
				defPhotosInterval = setInterval(function () {
					$defPhotos.last().trigger('click')
				}, 5000)
			}
		})
		clearInterval(defPhotosInterval)
		defPhotosInterval = setInterval(function () {
			$defPhotos.last().trigger('click')
		}, 5000)
	}

	var $reviewsItems = $('.det-content__block-review-items-info')

	if ($reviewsItems.length) {
		$(window)
			.on('resize', function () {
				$reviewsItems.each(function () {
					if (
						$(this)
							.find('.det-content__block-review-items-text-wrap')
							.height() > 84
					) {
						$(this).find('.det-content__block-review-items-btn').show()
						$(this)
							.find('.det-content__block-review-items-text')
							.addClass('m-hidetext')
						$(this)
							.find('.det-content__block-review-items-btn')
							.find('p')
							.text('Читать полностью')
					} else {
						$(this).find('.det-content__block-review-items-btn').hide()
					}
				})
			})
			.trigger('resize')

		$reviewsItems.each(function () {
			var $this = $(this)
			$this
				.find('.det-content__block-review-items-btn')
				.on('click', function (e) {
					e.preventDefault()
					if (
						$this
							.find('.det-content__block-review-items-text')
							.hasClass('m-hidetext')
					) {
						$this
							.find('.det-content__block-review-items-text')
							.removeClass('m-hidetext')
						$this
							.find('.det-content__block-review-items-btn')
							.find('p')
							.text('Скрыть')
					} else {
						$this
							.find('.det-content__block-review-items-text')
							.addClass('m-hidetext')
						$this
							.find('.det-content__block-review-items-btn')
							.find('p')
							.text('Читать полностью')
					}
				})
		})
	}

	$('.js-rating').each(function () {
		var $inp = $(this).find('input'),
			$svg = $(this).find('svg')

		$svg
			.find('path')
			.on('mouseenter', function () {
				$svg.removeClass('m-hover').removeClass('m-rhover')
				$(this).parent().addClass('m-hover')
				var $prev = $(this).parent().prev()
				while ($prev.length) {
					$prev.addClass('m-hover')
					$prev = $prev.prev()
				}
				var $next = $(this).parent().next()
				while ($next.length) {
					$next.addClass('m-rhover')
					$next = $next.next()
				}
			})
			.on('click', function () {
				$svg.removeClass('m-active')
				$inp.val($svg.index($(this).parent()) + 1)
				$(this).parent().addClass('m-active')
				var $prev = $(this).parent().prev()
				while ($prev.length) {
					$prev.addClass('m-active')
					$prev = $prev.prev()
				}
			})
		$(this)
			.find('span')
			.on('mouseout', function () {
				$svg.removeClass('m-hover').removeClass('m-rhover')
			})
	})

	$('.det-content__block-reviews-btn').on('click', function (e) {
		e.preventDefault()
		var $form = $('.det-content__block-review-form')
		if ($form.is(':visible')) {
			$form.hide()
		} else {
			$form.show()
		}
	})

	$('.det-content__block-review-form').on('submit', function (e) {
		e.preventDefault()
		if (
			$("input[name='name']").val().trim() === '' ||
			$("input[name='contact']").val().trim() === '' ||
			$("textarea[name='msg']").val().trim() === ''
		) {
			console.log('error')
			$("<p class='error_com'>Введите корректные данные</p>").insertBefore(
				'.det-content__block-review-form'
			)
		} else {
			$('.error_com').remove()
			$.post('/ajax/review-add.php', $(this).serialize())
			$(this).addClass('m-end')

			$('.det-content__block-reviews-btn').hide()
		}
	})

	var addSliderSwiper = null
	var addSliderByCat = function (id) {
		if (addSliderSwiper != null) addSliderSwiper.destroy()
		$('.shop__block-slider').remove()
		$.get('/ajax/items.php?cat=' + id, function (html) {
			$(html).insertAfter($('.shop-select-item'))
			addSliderSwiper = new Swiper('.shop__block-slider .swiper', {
				navigation: {
					nextEl: '.shop__block-slider .swiper-controls .swiper-button-next',
					prevEl: '.shop__block-slider .swiper-controls .swiper-button-prev',
				},
				pagination: {
					el: '.shop__block-slider .swiper-controls .swiper-pagination',
				},
				mousewheel: !0,
				keyboard: !0,
				slidesPerView: 5,
				spaceBetween: 40,
				breakpoints: {
					1200: {
						slidesPerView: 5,
						spaceBetweenSlides: 40,
					},
					950: {
						slidesPerView: 4,
						spaceBetweenSlides: 0,
					},
					650: {
						slidesPerView: 3,
						spaceBetweenSlides: 0,
					},
					0: {
						slidesPerView: 2,
						spaceBetweenSlides: 0,
					},
				},
			})
		})
	}

	$('#shopList').each(function () {
		var $shopList = $(this)
		$shopList.css('display', 'none')

		$shopList.after(
			'<div class="shop-select-item"><div class="shop-select-placeholder">'.concat(
				$shopList.children('option').eq(0).text(),
				'</div><div class="shop-select-block display-n"><div id="listConstructorElementshopList" class="shop-select-wrapper"></div></div></div></div>'
			)
		)
		var e = $shopList.children('option').length

		addSliderByCat($shopList.children('option').eq(0).attr('value'))

		for (var t = 0; t < e; t++) {
			var _e2 = $('#shopList').children('option').eq(t).val(),
				a = document.createElement('button')

			a.classList.add('shop-select-element'),
				(a.id = 'shop-select-element-'.concat(t + 1)),
				(a.innerHTML = ''.concat(
					$('#shopList').children('option').eq(t).text()
				)),
				document
					.getElementById('listConstructorElementshopList')
					.appendChild(a),
				$('#shop-select-element-'.concat(t + 1)).attr('value', ''.concat(_e2)),
				$('#shop-select-element-'.concat(t + 1)).attr('type', 'button')
		}

		$('#shop-select-element-0').css('display', 'none'),
			$('.shop-select-item').on('click', function () {
				$('.shop-select-block').toggleClass('display-n'),
					$('.shop-select-item').toggleClass('shop-select-item-active')
			}),
			$('.shop-select-element').on('click', function () {
				var e = this.id,
					t = $('#'.concat(e)).val()
				$('.shop-select-placeholder').html($(this).text())
				var a = $('.shop__block .containers ').children(
					'.shop__block-slider'
				).length

				addSliderByCat(t)
			})
	})
})

function updateBasketCount() {
	$.get('/ajax/count-basket.php', function (r) {
		$('.header__block-contact-item-basket').text(r)
	})
}

$(document).ready(function () {
	// var mHeight = 0;

	//	$("#headerGalleryMenu").click(function () {
	//		if ($(window).width() < 1025) {
	//			$(".header__block-list-item-add").toggleClass("display-n");
	//			$(".header__block-list-item-add").toggleClass("changepos");
	//			$(".header__block-list-item-add").parent().find("a").eq(0).toggleClass("gjk3");
	//		  }
	//
	//	});

	console.log('tes')
	$('.catalog-content__block-list-items-content-title').each(function () {
		if ($(this).height() > mHeight) {
			mHeight = $(this).height()
		}
		console.log($(this).height())
	})
	console.log(mHeight)
	$('.catalog-content__block-list-items-content-title').each(function () {
		$(this).height(mHeight)
	})
	/*
window.addEventListener('popstate', function (event) {
	// Log the state data to the console
	console.log(event.state);
});


window.onpopstate = function (event) {
  if (event.state) {
    // history changed because of pushState/replaceState
	console.log("state changed");
  } else {
    // history changed because of a page load
console.log("state changed2");
$(".catalog-content__block-list-items-content-authors").html("<p>32Works</p>");
  }
}*/

	var mHeight1 = 0

	$('.det-content__rec-list .det-content__rec-items').each(function () {
		if ($(this).height() > mHeight1) {
			mHeight1 = $(this).height()
		}
	})
	console.log(mHeight1)
	$('.det-content__rec-list .det-content__rec-items').each(function () {
		//$(this).height(mHeight1 + 38);
		$(this).height(130)
	})

	$(document).on('click', '.load_more', function () {
		var targetContainer = $('.loadmore_wrap'), //  Контейнер, в котором хранятся элементы
			url = $('.load_more').attr('data-url') //  URL, из которого будем брать элементы
		if (url !== undefined) {
			$.ajax({
				type: 'GET',
				url: url,
				dataType: 'html',
				success: function (data) {
					//  Удаляем старую навигацию
					$('.load_more').remove()
					var elements = $(data).find('.loadmore_item'), //  Ищем элементы
						pagination = $(data).find('.load_more') //  Ищем навигацию
					targetContainer.append(elements) //  Добавляем посты в конец контейнера
					targetContainer.append(pagination) //  добавляем навигацию следом
				},
			})
		}
	})

	var changeBasketCount = function (e) {
		var val = Number($(this).val())
		if (!val || val < 0 || val > $(this).attr('max')) {
			console.log(val)
			$(this)
				.val(!val || val < 0 ? 1 : $(this).attr('max'))
				.trigger('change')
		}
	}
	setInterval(function () {
		$('.basket-item-amount-filed:not(.activated)')
			.addClass('activated')
			.on('keyup', changeBasketCount)
			.on('change', changeBasketCount)
	}, 100)
})

$('#headerGalleryMenu').hover(() => {
	$('.header__block-list-item-add').toggleClass('display-n')
})
$('.header__block-list-item-add').hover(() => {
	$('.header__block-list-item-add').removeClass('display-n')
})

$(() => {
	if (window.innerWidth <= 1024) {
		$('#headerGalleryMenu').hover(() => {
			$('.header__block-list-item-add').removeClass('display-n')
		})
		$('.header__block-list-item-add').removeClass('display-n')
	}
})

$(() => {
	setInterval(() => {
		if (window.innerWidth > 1200) {
			if ($('.shop__block-slider .swiper-slide').length <= 5) {
				$('.shop__block-slider .swiper-controls').css('opacity', '0')
			} else {
				$('.shop__block-slider .swiper-controls').css('opacity', '1')
			}
		}
		if (window.innerWidth <= 1200) {
			if ($('.shop__block-slider .swiper-slide').length <= 4) {
				$('.shop__block-slider .swiper-controls').css('opacity', '0')
			} else {
				$('.shop__block-slider .swiper-controls').css('opacity', '1')
			}
		}
		if (window.innerWidth <= 950) {
			if ($('.shop__block-slider .swiper-slide').length <= 3) {
				$('.shop__block-slider .swiper-controls').css('opacity', '0')
			} else {
				$('.shop__block-slider .swiper-controls').css('opacity', '1')
			}
		}
		if (window.innerWidth <= 650) {
			if ($('.shop__block-slider .swiper-slide').length <= 2) {
				$('.shop__block-slider .swiper-controls').css('opacity', '0')
			} else {
				$('.shop__block-slider .swiper-controls').css('opacity', '1')
			}
		}
	}, 500)
})
