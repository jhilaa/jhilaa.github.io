

// Renvoie le nom du bouton souris à partir de son code
function getBoutonSouris(code) {
    var bouton = "inconnu";
    switch (code) {
    case 0: // 0 est le code du bouton gauche
        bouton = "gauche";
        break;
    case 1: // 1 est le code du bouton du milieu
        bouton = "milieu";
        break;
    case 2: // 2 est le code du bouton droit
        bouton = "droit";
        break;
    }
    return bouton;
}

// Affiche des informations sur un événement souris
function infosSouris(e) {;
    let msg ="Evènement souris : " + e.type + ", bouton " 
              + getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY;
    // création de l'élément div et définition de son contenu
    let newDiv=document.createElement("div");
    let newContent = document.createTextNode(msg);

    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);
    let pseudoConsole = document.getElementById("pseudoConsole");
    pseudoConsole.appendChild(newDiv);
}

// Gestion du clic souris
document.addEventListener("click", infosSouris);
// Gestion de l'appui et du relâchement d'un bouton de la souris
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);