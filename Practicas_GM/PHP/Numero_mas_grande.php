
<?php
$linea='<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <button type="button" name="button" onclick="mayor()">boton</button>
    <script>
    function mayor(){
      if (window.location.href != "http://localhost/PHP/ejer1.php") {
        window.location.href = "http://localhost/PHP/ejer1.php";
      }
      do {
      var jsx = parseInt(prompt("dame un numero"));
      var jsy = parseInt(prompt("dame otro numero"));
    } while (isNaN(jsx) || isNaN(jsy))
    window.location.href += "?a=" + jsx + "&b=" + jsy;
    }
    </script>

  </body>
</html>';
echo $linea;

$a  = (isset($_GET['a'])) ? $_GET['a'] : null;
$b  = (isset($_GET['b'])) ? $_GET['b'] : null;
if ($a > $b) {
  echo "<p>El mayor es: " . $a . "</p>";
} else {
  echo "<p>El mayor es: " . $b . "</p>";
}


?>
