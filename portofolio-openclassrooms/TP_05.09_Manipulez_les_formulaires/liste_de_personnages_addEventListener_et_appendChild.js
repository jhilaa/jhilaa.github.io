// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

// Remplit la liste déroulante avec les noms des maisons
for (let i=0; i<maisons.length; i++) {
    // on crée l'élément "option" (élément d'1 liste)
    let optionMaison = document.createElement ("option");
    optionMaison.value = maisons[i].code;
    optionMaison.textContent = maisons[i].nom;
    // on ajoute l'objet optionMaison dans la la liste déroulante "maison"
    document.getElementById("maison").appendChild(optionMaison);
}

// on pose un eventListener sur la liste déroulante "maison"
// avec la fonction pour construire les membres de la maison sous forme de liste
document.getElementById("maison").addEventListener("change", function(e) {
    let tabPersos = getPersonnages(e.target.value)
    /* on supprime le contenu de la liste */
    document.getElementById("persos").innerHTML = "";
    /* on reconstruite la liste */
    for (let j=0; j<tabPersos.length; j++) {
        let perso = document.createElement("li");
        perso.innerHTML = tabPersos[j]
        document.getElementById("persos").appendChild(perso)
    }
});