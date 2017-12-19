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

function homeView() {
	removeActive();
	$('#dvHome')[0].className = 'active';
}
function nosotrosView() {
	removeActive();
	$('#dvNosotros')[0].className = 'active';
}

function catalogoView() {
	removeActive();
	$('#dvCatalogo')[0].className = 'active';
}

function contactoView() {
	removeActive();
	$('#dvContacto')[0].className = 'active';
}
