function returnTabDiviseursNombre(n) {
  let tabDiviseurs = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0 && n != i) {
      tabDiviseurs.push(i);
    }
  }
  return tabDiviseurs;
}

function returnSommeElementsTableau(tab) {
  let somme = 0;
  for (let i = 0; i <= tab.length - 1; i++) {
    somme += tab[i];
  }
  return somme;
}

function returnSommeDiviseurs(n) {
  return returnSommeElementsTableau(returnTabDiviseursNombre(n));
}

function returnTabNombresAimables(n) {
  let tabNombresAimables = [];
  for (let i = 1; i < n; i++) {
    let sommeDiviseurs = returnSommeDiviseurs(i);
    let sommeDiviseursDuDiviseur = returnSommeDiviseurs(sommeDiviseurs);
    if (
      i == sommeDiviseursDuDiviseur &&
      sommeDiviseurs != sommeDiviseursDuDiviseur
    ) {
      tabNombresAimables.push({ n1: i, n2: sommeDiviseurs });
    }
  }
  return tabNombresAimables;
}

let test = 10000;
let tabNombresAimables = returnTabNombresAimables(test);
console.log(tabNombresAimables);
