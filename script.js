const navigationButtons = document.querySelectorAll('.nav-button');

navigationButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		const target = document.querySelector(button.getAttribute('href'));

		if (!target) {
			return;
		}

		event.preventDefault();
		navigationButtons.forEach((item) => {
			item.classList.remove('is-selected');
			item.removeAttribute('aria-current');
		});

		button.classList.add('is-selected');
		button.setAttribute('aria-current', 'page');
		target.setAttribute('tabindex', '-1');
		target.focus({ preventScroll: true });
		target.scrollIntoView({
			behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
			block: 'start'
		});
	});
});
