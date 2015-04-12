jQuery(document).ready(function($){
	
	// swap link text and slideToggle a specified class
	$('body').on({ click: function(event){
		event.preventDefault();


		var current_link_text = $(this).html();
		var swap_link_text = $(this).attr('data-swap-text');
		var toggle_class = $(this).attr('data-toggle-class');

		// toggle div
		$('.' + toggle_class).slideToggle(500);

		// swap link text
		$(this).html(swap_link_text);
		$(this).attr('data-swap-text', current_link_text);

	}},'.swap_slide');// clicked show/hide more info

});// doc ready
