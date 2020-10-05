$(document).ready(function () {

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
})