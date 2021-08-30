//https://github.com/adatechschool/ateliers/tree/master/20210609_Algorithmie

function construireBranche(nbEspace, carBordSapinGauche, carEtoile, nbEtoile,carBordSapinDroite) {
  //---- on va ecrire dans l'élement sapin de la page
  let divSapin = document.getElementById("sapinNBSimple");

  //---- on crée la "ligne" dans laquelle on va écrire une "branche"
  let divBranche = document.createElement("div");

  //---- variable dans laquelle on va mettre le code html avec les étoiles et les balises pour la mise en forme
  let hmtlTxt = "&nbsp".repeat(nbEspace);
  hmtlTxt += carBordSapinGauche;
  hmtlTxt += carEtoile.repeat(nbEtoile);
  hmtlTxt += carBordSapinDroite;

  //-- on "écrit" la branche avec le texte qu'on vient de construire, dans l'objet divBranche
  divBranche.innerHTML = hmtlTxt;

  //---- on ajoute la branche au sapin
  divSapin.appendChild(divBranche);
}


function construireSapin(n)
{ 
  // 1ère ligne (l'étoile)
  construireBranche(n-1, " ", "+", 1,"");
  // construction du sapin branche par branche (ie ligne par ligne)
  for(let i=1 ; i<=n ; i++) {
    let nbEspace = (n-i) ;
    let nbEtoile = 2*i-1;
    construireBranche(nbEspace, "/", "*", nbEtoile,"\\");
    // version simplifiée pour la console, sans la fonction
    console.log (" ".repeat(nbEspace) +  "/", "*".repeat(nbEtoile),"\\")
  }
}

construireSapin(14);

