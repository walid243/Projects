var numx = 1;
var numprim = [];
for(; numx < 300; numx++){
  if (primcheck(numx)) {
      numprim.push(numx);
      console.log(numx);
      console.log(numprim);
  }
}


function primcheck(numx) {
  for (var numy = 2 ; numy < numx ; numy++){
      if (numx % numy == 0) {
        console.log(numx);

        console.log(numy);
        return false;
      }

    }
  return numx;
  }
 document.getElementById('numeros').innerHTML = numprim;

 function primcheck2(){
   var numinput = parseInt(prompt("Que numero crees que es primo?"));
   if (numprim.includes(numinput)) {
     document.getElementById('positivo').innerHTML = "correcto";
     document.getElementById('positivo').style.background = "green";
     document.getElementById('positivo').style.display = "block";
     document.getElementById('negativo').style.display = "none";

   } else {
     document.getElementById('negativo').innerHTML = "Lo siento pero fallaste";
     document.getElementById('negativo').style.background = "red";
     document.getElementById('negativo').style.display = "block";
     document.getElementById('positivo').style.display = "none";

   }
 }
