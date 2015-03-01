<?php
	// This function returns an array of fortunes
	header('Content-Type: application/json');
  	$noFortunes = 6;	
  	$data = array();
  
  
	for ($x=0; $x<$noFortunes; $x++) {
		$fortune = shell_exec('/usr/games/fortune -s'); // Execute 'fortune' command on the server
		$fortune = str_replace("\n","<br>",$fortune); // Replace newline
		$fortune = str_replace("\t","<nbsp><nbsp><nbsp>",$fortune); // Replace tabs		
		array_push($data, $fortune);
	}  
  	echo json_encode($data); 
?>