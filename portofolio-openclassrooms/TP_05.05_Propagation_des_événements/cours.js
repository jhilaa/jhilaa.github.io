

// Gestion de la fin du chargement de la page web
function pseudoConsoleEcrire (msg) {
	// création de l'élément div et définition de son contenu
    let newDiv=document.createElement("div");
    let newContent = document.createTextNode(msg);

    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);
    let pseudoConsole = document.getElementById("pseudoConsole");
    pseudoConsole.appendChild(newDiv);
}    


// Gestion du clic sur le document
document.addEventListener("click", function () {
    pseudoConsoleEcrire("Gestionnaire document");
});
// Gestion du clic sur le paragraphe
document.getElementById("para").addEventListener("click", function (e) {
    pseudoConsoleEcrire("Gestionnaire paragraphe");
    // si on veut arrêter la propagation
    //--------------------
    //e.stopPropagation(); // Arrêt de la propagation de l'événement
    //--------------------
});

// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
    pseudoConsoleEcrire("Gestionnaire bouton");
});