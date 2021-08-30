
let boutonDemarrer = document.getElementById("demarrer");
let boutonArreter = document.getElementById("arreter");

let cadre = document.getElementById("cadre");
let ballon = document.getElementById("ballon");
let vitesse = 7; // Valeur du déplacement en pixels

// Conversion en nombre du diamètre du ballon (valeur de la forme "XXpx")
let largeurCadre = parseFloat(getComputedStyle(cadre).width);
let largeurBallon = parseFloat(getComputedStyle(ballon).width);
let animationId = null; // Identifiant de l'animation
let positionMin = 0;
let direction = 1;

console.log ("largeurBallon : " + largeurBallon);

// Déplace le bloc sur sa gauche jusqu'au bord du cadre
function deplacerBallon() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    let positionBallon = parseFloat(getComputedStyle(ballon).left);
    let positionMax = parseFloat(getComputedStyle(cadre).width);
    //--------------
    if ((positionBallon + largeurBallon > largeurCadre) || (positionBallon < 0)) { // Si le bloc n'est pas encore au bout du cadre
        // on change de sens
        direction *= -1; 
    }
    
    // Déplacement du bloc
    ballon.style.left = (positionBallon + vitesse * direction) + "px";

    // Demande au navigateur d'appeler deplacerBloc dès que possible
    animationId = requestAnimationFrame(deplacerBallon);
}


document.getElementById("demarrer").addEventListener("click", function(e){
    boutonDemarrer.disabled = true;
    boutonArreter.disabled = false;
    animationId = requestAnimationFrame(deplacerBallon); // Début de l'animation 
});

document.getElementById("arreter").addEventListener("click", function(e){
    boutonDemarrer.disabled = false;
    boutonArreter.disabled = true;
    cancelAnimationFrame(animationId);
});   



