
(function ()
  {
    var divSapin = document.getElementById("sapinNBSimple");

    function construireSapinRecursif(nbBranches, numBranche) {
      let nbEspace = nbBranches-numBranche; //nombre de branches - numéro de la branche
      let nbEtoile = 2*numBranche-1;

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
    var numBranche = 1
    construireSapinRecursif(nbBranches,numBranche);
  }()
);


