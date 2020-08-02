<?php

$EMAIL_ID = 266480228; // 9-digit integer value (i.e., 123456789)

require_once '/home/common/php/dbInterface.php'; // Add database functionality
require_once '/home/common/php/mail.php'; // Add email functionality
require_once '/home/common/php/p4Functions.php'; // Add Project 4 base functions

processPageRequest(); // Call the processPageRequest() function

// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE ABOVE THIS LINE

function authenticateUser($username, $password) 
{
	$dbauth = validateUser($username, $password);
	if (!empty($dbauth)) {
		// start a new session
		session_start();
		// set the session variables
		$_SESSION["userId"] = $dbauth[0];
		$_SESSION["displayName"] = $dbauth[1];
		$_SESSION["emailAddress"] = $dbauth[2];
		return true;

	}
	else {
		return false;
	}	
}

function displayLoginForm($message = "")
{
	require_once './templates/logon_form.html';
}

function processPageRequest()
{
	// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE BELOW THIS LINE
	if(session_status() == PHP_SESSION_ACTIVE)
	{
		session_destroy();
	}
	// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE ABOVE THIS LINE
	
	// check if any $_POST data was passed to the page and if the $_POST['action'] variable is set
	if (!empty($_POST) && isset($_POST['action'])) {
		// check if the $_POST['action'] variable's value is login
		if ($_POST['action'] == 'login') {
			$userauth = authenticateUser($_POST['username'], $_POST['password']);
			if ($userauth) {
				header('Location: index.php');
			}
			else {
				$errmsg = 'User authentication failed, please enter a valid username and password combination';
				displayLoginForm($errmsg);
			}
		}
	}
	else {
		displayLoginForm();
	}
}

?>
