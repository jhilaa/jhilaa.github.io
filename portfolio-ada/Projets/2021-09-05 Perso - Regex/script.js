var aTester = Array.from(document.getElementsByClassName("aTester"));
var initValues = aTester.map((e) => e.innerHTML);
var regex = document.getElementById("regex");
regex.value = "";

// (ré)initialise la zone de saisie
function reinit() {
  for (let i = 0; i < initValues.length; i++) {
    aTester[i].innerHTML = initValues[i];
  }
}

// applique la regex sur les lignes à tester en fonction de la vérification de la règle
function appliquerRegex(string) {
  var regex = new RegExp("(" + string + ")", "g");
  aTester.forEach((e) => {
    var texteModifie = e.textContent.replaceAll(
      regex,
      "<span style='background-color: lightgreen'>$1</span>"
    );
    e.innerHTML = texteModifie;
  });
}

// listener sur le champ regex pour modifier les lignes à tester
document.getElementById("regex").addEventListener("input", function (e) {
  if (e.target.value == "") {
    reinit();
  } else {
    reinit();
    appliquerRegex(e.target.value);
  }
});
/************
^(0|\+33)\s?[1-9]((\.|\s)?[0-9]{2}){4}$
*/

function modifRegex(position, newRG) {
  regexPart1 = regex.value.substring(0, position);
  regexPart2 = regex.value.substring(position);
  regex.value = regexPart1 + newRG + regexPart2;
  regex.focus();
  let newCursorPosition = position + newRG.length;
  regex.setSelectionRange(newCursorPosition, newCursorPosition);
}

// init du listener sur les boutons
let buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (e) {
    let positionCurseur = regex.selectionEnd;
    modifRegex(positionCurseur, e.target.textContent);
    appliquerRegex(regex.value);
  });
}
