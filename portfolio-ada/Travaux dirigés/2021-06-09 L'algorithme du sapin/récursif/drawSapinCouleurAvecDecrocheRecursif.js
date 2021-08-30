

(function ()
  {
    let divSapin = document.getElementById("sapinCouleurAvecDecroche");

    function construireSapinRecursif(nbBranches, numBranche) {

      //---- on crée la "ligne" dans laquelle on va écrire une "branche"
      let divBranche = document.createElement("div");
      // toutes les 3 branches, on rajouté on enlève 2 etoiles par rapport au cas classique, et on ajoute 1 espace pour faire le décroché
      let nbEtoileEnMoins = Math.floor(numBranche/3);
      let nbEspace = (nbBranches-numBranche)+nbEtoileEnMoins; //nombre de branches - numéro de la branche
      let nbEtoile = 2*numBranche-1-nbEtoileEnMoins*2 ;

      //-- on "écrit" la branche le code html qui va bien pour faire la mise en forme avec le css
      let htmlTxt  = "&nbsp".repeat(nbEspace) + "/" + "<span class=\"branche\">" + "<span class=\"etoile\">*</span>".repeat(nbEtoile) + "</span>" + "\\";
      divBranche.innerHTML = htmlTxt;

      //---- on ajoute la branche au sapin
      divSapin.appendChild(divBranche);

      if (numBranche+1 < nbBranches) {
      //---- on rappelle la fonction pour la ligne suivante
      construireSapinRecursif(nbBranches, numBranche+1);
      }
    }

    var nbBranches = 14;
    var numBranche = 1;
    construireSapinRecursif(nbBranches,numBranche);
  }()
);

/*********************************/
//pour l'objet DOMobjet si la condition "condition" est vraie et que DOMobjet n'appartient pas à la classe className, on rajoute className à la liste des classes de l'objet. Sinon on l'enlève
function toogleClass (DOMobjet, className, condition) {
  if (condition && !DOMobjet.classList.contains(className)) {
    DOMobjet.classList.add(className);
  }
  else {
    DOMobjet.classList.remove(className);
  }
}


/** fonction qui parcours le sapin pour aléaoirement mettre en place des lumières et des boules (via des classes)  **/
function dessinerDeco(selecteur, classDeco, CarDeco, frequenceDeco) 
{   
    // pour tous les objets correspondant au sélecteur, on affecte ou retire la classe classeDeco, toute les frequenceDeco fois en moyenne
    let tabBranches = document.getElementsByClassName("branche");
    let testEtoileToDeco=false;
    // on traite les branches (lignes) une à une
    for (let branche of tabBranches) {
      // pour chaque branche on récupère les objets correspondant au sélecteur sous forme de tableau
      let tabEtoilesDansBranche = branche.querySelectorAll(selecteur); 
      for (let i=1; i<=tabEtoilesDansBranche.length-2; i++) {
        // pour chaque élément on définit un booléen pour savoir si on la transforme en objet de déco (boule ou led)
        // si testEtoileToDeco = true, ça veut dire que le symbole précédent a été changé en déco. Du coup, on ne fait rien pour le symbole courant.
        // sinon il ya 1 chance sur frequenceDeco qu'il passe à true. (NB c'est pour ça qu'on initialise testEtoileToDeco à false en début de fonction )
        testEtoileToDeco = (testEtoileToDeco ? false : Math.floor(Math.random()*frequenceDeco)==0); // dans 1 cas sur frequenceDeco, testEtoileToDeco est vrai
        // transfo en motif de déco selon le booléen ci-dessus
        tabEtoilesDansBranche[i].textContent = (testEtoileToDeco ? CarDeco : "*");
        // je passe par une fonction, parce que j'ai pas réussi à utiliser le classList.toggle
        toogleClass(tabEtoilesDansBranche[i], classDeco, testEtoileToDeco);
      }
    }
}
/***********************/
//** mise en place de la déco, via appelle de la fonction qui va chnager la classe des étoiles 
dessinerDeco(".etoile:not(.boule)", "boule", "o", 8); //pour sélectionner les objets ce la classe "étoile" qui ne sont pas de la classe boule, et les remplacer par des "o" et leur ajouter la classe 1 fois sur 8
dessinerDeco(".etoile:not(.boule)", "lumiere", "+", 8) ; //pour sélectionner les objets ce la classe "étoile" qui ne sont pas de la classe boule, et les remplacer par des "+" 1 fois sur 8

/***********************/
/** mise en place de l'animation **/
var intervalId = setInterval(function(){ dessinerDeco(".etoile:not(.boule)", "lumiere", "+", 8); }, 250);

document.addEventListener("click", function(e){
    clearInterval(intervalId) 
});



