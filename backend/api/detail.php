<?php
$baseurl = "https://api.spacexdata.com"; 

// Set the content type to JSON
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
    
$method = $_SERVER['REQUEST_METHOD'];

$result = '';

// make api call & get response
switch ($method) {
    case 'GET':{
      
      // Convert data to JSON format
      $result = file_get_contents($baseurl."/v4/company");
        
      // Send the JSON response
      echo $result;
    }break;
    case 'POST':
      break;
}

?>