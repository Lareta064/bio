$(document).ready(function() {
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

})
