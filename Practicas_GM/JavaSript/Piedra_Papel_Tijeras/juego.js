  function jugador(elec) {
  var choice = elec;
  console.log(choice);
   var x = maquina();
   check(choice, x);
  }
function maquina(){
  var elem = ["piedra", "papel", "tijeras", "lagarto", "spock"];
  var len = Math.floor(Math.random() * (5 - 0));
  console.log(elem);
  console.log(len);
var jug = elem[len];
console.log(jug);
return jug;
}
function check(choice, x) {
  console.log(choice + " vs " + x);

    if (x == "piedra") {
          if ((choice == "papel")|| (choice == "spock")) {
          alert("You selected " + choice + " \n" + " vs " + "\n" + "Bot choosed " + x + "\n" + "\n" + "You Win");
        } else if (choice == "piedra") {
          alert("You selected " + choice + " \n" + " vs " + "\n" + "Bot choosed " + x + "\n" + "\n" + "empate");
        } else {
          alert("You selected " + choice + " \n" + " vs " + "\n" + "Bot choosed " + x + "\n" + "\n" + "You Lose");
        }
    } else if (x == "papel") {
          if ((choice == "tijeras")|| (choice == "lagarto")) {
          alert("You selected " + choice + " \n" + " vs " + "\n" + "Bot choosed " + x + "\n" + "\n" + "You Win");
        } else if (choice == "papel") {
          alert("You selected " + choice + " \n" + " vs " + "\n" + "Bot choosed " + x + "\n" + "\n" + "empate");
        } else {
          alert("You selected " + choice + " \n" + " vs " + "\n" + "Bot choosed " + x + "\n" + "\n" + "You Lose");
        }
    } else if (x == "tijeras") {
          if ((choice == "piedra")|| (choice == "spock")) {
          alert("You selected " + choice + " \n" + " vs " + "\n" + "Bot choosed " + x + "\n" + "\n" + "You Win");
        } else if (choice == "tijeras") {
          alert("You selected " + choice + " \n" + " vs " + "\n" + "Bot choosed " + x + "\n" + "\n" + "empate");
        } else {
          alert("You selected " + choice + " \n" + " vs " + "\n" + "Bot choosed " + x + "\n" + "\n" + "You Lose");
        }
    } else if (x == "lagarto") {
          if ((choice == "piedra")|| (choice == "tijeras")) {
          alert("You selected " + choice + " \n" + " vs " + "\n" + "Bot choosed " + x + "\n" + "\n" + "You Win");
        } else if (choice == "lagarto") {
          alert("You selected " + choice + " \n" + " vs " + "\n" + "Bot choosed " + x + "\n" + "\n" + "empate");
        } else {
          alert("You selected " + choice + " \n" + " vs " + "\n" + "Bot choosed " + x + "\n" + "\n" + "You Lose");
        }
    } else if (x == "spock") {
          if ((choice == "papel")|| (choice == "lagarto")) {
          alert("You selected " + choice + " \n" + " vs " + "\n" + "Bot choosed " + x + "\n" + "\n" + "You Win");
        } else if (choice == "spock") {
          alert("You selected " + choice + " \n" + " vs " + "\n" + "Bot choosed " + x + "\n" + "\n" + "empate");
        } else {
          alert("You selected " + choice + " \n" + " vs " + "\n" + "Bot choosed " + x + "\n" + "\n" + "You Lose");
        }
    }
}
function img(op) {
  switch (op) {
    case "piedra":

      break;

    case "papel":

      break;

    case "tijeras":

      break;

    case "lagarto":

      break;

    case "spock":

      break;

  }

}
