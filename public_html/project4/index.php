<?php

$EMAIL_ID = 266480228; // 9-digit integer value (i.e., 123456789)
$API_KEY = "62458f64"; // API key (string) provided by Open Movie DataBase (i.e., "ab123456")

session_start(); // Connect to the existing session

require_once '/home/common/php/dbInterface.php'; // Add database functionality
require_once '/home/common/php/mail.php'; // Add email functionality
require_once '/home/common/php/p4Functions.php'; // Add Project 4 base functions

processPageRequest(); // Call the processPageRequest() function

// DO NOT REMOVE OR MODIFY THE CODE OR PLACE YOUR CODE ABOVE THIS LINE

function addMovieToCart($imdbID)
{
	$movieinDB = movieExistsInDB($imdbID);
	// if the movie is not in the database
	if ($movieinDB == 0) {
		// call the omdb API and convert the json to a PHP object
		$result = file_get_contents('http://www.omdbapi.com/?apikey='.$GLOBALS['API_KEY'].'&i='.$imdbID.'&type=movie&r=json');
		echo "<h3>imdbID: ".$imdbID."</h3>";
		$movieInfo = json_decode($result, true);
		$title = $movieInfo["Title"];
		$year = $movieInfo["Year"];
		$rating = $movieInfo["Rated"];
		$runtime = $movieInfo["Runtime"];
		$genre = $movieInfo["Genre"];
		$actors = $movieInfo["Actors"];
		$director = $movieInfo["Director"];
		$writer = $movieInfo["Writer"];
		$plot = $movieInfo["Plot"];
		$poster = $movieInfo["Poster"];
		// add the movie to the database using addMovie()
		$movieId = addMovie($imdbID, $title, $year, $rating, $runtime, $genre, $actors, $director, $writer, $plot, $poster);
	}
	else {
		$movieId = $movieinDB;
	}
	addMovieToShoppingCart($_SESSION["userId"], $movieId);
	displayCart();
			
}

function displayCart()
{
	$movies = getMoviesInCart($_SESSION["userId"]);
	require_once './templates/cart_form.html';
}

function processPageRequest()
{
	// test if the user's Display Name value is stored in the session
	if (!isset($_SESSION["displayName"])) {
		//redirect to the logon.php page since the displayName value is not set
		header("Location: ./logon.php");
	}
	// if the $_GET['action'] value was not passed to the page ...
	if (!isset($_GET["action"])) {
		// call the displayCart() function
		displayCart();
		
	}
	// if the $_GET['action'] value is add ...
	else if ($_GET["action"] === "add") {
		// call the addMovieToCart($imdbID) function where $_GET['imdb_id'] is passed 
		addMovieToCart($_GET["imdb_id"]);
		// call the displayCart() function
		displayCart();
	}
	// if the $_GET['action'] value is remove ...
	else if ($_GET["action"] === "remove") {
		// call the removeMovieFromCart($movieID) function with $_GET['movie_id'] passed as $movieID
		removeMovieFromCart($_GET["movie_id"]);
		// call the displayCart() function
		displayCart();
	}
	else {
		displayCart();
	}
}

function removeMovieFromCart($movieID)
{	// call the database function removeMovieFromShoppingCart($userId, $movieId)
	$removed = removeMovieFromShoppingCart($_SESSION["userId"], $movieID);
	// call the displayCart() function
	displayCart();
}

?>
