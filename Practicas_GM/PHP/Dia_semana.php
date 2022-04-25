<?php
$contido = '<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <form method="get">
      <input type="number" min="1" max="7" name="numero">
      <button type="submit">Comprobar</button>
    </form>
  </body>
</html>';


if(isset($_GET["numero"])){
  $num = $_GET["numero"];
  switch ($num) {
    case 1:
      echo "Hoy es Lunes";
      break;
    case 2:
      echo "Hoy es Martes";
      break;
    case 3:
      echo "Hoy es Miercoles";
      break;
    case 4:
      echo "Hoy es Jueves";
      break;
    case 5:
      echo "Hoy es Viernes";
      break;
    case 6:
      echo "Hoy es Sabado";
      break;
      case 7:
        echo "Hoy es Domingo";
        break;
    default:

      break;
  }
}

echo $contido;

?>
