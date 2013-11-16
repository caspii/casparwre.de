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
	$("#fortune-btn").html("Again &raquo;");
	$("#fortune").hide();
	$("#fortune").html(fortunes[clicks]);
	$("#fortune").fadeIn();
	
	if (clicks==fortunes.length) {
		$("#fortune").html("Enough");
		$("#fortune-btn").html("Sorry &raquo;");
		$("#fortune-btn").attr("disabled", true);
	}	
	
}