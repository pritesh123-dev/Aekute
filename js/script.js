!(function (e) {
	'use strict';
	new WOW().init();
	var t = e('#main-nav'),
		s = {
			disableAt: !1,
			customToggle: e('.toggle'),
			levelSpacing: 10,
			navTitle: 'Aekute Technologies',
			levelTitles: !0,
			levelTitles: !0,
			labelClose: !1,
			levelTitleAsBack: !0,
			levelOpen: 'expand',
			closeOnClick: !0,
			insertClose: !0,
			closeActiveLevel: !0,
			insertBack: !0,
		};
	t.hcOffcanvasNav(s);
	function a() {
		e(window).scrollTop() >= 80
			? e('.navfix').addClass('sticky')
			: e('.navfix').removeClass('sticky');
	}
	e(function () {
		e(window).scroll(a), a();
	}),
		e('li.sbmenu').hover(
			function () {
				e(this).addClass('hover');
			},
			function () {
				e(this).removeClass('hover');
			}
		),
		e('.video-link').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
		}),
		e('[data-toggle="tooltip"]').tooltip(),
		e('.service-card-prb').owlCarousel({
			items: 4,
			loop: !0,
			autoplay: !0,
			margin: 20,
			nav: !1,
			dots: !1,
			autoplayTimeout: 3500,
			autoplayHoverPause: !0,
			smartSpeed: 2e3,
			responsive: {
				0: {
					items: 1,
				},
				520: {
					items: 2,
				},
				768: {
					items: 3,
				},
				1200: {
					items: 3,
				},
				1400: {
					items: 3,
				},
				1600: {
					items: 3,
				},
			},
		}),
		e('.testimonial-card-a').owlCarousel({
			items: 1,
			loop: !0,
			autoplay: !0,
			autoplayTimeout: 6e3,
			autoplayHoverPause: !0,
			smartSpeed: 500,
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 1,
				},
				1024: {
					items: 1,
				},
				1400: {
					items: 1,
				},
			},
		}),
		e('.video-testimonials').owlCarousel({
			items: 2,
			nav: !1,
			dots: !1,
			autoplay: !1,
			autoplayTimeout: 3500,
			smartSpeed: 1500,
			margin: 20,
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
				},
				1024: {
					items: 2,
				},
				1400: {
					items: 2,
				},
			},
		}),
		e('.project-screens').owlCarousel({
			items: 4,
			loop: !0,
			autoplay: !0,
			margin: 20,
			nav: !1,
			dots: !1,
			autoplayTimeout: 3500,
			autoplayHoverPause: !0,
			smartSpeed: 2e3,
			responsive: {
				0: {
					items: 1,
				},
				520: {
					items: 2,
				},
				768: {
					items: 3,
				},
				1200: {
					items: 3,
				},
				1400: {
					items: 3,
				},
				1600: {
					items: 3,
				},
			},
		}),
		e('.porto-slide').owlCarousel({
			items: 1,
			loop: !0,
			autoplay: !0,
			margin: 10,
			nav: !1,
			dots: !0,
			stagePadding: 50,
			autoplayTimeout: 35e4,
			autoplayHoverPause: !0,
			smartSpeed: 2e3,
			responsive: {
				0: {
					items: 1,
					stagePadding: 0,
				},
				520: {
					items: 1,
					stagePadding: 0,
				},
				768: {
					items: 1,
					stagePadding: 0,
				},
				1200: {
					items: 1,
				},
				1400: {
					items: 1,
				},
				1600: {
					items: 1,
				},
			},
		}),
		e('.single-slide').owlCarousel({
			items: 1,
			loop: !0,
			autoplay: !0,
			margin: 10,
			nav: !1,
			dots: !0,
			stagePadding: 100,
			autoplayTimeout: 3500,
			autoplayHoverPause: !0,
			smartSpeed: 2e3,
			responsive: {
				0: {
					items: 1,
					stagePadding: 0,
				},
				520: {
					items: 1,
					stagePadding: 0,
				},
				768: {
					items: 1,
					stagePadding: 0,
				},
				1200: {
					items: 1,
				},
				1400: {
					items: 1,
				},
				1600: {
					items: 1,
				},
			},
		}),
		e('.bages-slider').owlCarousel({
			items: 4,
			loop: !0,
			autoplay: !0,
			centre: !0,
			margin: 20,
			nav: !1,
			dots: !1,
			autoplayTimeout: 4e3,
			autoplayHoverPause: !0,
			smartSpeed: 2e3,
			responsive: {
				0: {
					items: 2,
				},
				520: {
					items: 3,
				},
				768: {
					items: 3,
				},
				1200: {
					items: 3,
				},
				1400: {
					items: 4,
				},
				1600: {
					items: 4,
				},
			},
		}),
		e('.logo-weworkfor').owlCarousel({
			items: 4,
			loop: !0,
			autoplay: !0,
			margin: 10,
			nav: !1,
			dots: !1,
			autoplayTimeout: 1800,
			autoplayHoverPause: !1,
			smartSpeed: 2e3,
			responsive: {
				0: {
					items: 3,
				},
				520: {
					items: 3,
				},
				768: {
					items: 4,
				},
				1200: {
					items: 4,
				},
				1400: {
					items: 5,
				},
				1600: {
					items: 6,
				},
			},
		}),
		e('.testimonial-card-b').owlCarousel({
			items: 1,
			loop: !0,
			autoplay: !0,
			autoplayTimeout: 3e3,
			autoplayHoverPause: !0,
			dots: !0,
			dotsContainer: '#testimonials-avatar',
			smartSpeed: 500,
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 1,
				},
				1024: {
					items: 1,
				},
				1400: {
					items: 1,
				},
			},
		}),
		e('.zoomowl').owlCarousel({
			stagePadding: 200,
			loop: !0,
			margin: 10,
			nav: !1,
			items: 1,
			lazyLoad: !0,
			responsive: {
				0: {
					items: 1,
					stagePadding: 60,
				},
				600: {
					items: 1,
					stagePadding: 100,
				},
				1e3: {
					items: 1,
					stagePadding: 200,
				},
				1200: {
					items: 1,
					stagePadding: 250,
				},
				1400: {
					items: 1,
					stagePadding: 300,
				},
				1600: {
					items: 1,
					stagePadding: 350,
				},
				1800: {
					items: 1,
					stagePadding: 400,
				},
			},
		}),
		e('.owl-review-slider').owlCarousel({
			items: 1,
			loop: !0,
			autoplay: !0,
			autoplayTimeout: 3e3,
			autoplayHoverPause: !0,
			dots: !0,
			margin: 15,
			dotsContainer: '#testimonials-avatar',
			smartSpeed: 500,
			responsive: {
				0: {
					items: 1,
				},
				768: {
					items: 2,
				},
				1024: {
					items: 2,
				},
				1400: {
					items: 3,
				},
			},
		}),
		e('.counter').counterUp({
			delay: 10,
			time: 2500,
		}),
		e.scrollUp({
			animation: 'fade',
			scrollImg: {
				active: !0,
				type: 'background',
			},
		}),
		e('.card-list').imagesLoaded(function () {
			var t = e('.card-list').isotope({
				itemSelector: '.single-card-item',
				percentPosition: !0,
				masonry: {
					columnWidth: '.grid-sizer',
				},
			});
			e('.filter-menu').on('click', 'li', function () {
				var s = e(this).attr('data-filter');
				t.isotope({
					filter: s,
				});
			});
		}),
		e('.filter-menu li').on('click', function (t) {
			e(this).siblings('.is-checked').removeClass('is-checked'),
				e(this).addClass('is-checked'),
				t.preventDefault();
		}),
		e('[data-background]').each(function () {
			e(this).css(
				'background-image',
				'url(' + e(this).attr('data-background') + ')'
			);
		});
})(jQuery);
