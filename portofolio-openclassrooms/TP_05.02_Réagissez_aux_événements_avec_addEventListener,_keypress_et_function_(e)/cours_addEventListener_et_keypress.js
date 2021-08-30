
// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", function (e) {
    document.getElementById("pseudoConsole").innerHTML="Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode);
});