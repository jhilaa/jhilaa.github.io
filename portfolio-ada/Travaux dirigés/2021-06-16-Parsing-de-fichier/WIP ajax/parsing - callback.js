function afficher(reponse) {
    console.log(reponse);
    var fileJsonInput = document.querySelector('#fileJsonInput');
    var fileJsonDisplay = document.querySelector('#fileJsonDisplay');

    let tabDog = JSON.parse(reponse);
    for (let i=0; i < tabDog.length; i++) {
            console.log (tabDog);
            //
            let dog = tabDog[i]
            let species = dog.species;
            let breed = dog.breed;
            //
            let dogElt = document.createElement("li");
            dogElt.textContent = "specie : "+ species + " - breed : "+ breed;
            fileJsonDisplay.appendChild(dogElt);
        }
    }

// exécution de ajaxGet en passant la fonction "afficher" en paramètre (fonction qui s'exécutera si pas d'erreur)
//ajaxGet("http://localhost/ADA/ajax/source/sourceLevel2.json", afficher);
ajaxGet("./source/sourceLevel2.json", afficher);