$(function(){
	$('.no-js').removeClass('no-js');

	var menuButtonEL = $('.js-menu-button');
	var topRowEL = $('.js-top-row');

	menuButtonEL.on('click', function(){

		topRowEL.toggleClass('menu-opened');

		var isMenuExpanded = (menuButtonEL.attr('aria-expanded') === 'true');
		menuButtonEL.attr('aria-expanded', String(!isMenuExpanded));

		if (isMenuExpanded) {
			menuButtonEL.attr('aria-label', 'Развернуть меню');
		} else {
			menuButtonEL.attr('aria-label', 'Свернуть меню');
		}
	});
})