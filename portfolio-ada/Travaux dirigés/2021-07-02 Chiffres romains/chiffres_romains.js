var inputUser = prompt("chiffre romain");
var myRegex = new RegExp("(X)XXI");

alert("input : " + inputUser)

var tabSymbole = myRegex.exec(inputUser);

alert(tabSymbole);


