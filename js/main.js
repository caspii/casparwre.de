var clicks=0;
var fortunes;	

$(document).ready(function(){
	
	console.log("hello world!")
	$("#fortune-btn").hide();
		
	// Get arrary of fortunes
	$.get( "fortune.php", function( data ) {
		fortunes = data;
		$("#fortune").html(fortunes[0]);
		$("#fortune-btn").show();
	}, "json");

	$("#fortune-btn").click(changeFortune);
});


function changeFortune() {
	clicks++;
	console.log("clicks=" + clicks );
	
	$("#fortune").fadeOut("fast", function() {
		if (clicks==fortunes.length) {
			$("#fortune").html("Enough");
			$("#fortune-btn").html("OK &raquo;");
			$("#fortune-btn").attr("disabled", true);
			$("#fortune").fadeIn("slow");
		} else {

			$("#fortune").html(fortunes[clicks]);
			$("#fortune").fadeIn("slow");
	   	$("#fortune-btn").html("Again &raquo;");
		}
	});
	
	
	
}