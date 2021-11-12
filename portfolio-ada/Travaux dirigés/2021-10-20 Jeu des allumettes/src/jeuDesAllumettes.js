//exports.__esModule = true;
//exports.CreerPlateau = void 0;

let nbAllumettes = 50;
let tabAllumettesSurPlateau = [];
let firstAllumetteRank = 0;
let nbAllumetteARetirerMax = 6;
let player = "player1";

function changerPlayer() {
  if (player == "player1") {
    player = "ordi";
    console.log(player);
    console.log("to 2");
  } else {
    player = "player1";
    console.log("to 1");
  }
}

function creerPlateau(nbAllumettes) {
  let newAllumette;
  for (let rank = 0; rank <= nbAllumettes - 1; rank++) {
    console.log(rank);
    newAllumette = document.createElement("div");
    newAllumette.setAttribute("id", "allumette" + rank);
    newAllumette.setAttribute("rank", rank);
    newAllumette.className = "allumetteOff";
    //newAllumette.textContent = rank;
    newAllumette.addEventListener("click", (e) => {
      if (player != "ordi") highlightAllumettes(rank);
    });
    document.getElementById("plateau").appendChild(newAllumette);
  }
}

function highlightAllumettes(allumetteRank) {
  if (
    allumetteRank < firstAllumetteRank + nbAllumetteARetirerMax &&
    allumetteRank >= firstAllumetteRank
  ) {
    for (
      i = firstAllumetteRank;
      i <= allumetteRank && i <= nbAllumettes - 1;
      i++
    ) {
      document.getElementById("allumette" + i).className =
        player == "player1" ? "allumetteJoueur" : "allumetteOrdi";
      if (i == nbAllumettes - 1) {
        alert(player + " LOOSE");
        break;
      }
    }
    // après avoir gérer les allumetes pour ce tour, on prépare le tour suivant
    firstAllumetteRank = allumetteRank + 1;
    changerPlayer();
    if (player == "ordi") {
      ordiPlay();
    }
  }
}

function ordiPlay() {
  console.log("test " + ((1 + firstAllumetteRank) % nbAllumetteARetirerMax));
  let newRank =
    (Math.floor(firstAllumetteRank / nbAllumetteARetirerMax) + 1) *
    nbAllumetteARetirerMax;
  console.log("newRank " + newRank);
  setTimeout(() => {
    highlightAllumettes(newRank);
  }, 2000);
}
frfre;
creerPlateau(nbAllumettes);
