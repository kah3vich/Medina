$('.catalog-content__block-filter-titles').on('click', () => {
	$('.catalog-content__block-filter-titles svg').toggleClass('rotate-180')
})

let activeContentCatalog = 0
let elementContentCountCatalog = 4

$('#catalogCatalogNext').on('click', function () {
	changeSlideCatalog('next')
})

$('#catalogCatalogPrev').on('click', function () {
	changeSlideCatalog('prev')
})

$('#catalogCatalogButton-1').on('click', function () {
	changeSlideCatalog(0)
})
$('#catalogCatalogButton-2').on('click', function () {
	changeSlideCatalog(1)
})
$('#catalogCatalogButton-3').on('click', function () {
	changeSlideCatalog(2)
})
$('#catalogCatalogButton-4').on('click', function () {
	changeSlideCatalog(3)
})

function changeSlideCatalog(id) {
	if (id === 'next') {
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
	if (activeContentCatalog == 0) {
		$('#catalogCatalogButton-1').addClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-2').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-3').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-4').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogBlock-1').removeClass('display-n')
		$('#catalogCatalogBlock-2').addClass('display-n')
		$('#catalogCatalogBlock-3').addClass('display-n')
		$('#catalogCatalogBlock-4').addClass('display-n')
	}
	if (activeContentCatalog == 1) {
		$('#catalogCatalogButton-2').addClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-1').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-3').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-4').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogBlock-2').removeClass('display-n')
		$('#catalogCatalogBlock-1').addClass('display-n')
		$('#catalogCatalogBlock-3').addClass('display-n')
		$('#catalogCatalogBlock-4').addClass('display-n')
	}
	if (activeContentCatalog == 2) {
		$('#catalogCatalogButton-3').addClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-2').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-1').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-4').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogBlock-3').removeClass('display-n')
		$('#catalogCatalogBlock-2').addClass('display-n')
		$('#catalogCatalogBlock-1').addClass('display-n')
		$('#catalogCatalogBlock-4').addClass('display-n')
	}
	if (activeContentCatalog == 3) {
		$('#catalogCatalogButton-4').addClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-3').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-2').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-1').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogBlock-4').removeClass('display-n')
		$('#catalogCatalogBlock-3').addClass('display-n')
		$('#catalogCatalogBlock-2').addClass('display-n')
		$('#catalogCatalogBlock-1').addClass('display-n')
	}
	if (id == 0) {
		activeContentCatalog = 0
		$('#catalogCatalogButton-1').addClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-2').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-3').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-4').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogBlock-1').removeClass('display-n')
		$('#catalogCatalogBlock-2').addClass('display-n')
		$('#catalogCatalogBlock-3').addClass('display-n')
		$('#catalogCatalogBlock-4').addClass('display-n')
	}
	if (id == 1) {
		activeContentCatalog = 1
		$('#catalogCatalogButton-2').addClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-1').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-3').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-4').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogBlock-2').removeClass('display-n')
		$('#catalogCatalogBlock-1').addClass('display-n')
		$('#catalogCatalogBlock-3').addClass('display-n')
		$('#catalogCatalogBlock-4').addClass('display-n')
	}
	if (id == 2) {
		activeContentCatalog = 2
		$('#catalogCatalogButton-3').addClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-2').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-1').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-4').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogBlock-3').removeClass('display-n')
		$('#catalogCatalogBlock-2').addClass('display-n')
		$('#catalogCatalogBlock-1').addClass('display-n')
		$('#catalogCatalogBlock-4').addClass('display-n')
	}
	if (id == 3) {
		activeContentCatalog = 3
		$('#catalogCatalogButton-4').addClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-3').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-2').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogButton-1').removeClass(
			'catalog-content__block-count-item-active'
		)
		$('#catalogCatalogBlock-4').removeClass('display-n')
		$('#catalogCatalogBlock-3').addClass('display-n')
		$('#catalogCatalogBlock-2').addClass('display-n')
		$('#catalogCatalogBlock-1').addClass('display-n')
	}
}

$('#headerGalleryMenu').hover(() => {
	$('.header__block-list-item-add').toggleClass('display-n')
})
$('.header__block-list-item-add').hover(() => {
	$('.header__block-list-item-add').removeClass('display-n')
})
$(() => {
	if (window.innerWidth <= 1024) {
		$('.header__block-list-item-add').removeClass('display-n')
		$('#headerGalleryMenu').hover(() => {
			$('.header__block-list-item-add').removeClass('display-n')
		})
	}
})

// ------------------------------------
