$(document).ready(function () {
	// слайдер карточек
	const benefitsSlider = $('.benefiits-block')
	benefitsSlider.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		margin: 15,
		autoplaySpeed: 1000,
		responsive: {
			0: {
				items: 1,
			},

			768: {
				items: 2,


			},
			992: {
				items: 3,

			}
		}

	});

	// destroy слайдера на десктопах

	if ($(window).width() > 991) {
		benefitsSlider.trigger('destroy.owl.carousel');
	}
	$(window).resize(function () {
		if ($(window).width() > 991) {
			benefitsSlider.trigger('destroy.owl.carousel');
		}
	});

	// HEADER SLIDER
	let mainSlider = $('.header-slider__wrapper');
	mainSlider.owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		navText: ["<span class='arrow-left'><i class='fas fa-chevron-left'></i></span>", "<span class='arrow-right'><i class='fas fa-chevron-right'></i></span>"],
		navSpeed: 1000,
		smartSpeed: 1000,
		mouseDrag: false,
		autoplay: true,
		autoplaySpeed: 1000,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',

	});
	// вопрос-ответ слайдер
	let faqSlider = $('.faq-content');
	faqSlider.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplaySpeed: 1000,
		// responsive: {
		// 	0: {
		// 		items: 1,
		// 	},

		// 	768: {
		// 		stagePadding: 40,

		// 	}
		// }
	});
	// destroy слайдера на десктопах

	if ($(window).width() > 991) {
		faqSlider.trigger('destroy.owl.carousel');
	}
	$(window).resize(function () {
		if ($(window).width() > 991) {
			faqSlider.trigger('destroy.owl.carousel');
		}
	});
	//Определить положение для пагинации слайдера в шапке
	const windowWidth = window.innerWidth;
	const containerBlock = document.querySelector('.container').offsetWidth;
	const sliderDots = document.querySelector('.header-slider__wrapper .owl-dots');
	const sliderNav = document.querySelector('.header-slider__wrapper .owl-nav');

	if (window.innerWidth > 1199) {
		const dotsRight = (windowWidth - containerBlock) / 2 + 40;
		const navRight = (windowWidth - containerBlock) / 2;
		sliderDots.style.right = dotsRight + 'px';
		sliderNav.style.right = navRight + 'px';
	}

	// Открытие моб меню по клику на гамбургер
	const menuToggle = document.querySelector('.menu-toggle');
	const mobMenu = document.querySelector('#mobile-menu');
	const bodyEl = document.body;
	const overlayBlock = document.querySelector('#overlay');
	const btnShowSearchInput = document.querySelector('#search-button');
	const logoBlock = document.querySelector('.logo-block');
	const headerSearchForm = document.querySelector('#search-form');
	const searchResultBlock = document.querySelector('#search-result');
	const searchIcons = document.querySelectorAll('#search-button svg');

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

			// скрыть меню поиска при клике по гамбургеру
			headerSearchForm.classList.remove('visible');
			searchResultBlock.classList.remove('visible');
			logoBlock.classList.remove('noborder');
			logoBlock.classList.remove('hidden');
			for (let i = 0; i < searchIcons.length; i++) {
				searchIcons[0].classList.add('visible');
				searchIcons[1].classList.remove('visible');
			}


		}
	});

	// показать строку поиска в шапке
	btnShowSearchInput.addEventListener('click', function (e) {
		e.preventDefault();

		if (headerSearchForm.classList.contains('visible')) {
			headerSearchForm.classList.remove('visible');
			logoBlock.classList.remove('noborder');
			bodyEl.classList.remove('noscroll');
			searchResultBlock.classList.remove('visible');
			logoBlock.classList.remove('hidden');

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
		for (item of searchIcons) {
			item.classList.toggle('visible');
		}
	});

})