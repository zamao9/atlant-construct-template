document.addEventListener('DOMContentLoaded', () => {
	/* Burger */
	const burgerOpen = () => {
		const headerBg = document.querySelector('.header__bg'),
			burger = document.querySelector('.burger .burger__item'),
			nav = document.querySelector('.nav'),
			body = document.getElementsByTagName('body'),
			links = document.querySelectorAll('.nav__items a');

		if (burger) {
			burger.addEventListener('click', (e) => {
				headerBg.classList.toggle('active');
				nav.classList.toggle('active');
				body[0].classList.toggle('block');
				e.currentTarget.classList.toggle('active');
			});

			headerBg.addEventListener('click', (e) => {
				burger.classList.remove('active');
				nav.classList.remove('active');
				body[0].classList.remove('block');
				e.currentTarget.classList.remove('active');
			});

			/* Close Nav On Click Links */
			for (let i = 0; links.length > i; ++i) {
				links[i].addEventListener('click', () => {
					headerBg.classList.remove('active');
					nav.classList.remove('active');
					body[0].classList.remove('block');
					burger.classList.remove('active');
				})
			}

		}
	};
	burgerOpen();

	

	/* Up-Home Show */
	const upToHome = document.querySelector('.up-home'),
		home = document.querySelector('.header__container');
	window.onscroll = () => {
		const scrollY = window.scrollY;

		if (scrollY > 100) {
			upToHome.classList.add('active')
		} else {
			upToHome.classList.remove('active')
		}
	}
	window.addEventListener('resize', () => {
		onscroll()
	})
	window.addEventListener('load', () => {
		onscroll()
	})

	/* Accordion */
	const accordion = document.querySelectorAll('.accordion__items');

	if (window.innerWidth < 992) {
		accordion.forEach((el) => {
			el.addEventListener('click', (e) => {
				const self = e.currentTarget,
					control = self.querySelector('.accordion__head'),
					content = self.querySelector('.accordion-body');
	
				self.classList.toggle('open')
		
				if (self.classList.contains('open')) {
					control.setAttribute('aria-expanded', true)
					content.setAttribute('aria-hidden', false)
					content.style.maxHeight = content.scrollHeight + 'px'
					content.style.opacity = '1'
				} else {
					control.setAttribute('aria-expanded', false)
					content.setAttribute('aria-hidden', true)
					content.style.maxHeight = null
					content.style.opacity = null
				}
			})
		})
	}
})

/* Scroll */
$(function () {
	$("[data-scroll").click(function (event) {
		event.preventDefault();

		let blockId = $(this).data("scroll"),
			header = document.querySelector(".header");

		let blockOffset = $(blockId).offset().top;

		$("html, body").animate(
			{
				scrollTop: blockOffset,
			},
			900)
		});
	});