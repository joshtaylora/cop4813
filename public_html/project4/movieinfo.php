<?php

session_start(); // Connect to the existing session

require_once '/home/common/php/dbInterface.php'; // Add database functionality
require_once '/home/common/php/p4Functions.php'; // Add Project 4 base functions

processPageRequest(); // Call the processPageRequest() function

function createMessage($movieId)
{
	$movieInfo = getMovieData($movieId);
	
	require_once "/home/common/php/templates/movie_info.html";	
	
}

function processPageRequest()
{
	if (!isset($_SESSION["displayName"]))
	{
		header("Location: logon.php");
	}
	if (!isset($_GET["movie_id"]))
	{
		createMessage(0);
	}
}

?>

