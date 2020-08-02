<?php

$API_KEY = "62458f64"; // API key (string) provided by Open Movie DataBase (i.e., "ab123456")

session_start(); // Connect to the existing session

processPageRequest(); // Call the processPageRequest() function

// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE ABOVE THIS LINE

function displaySearchForm()
{
	require_once './templates/search_form.html';
}

function displaySearchResults($searchString)
{	
	$results = file_get_contents('http://www.omdbapi.com/?apikey='.$GLOBALS['API_KEY'].'&s='.urlencode($searchString).'&type=movie&r=json');
	$resultsArray = json_decode($results, true)["Search"];
	require_once './templates/results_form.html';
}

function processPageRequest()
{
	// test if the user's Display Name value is stored in the session
	if (isset($_SESSION['displayName'])) {
		// test whether any $_POST data was passed to the page and the $_POST['keyword'] variable is set
		if (!empty($_POST) && isset($_POST['keyword'])) {
			// call the displaySearchResults($searchString) function with the $_POST['keyword'] value passed
			displaySearchResults($_POST['keyword']);
		}
		// else ... 
		else {
			// call the displaySearchForm() function
			displaySearchForm();
		}
	}
	// if the user's Display Name is not stored in the session ...
	else {
		// redirect the browser to the logon.php page
		header('Location: ./logon.php');
	}
}

?>
