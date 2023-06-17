$.getJSON("https://api.ipify.org?format=json", function(data) {
		
		// Setting text of element P with id gfg
		$("#ip").html(data.ip);
	})