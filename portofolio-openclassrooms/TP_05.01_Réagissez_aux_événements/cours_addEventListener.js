function clic() {
	document.getElementById("pseudoConsole").innerHTML="Clic !";
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);

// fonction anonyme qui affiche le type et la cible de l'événement
boutonElt.addEventListener("click", function (e) {
    document.getElementById("pseudoConsole").innerHTML="Evènement : " + e.type + 
        ", </br>texte de la cible : " + e.target.textContent});
