function estDivisiblePar(n, d) {
  return !(n % d);
}

// test pour savoir si un nombre est 1er
function estPremier(n) {
  testpremier = true;
  for (i = 2; i < n; i++) {
    testpremier = testpremier && !estDivisiblePar(n, i);
  }
  return testpremier;
}
console.log(estPremier(15));

// n 1ers nombre premiers
function rechercheNbres1ers(n) {
  var L = [2];
  var k = 3;
  while (L.length < n) {
    if (estPremier(k)) {
      L.push(k);
    }
    k++;
  }
  return L;
}

console.log(rechercheNbres1ers(5));

/** WIP */
/*
function rechercheNbres1ersOpti(n) {
  var L = [2];
  var k = 3;
  while (L.length < n) {
    if (estPremier(k)) {
      L.push(k);
    }
    k = k + 1;
  }
  // console.log(L);
  return L;
}
console.log(rechercheNbres1ersOpti(9));
*/
