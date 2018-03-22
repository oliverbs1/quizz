<?php
session_start();
// variable declaration
$pseudo = "pseudo";
$mail = "mail";

$errors = array();
$_SESSION['success'] = "";

// connect to database
$link = mysqli_connect("localhost", "root", "root", "quizzUser");

// REGISTER USER
if (isset($_POST['add'])) {
  // receive all input values from the form

  $pseudo = mysqli_real_escape_string($link, $_REQUEST['pseudo']);
  $mail = mysqli_real_escape_string($link, $_REQUEST['mail']);

  // register user if there are no errors in the form
  if (count($errors) == 0) {

    $sql = "INSERT INTO quizz (pseudo, mail) VALUES ('$pseudo', '$mail')";

    mysqli_query($link, $sql);
    header('location: quizzSuite.php');
  }

  if(mysqli_query($link, $sql)){
    echo "Employee NOT Added";
  } else{
    echo "Records added successfully.";
  }

}

?>
