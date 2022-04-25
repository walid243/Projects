<?php
$contido = '<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

  </body>
</html>';
echo '<table border="2">';
$x = 0;
for ($i=0; $i < 10 ; $i++) {
  $x++;
  $y = 1;
  echo '<tr>';
    for ($j= $i+1; $j <= $i+10 ; $j++) {
      echo "<td>";
        for ($k=$i+1; $k <=$i+1 ; $k++) {
          $z = $x*$y;
          echo "$x x $y = $z";
        }
        $y++;
       echo "</td>";
    }
  echo '</tr>';
}
echo '</table>';
 ?>
