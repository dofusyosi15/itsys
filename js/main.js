$(document).ready(function()
{

	// Setup variables
	$body = $('body');

    //FadeIn all sections
	$body.imagesLoaded( function() {
		setTimeout(function() {
      //Cargado
			 document.body.className = 'loaded';
		}, 800);
	});

});

function removeActive() {
	$('.active').removeClass();
}

function menuSelected(menuActive) {
	removeActive();
	$('#' + menuActive)[0].className = 'active';
}
