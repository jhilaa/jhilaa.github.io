//https://github.com/adatechschool/ateliers/tree/master/20210609_Algorithmie

function construireBranche(nbEspace, carBordSapinGauche, carEtoile, nbEtoile,carBordSapinDroite) {
  //---- on va ecrire dans l'élement sapin de la page
  let divSapin = document.getElementById("sapinNBAvecDecroche");

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
  // construction du sapin branche par branche (ie ligne par ligne)
  construireBranche(n-1, " ", "+", 1,"");
  for(let i=1 ; i<=n ; i++) {
    // toutes les 3 lignes, on ajoute 1 espace à gauche ,ie on retire une étoile oar rapport à ce qui était prévu
    let etoileEnMoins = Math.floor(i/3);
    let nbEspace = (n-i) + etoileEnMoins ;
    // toutes les 3 lignes on retire 2 étoiles
    let nbEtoile = 2*i-1 - etoileEnMoins*2;
    construireBranche(nbEspace, "/", "*", nbEtoile,"\\");
  }
}

construireSapin(14);
