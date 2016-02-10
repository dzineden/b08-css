$(document).ready(function () {

	$('.open-modal').click(function (e) {
		e.preventDefault();
		$('.modal').slideToggle();
	});


	$('.close').click(function () {
		$('.modal').slideToggle();
	});
});
