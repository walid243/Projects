<?php
  if (($_POST['dni'] != "")&&($_POST['nombre'] != "")&&($_POST['apellido1'] != "")&&($_POST['password'] != "")
    &&($_POST['movil'] != "")&&($_POST['email'] != "")&&($_POST['codigopostal'] != "")) {
      $contador = 0;
    for ($i=0; $i < 8 ; $i++) {
      if (check_datos($i) == true){
        $contador++;
      } else if (($contador < 6)&&($_POST['apellido2']!="")) {
        echo $i." Los datos no cumplen los requisitos"."<br/>";
      }
    }
    echo $contador."<br/>";
    if (($contador >= 7 )) {
        sqlcon();
    }
  } else {
    echo "Todos los campos obligatorios tienen que estar bien cubiertos";
    }

  function check_datos($i) {
    // Patrones
    $ptr_dni = "(^([0-9]|[x-zX-Z])[0-9]{7}[a-zA-Z])";
    $ptr_nom_ape = "(^[A-Z]{1}[a-z]{2,})";
    $ptr_pass = "(^(?=.*\d)|(?=.*[A-Z])|(?=.*[$@$!%*?&])|(?=.*[a-z])\S{8,16}$)";
    $ptr_movil = "(^[6]{1}[0-9]{8}$)";
    $ptr_email = "(^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$)";
    $ptr_cp =  "(^[0-9]{5}$)";
    // Si el apellido2 viene cubierto o no
    // if ($_POST['apellido2'] == "") {
    //   $_POST['apellido2'] = "apellido2";
    // }
    // Arrays
    $patrones = [$ptr_dni,$ptr_nom_ape,$ptr_nom_ape,$ptr_pass,$ptr_movil,$ptr_email,$ptr_cp,$ptr_nom_ape];
    $datos = [($_POST['dni']),($_POST['nombre']),($_POST['apellido1']),($_POST['password']),($_POST['movil']),($_POST['email']),($_POST['codigopostal']),($_POST['apellido2'])];
    $campos = ["Dni/Nie","Nombre","Apellido1","password","movil","email","codigo postal","Apellido2"];
     // print_r($sinap2)."<br/>";
    // Validación de datos
      if (preg_match($patrones[$i], $datos[$i])) {
      return true;
    } else {
        if ($_POST['apellido2'] == "") {
          if ($i != 7) {
            // nada
            return false;
          }
        } else {
          return false;
          }
      }
  }

  function sqlcon(){
    $servername = "localhost";
    $database = "test";
    $username = "root";
    $password = "";
    // Creación conexion
    $conn = mysqli_connect($servername, $username, $password, $database);
    // Check conexion
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    echo "Connected successfully"."<br/>";
    // Variables de datos
    $dni = $_POST['dni'];
    $nombre = $_POST['nombre'];
    $apellido1 = $_POST['apellido1'];
    if ($_POST['apellido2'] == "apellido2") {
      $apellido2 = null;
    } else {
      $apellido2 = $_POST['apellido2'];
      }
    $passw = $_POST['password'];
    $movil = $_POST['movil'];
    $email = $_POST['email'];
    $direccion = $_POST['direccion'];
    $cp = $_POST['codigopostal'];
    $Sexo = $_POST['Sexo'];
    // Inserción SQL
    $consulta = "INSERT INTO usuarios (Dni,Passw,Nombre,Apellido1,Apellido2,Sexo,movil,email,direccion,CP)
    VALUES ('$dni' ,MD5('$passw') ,'$nombre' ,'$apellido1' ,'$apellido2' ,'$Sexo' ,'$movil' ,'$email' ,'$direccion' ,'$cp')";
    //  Check inserción
     if (mysqli_query($conn,$consulta)) {
       echo " se realizo la inserción";

     } else {
       echo " hubo un error con ".$consulta."<br/>";
       print_r(mysqli_error_list($conn));
       }

    mysqli_close($conn);
  }
 ?>
