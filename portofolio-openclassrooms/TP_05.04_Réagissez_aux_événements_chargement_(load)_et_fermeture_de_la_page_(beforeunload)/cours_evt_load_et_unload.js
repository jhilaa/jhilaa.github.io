

// Gestion de la fin du chargement de la page web
window.addEventListener("load", function () {
	// création de l'élément div et définition de son contenu
    let newDiv=document.createElement("div");
    let newContent = document.createTextNode("Page entièrement chargée");

    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);
    let pseudoConsole = document.getElementById("pseudoConsole");
    pseudoConsole.appendChild(newDiv);
    //
    document.getElementById("pseudoConsole").focus()
});

// Gestion de la fermeture de la page web
window.addEventListener("beforeunload", function (e) {
    var message = "On est bien ici !";
    e.returnValue = message; // Provoque une demande de confirmation (standard)
    return message; // Provoque une demande de confirmation (certains navigateurs)
});