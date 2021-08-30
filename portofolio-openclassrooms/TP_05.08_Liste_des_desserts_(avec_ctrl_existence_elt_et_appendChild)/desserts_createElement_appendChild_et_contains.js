
function remplacerDessert(e) {
    let newDessert = prompt ("Nouveau dessert");

    // controle de l'existence ou non du dessertà ajouter
    let listeDesserts = document.getElementById("desserts")
    let ControleSiIdExiste = listeDesserts.contains(document.getElementById(newDessert)); 

    if (ControleSiIdExiste) {
        alert ("le dessert "+ newDessert +" existe déjà")
    }
    else {
            e.target.id = newDessert;  
            e.target.textContent = newDessert;
            //
            e.target.style.color="black";
    }
}

function ajouterDessert() {
    let newDessert = prompt ("Nouveau dessert");

    // controle de l'existence ou non du dessertà ajouter
    let listeDesserts = document.getElementById("desserts")
    let ControleSiIdExiste = listeDesserts.contains(document.getElementById(newDessert)); 

    if (ControleSiIdExiste) {
        alert ("le dessert "+ newDessert +" existe déjà")
    }
    else {
            newDessertElement = document.createElement("li")
            newDessertElement.id = newDessert;
            newDessertElementLien = document.createElement("a")       	
            newDessertElementLien.textContent = newDessert;
            newDessertElementLien.href = "#";
            newDessertElementLien.style.color="black";
            // ajout du lien sur le nouveau dessert
            newDessertElementLien.addEventListener("click", function(e){remplacerDessert(e);});
            newDessertElement.appendChild(newDessertElementLien);
            // ajout dans la liste
            listeDesserts.appendChild(newDessertElement);
    }

}

// Gestion du bouton
document.getElementById("btn").addEventListener("click", ajouterDessert);


//solution en condensé//
/*
    document.querySelector("button").addEventListener("click", function () {
        var nomDessert = prompt("Entrez le nom du nouveau dessert :");

        var dessertElt = document.createElement("li");
        dessertElt.textContent = nomDessert;
        dessertElt.addEventListener("click", function (e) {
            var nouveauNom = prompt("Modifiez le nom du dessert :", e.target.textContent);
            e.target.textContent = nouveauNom;
        });

        document.getElementById("desserts").appendChild(dessertElt);
    });
*/

// version avec le href et le onclick qui ne marche pas
/*
            newDessertElement = document.createElement("li")
            newDessertElement.id = newDessert;  
                newDessertLien = document.createElement("a");
                newDessertLien.href = "#";
                newDessertLien.onclick = remplacerDessert;
                newDessertLien.textContent = newDessert;
                // ajout du lien dans l'élément à ajouter
                newDessertElement.appendChild(newDessertLien);
            // ajout dans la liste
            listeDesserts.appendChild(newDessertElement);
*/