//https://github.com/adatechschool/ateliers/tree/master/20210609_Algorithmie

function construireBranche(nbEspace, carBordSapinGauche, carEtoile, nbEtoile,carBordSapinDroite) {
  //---- on va ecrire dans l'élement sapin de la page
  let divSapin = document.getElementById("sapinCouleurAvecDecroche");

  //---- on crée la "ligne" dans laquelle on va écrire une "branche"
  let divBranche = document.createElement("div");

  //---- variable dans laquelle on va mettre le code html avec les étoiles et les balises pour la mise en forme
  let hmtlTxt = "&nbsp".repeat(nbEspace);
  hmtlTxt += carBordSapinGauche;
  hmtlTxt += "<span class=\"branche\">";
  //-----
  let spanEtoile = "<span class=\"etoile\">" ;
  spanEtoile += carEtoile;
  spanEtoile += "</span>";
  hmtlTxt += spanEtoile.repeat(nbEtoile);
  //-----
  hmtlTxt += "</span>";
  hmtlTxt += carBordSapinDroite;

  //-- on "écrit" la branche avec le texte qu'on vient de construire, dans l'objet divBranche
  divBranche.innerHTML = hmtlTxt;

  //---- on ajoute la branche au sapin
  divSapin.appendChild(divBranche);
}

var divSapin = document.getElementById("sapinNBAvecDecroche");

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


/*********************************/
//pour l'objet DOMobjet si la condition condition est vraie et que DOMobjet n'appartient pas à la classe className, on rajoute className à la liste des classes de l'objet. Sinon on l'enlève
function toogleClass (DOMobjet, className, condition) {
  if (condition && !DOMobjet.classList.contains(className)) {
    DOMobjet.classList.add(className);
  }
  else {
    DOMobjet.classList.remove(className);
  }
}


function decorerSapin(selecteur, classDeco, CarDeco, frequenceDeco) 
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
        testEtoileToDeco = (testEtoileToDeco ? false : Math.floor(Math.random()*frequenceDeco)==0); // dans 1 cas sur frequenceDeco, testEtoileToDeco est vrai
        // transfo en motif de déco selon le booléen ci-dessus
        tabEtoilesDansBranche[i].textContent = (testEtoileToDeco ? CarDeco : "*");
        // je passe par une fonction, parce que j'ai pas réussi à utiliser le classList.toggle
        toogleClass(tabEtoilesDansBranche[i], classDeco, testEtoileToDeco);
      }
    }
}
/***********************/
 

decorerSapin(".etoile:not(.boule)", "boule", "o", 8);
decorerSapin(".etoile:not(.boule)", "lumiere", "+", 8) ;

var intervalId = setInterval(function(){ decorerSapin(".etoile:not(.boule)", "lumiere", "+", 8); }, 250);

document.addEventListener("click", function(e){
    clearInterval(intervalId) 
});
