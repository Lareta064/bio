$(document).ready(function () {
	// слайдер карточек
	const benefitsSlider = $('.benefiits-block')
	benefitsSlider.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplaySpeed: 1000,
		responsive: {
			0: {
				items: 1,
			},
			460: {
				items: 2,

			},
			768: {
				items: 3,

			},
			992: {
				items: 4,

			}
		}


	});
	if ($(window).width() > 1200) {
		benefitsSlider.trigger('destroy.owl.carousel');
	}
	$(window).resize(function () {
		if ($(window).width() > 1200) {
			benefitsSlider.trigger('destroy.owl.carousel');
		}
	});



	// показать строку поиска в шапке
	const bodyEl = document.body;
	const btnShowSearchInput = document.querySelector('#search-button');
	const logoBlock = document.querySelector('.logo-block');
	const headerSearchForm = document.querySelector('#search-form');
	const searchResultBlock = document.querySelector('#search-result');
	btnShowSearchInput.addEventListener('click', function (e) {
		e.preventDefault();
		const thisIcons = this.querySelectorAll('#search-button svg');
		if (headerSearchForm.classList.contains('visible')) {
			headerSearchForm.classList.remove('visible');
			logoBlock.classList.remove('noborder');
			bodyEl.classList.remove('noscroll');
			searchResultBlock.classList.remove('visible');


		} else {
			headerSearchForm.classList.add('visible');
			logoBlock.classList.add('noborder');
			searchResultBlock.classList.add('visible');
			bodyEl.classList.add('noscroll');

		}
		for (item of thisIcons) {
			item.classList.toggle('visible');
		}
	});
	// Открытие моб меню по клику на гамбургер
	const menuToggle = document.querySelector('.menu-toggle');
	menuToggle.addEventListener('click', function () {
		if (this.classList.contains('active')) {
			this.classList.remove('active');
			// mobMenu.classList.remove('active');
			// overlayBlock.classList.remove('active');
			bodyEl.classList.remove('noscroll');

		} else {
			this.classList.add('active');
			// mobMenu.classList.add('active');
			// overlayBlock.classList.add('active');
			bodyEl.classList.add('noscroll');

		}
	});
})