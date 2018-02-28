custom = {
	
	search_error: function() {
        $.notify({
            icon: 'warning',
            message: 'Sorry, the search functionality is not yet implemented.'

        }, {
			type: 'info',
            timer: 10,
            placement: {
                from: 'top',
                align: 'center'
            }
        });
    },
	
	toggle_visibility: function(id) {
		if (document.getElementById(id).style.display === 'none') {
			document.getElementById(id).style.display = 'block'
		}
		else document.getElementById(id).style.display = 'none';
	}
  
}
