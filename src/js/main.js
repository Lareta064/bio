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

	// Открытие моб меню по клику на гамбургер
	const menuToggle = document.querySelector('.menu-toggle');
	const mobMenu = document.querySelector('#mobile-menu');
	const bodyEl = document.body;
	const overlayBlock = document.querySelector('#overlay');
	const btnShowSearchInput = document.querySelector('#search-button');
	const logoBlock = document.querySelector('.logo-block');
	const headerSearchForm = document.querySelector('#search-form');
	const searchResultBlock = document.querySelector('#search-result');

	menuToggle.addEventListener('click', function () {
		if (this.classList.contains('active')) {
			this.classList.remove('active');
			mobMenu.classList.remove('active');
			overlayBlock.classList.remove('active');
			bodyEl.classList.remove('noscroll');

		} else {
			this.classList.add('active');
			mobMenu.classList.add('active');
			overlayBlock.classList.add('active');
			bodyEl.classList.add('noscroll');

		}
	});

	// показать строку поиска в шапке
	btnShowSearchInput.addEventListener('click', function (e) {
		e.preventDefault();
		const thisIcons = this.querySelectorAll('#search-button svg');
		if (headerSearchForm.classList.contains('visible')) {
			headerSearchForm.classList.remove('visible');
			logoBlock.classList.remove('noborder');
			bodyEl.classList.remove('noscroll');
			searchResultBlock.classList.remove('visible');
			if (window.innerWidth < 768) {
				logoBlock.classList.remove('hidden');
			}


		} else {
			headerSearchForm.classList.add('visible');
			logoBlock.classList.add('noborder');
			searchResultBlock.classList.add('visible');
			bodyEl.classList.add('noscroll');

			if (window.innerWidth < 768) {
				logoBlock.classList.add('hidden');
				mobMenu.classList.remove('active');
				menuToggle.classList.remove('active');
				overlayBlock.classList.remove('active');


			}

		}
		for (item of thisIcons) {
			item.classList.toggle('visible');
		}
	});

})