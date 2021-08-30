
function compterClic() {
    let nbClic=parseInt(document.getElementById("compteurClics").textContent);
    document.getElementById("compteurClics").textContent = nbClic+1;
}

// Gestion du clic sur le sur le bouton "cmiquez-moi"
document.getElementById("clic").addEventListener("click", compterClic);


// Gestion du clic sur le paragraphe
document.getElementById("desactiver").addEventListener("click", function (e) {
    document.getElementById("clic").removeEventListener("click", compterClic);
});
