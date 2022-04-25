$(document).ready( function() {
  $('#form_registro').ajaxForm({
    beforeSubmit : function(formData, $form, options) {
      var ptr_dnis = /^([0-9]{8}[a-zA-Z])$/;
      var ptr_nom_ape = /(^[A-Z]{1}[a-z]{2,})/;
      var ptr_pass = /(^(?=.*\d)(?=.*[A-Z])(?=.*[$@$!%*?&])(?=.*[a-z])\S{8,16}$)/;
      var ptr_movil = /(^[6]{1}[0-9]{8}$)/;
      var ptr_email = /(^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$)/;
      var ptr_cp =  /(^[0-9]{5}$)/;
      var f=$form[0];

        if (!formData[0].value) {
          alert('Debes insertar el Dni');
          return false;
        } else if (check_id() == false) {
          alert('El dni esta mal');
          return false;
        }
        console.log(ptr_pass.test(formData[1].value));
        if (!formData[1].value) {
          alert('Debes de introducir la contraseña');
          return false;
        } else if (ptr_pass.test(formData[1].value) == false) {
          alert('La contraseña no cumple los requisitos')
          return false;
        }
        if (!formData[2].value) {
          alert('Debes de introducir el Nombre');
          return false;
        } else if (ptr_nom_ape.test(formData[2].value) == false) {
          alert('El nombre debe tener minimo 3 letras y la primera mayuscula');
          return false;
        }
        if (!formData[3].value) {
          alert('Debes de introducir el apellido');
          return false;
        } else if (ptr_nom_ape.test(formData[3].value) == false) {
          alert('El apellido debe tener minimo 3 letras y la primera mayuscula');
          return false;
        }
        if (ptr_dnis.test(formData[0].value) == true){
          if (!formData[4].value) {
            alert('Debes de introducir el apellido2');
            return false;
          } else if (ptr_nom_ape.test(formData[4].value) == false) {
            alert('El apellido2 debe tener minimo 3 letras y la primera mayuscula');
            return false;
          }
        }
        if (!(formData[5].value)) {
          alert('Debes de seleccionar el sexo');
          return false;
        }
        if (!formData[6].value) {
          alert('Debes de introducir el movil');
          return false;
        } else if (ptr_movil.test(formData[6].value) == false) {
          alert('El numero de telefono no es valido');
          return false;
        }
        if (!formData[7].value) {
          alert('Debes de introducir el email');
          return false;
        } else if (ptr_email.test(formData[7].value) == false) {
          alert('El email no es valido');
          return false;
        }
        if (!formData[8].value) {
          alert('Debes de introducir el direccion');
          return false;
        }
        if (!formData[9].value) {
          alert('Debes de introducir el codigo postal');
          return false;
        } else if (ptr_cp.test(formData[9].value) == false) {
          alert('El codigo postal no es valido');
          return false;
        }

        return true;
      },
      success: function(data) {
        alert('Se ha hecho la solicitud con éxito');
      }
  })
});
