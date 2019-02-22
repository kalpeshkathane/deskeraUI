<?php 
	$outputResult = array();
	if($output){
		if($output['resCode'] == '0000'){
			$outputResult['response'] = $output['resCodeDesc'];
		}else{
			$outputResult['response'] = 'Something went wrong please try againe later';
		}
	}else{
		$outputResult['error'] = 'Wrong place';
	}	
	echo json_encode($outputResult);
	
?>