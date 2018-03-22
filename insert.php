<? php
$link = mysqli_connect("localhost", "root", "root", "quizzUser");

// Check connection
if($link === false){
  die("ERROR: Could not connect. " . mysqli_connect_error());
}

$pseudo = mysqli_real_escape_string($link, $_REQUEST['pseudo']);
$email = mysqli_real_escape_string($link, $_REQUEST['mail']);

// attempt insert query execution
$sql = "INSERT INTO quizz (pseudo, mail) VALUES ('$pseudo', '$mail')";
if(mysqli_query($link, $sql)){
  echo "Records added successfully.";
} else{
  echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}

// close connection
mysqli_close($link);
?>
