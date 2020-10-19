$(document).ready(function () {
	//слайдер карточек
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



//destroy слайдера на десктопах

if ($(window).width() > 991) {
	benefitsSlider.trigger('destroy.owl.carousel');
}
$(window).resize(function () {
	if ($(window).width() > 991) {
		benefitsSlider.trigger('destroy.owl.carousel');
	}
});


	$('.product-page__slider').owlCarousel({
		items: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		nav: false,		
		loop: true,			
		autoplayHoverPause: true
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
if (sliderDots) {
	console.log(sliderDots);


	if (window.innerWidth > 1199) {
		const dotsRight = (windowWidth - containerBlock) / 2 + 40;
		const navRight = (windowWidth - containerBlock) / 2;
		sliderDots.style.right = dotsRight + 'px';
		sliderNav.style.right = navRight + 'px';
	}
	window.addEventListener('resize', function () {
		if (window.innerWidth > 1199) {
			const dotsRight = (windowWidth - containerBlock) / 2 + 40;
			const navRight = (windowWidth - containerBlock) / 2;
			sliderDots.style.right = dotsRight + 'px';
			sliderNav.style.right = navRight + 'px';
		}
	});
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
if(menuToggle){
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
}
// показать строку поиска в шапке
if(btnShowSearchInput){
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
}

// Кастомный выпадающий список
const selectElements = document.querySelectorAll('.form-select');
if (selectElements) {
	for (let item of selectElements) {


		const selectInput = item.querySelector('input');
		const selectOptions = item.querySelector('.form-select__options');
		const selectArrow = item.querySelector('.form-select__icon');



		selectArrow.addEventListener('click', function () {

			if (selectOptions.classList.contains('active')) {
				this.classList.remove('rotate');
				selectOptions.classList.remove('active');
			} else {
				this.classList.add('rotate');
				selectOptions.classList.add('active');
			}

		});

		//клик по выпадающему списку селекта
		selectOptions.addEventListener('click', function (e) {
			if (e.target.tagName == 'LI') {
				selectInput.value = e.target.textContent;
				this.classList.remove('active');
				selectArrow.classList.remove('rotate');
				// console.log(e.target.textContent)
			}

		});
	}
}
// счетчик количества
const productCounter = document.querySelector('.product-counter');
if (productCounter) {
	const btnPlus = productCounter.querySelector('.product-counter--plus');
	const btnMinus = productCounter.querySelector('.product-counter--minus');
	let inputItem = productCounter.querySelector('input');
	let inputItemValue = +productCounter.querySelector('input').value;

	btnPlus.addEventListener('click', function (e) {

		inputItemValue += 1;
		inputItem.value = inputItemValue;
	});
	btnMinus.addEventListener('click', function (e) {
		if (inputItemValue == 1) {
			inputItemValue = 1;
		} else {
			inputItemValue -= 1;
			inputItem.value = inputItemValue;
		}

	})

}
//accordion Вопрос-Ответ, поворот Иконки
$('.collapse').each(function () {
	$(this).on('show.bs.collapse', function () {
		$(this).siblings('.card-header').children('.accordion-icon').addClass('active');
	});
	$(this).on('hide.bs.collapse', function () {
		$(this).siblings('.card-header').children('.accordion-icon').removeClass('active');
	})
});

//flexSlider
$('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
})