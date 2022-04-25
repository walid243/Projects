<?php
$contido = '<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <form method="get">
      <input type="number" min="0" name="numero">
      <button type="submit">Comprobar</button>
    </form>
  </body>
</html>';
if (isset($_GET["numero"]) && ($_GET["numero"] != null)) {
  $x = $_GET["numero"];
  $y = (int)$x;
  $fact = $y;
  for ($i= $y - 1; $i >= 1 ; $i--) {
    $fact *= $i;
  }

  echo "El factorial de ". $y ." es ". $fact ." " ;
}
echo $contido;
 ?>
