document.addEventListener('DOMContentLoaded', () => {
	/* Burger */
	const burgerOpen = () => {
		const headerBg = document.querySelector('.header__bg'),
			burger = document.querySelector('.burger .burger__item'),
			nav = document.querySelector('.nav'),
			body = document.getElementsByTagName('body');

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
		}
	};
	burgerOpen();

	/* Accordion */
	const accordion = document.querySelectorAll('.accordion__items'),
		arrow = document.querySelectorAll('.accordion__arrow'),
		subtitle = document.querySelectorAll('.accordion__subtitle');

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





})