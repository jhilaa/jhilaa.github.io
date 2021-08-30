
(function ()
  {
    var divSapin = document.getElementById("sapinNBAvecDecroche");


    function construireSapinRecursif(nbBranches, numBranche) {
      //
      // toutes les 3 branches, on rajouté on enlève 2 etoiles par rapport au cas classique, et on ajoute 1 espace pour faire le décroché
      let nbEtoileEnMoins = Math.floor(numBranche/3);
      let nbEspace = (nbBranches-numBranche)+nbEtoileEnMoins; //nombre de branches - numéro de la branche
      let nbEtoile = 2*numBranche-1-nbEtoileEnMoins*2 ;

      //---- on crée la "ligne" dans laquelle on va écrire une "branche"
      let divBranche = document.createElement("div");
      //-- on "écrit" la branche 
      divBranche.innerHTML = "&nbsp".repeat(nbEspace)+"/" + "*".repeat(nbEtoile) + "\\";
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
