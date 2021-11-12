//https://code.visualstudio.com/docs/typescript/typescript-compiling

var players = ["julien", "Béatrice"];
var array_colors = ["♠︎","♣︎","♡","♢"];   //initialization
var array_values = ["2","3","4","5","6","7","8","9","10","V","Q","K","A"];   //initialization

class card {
    card_color: string;
    card_color_order: number;
    card_value: string;
    card_value_order: number;

    constructor(card_color: string, card_color_order: number, card_value: string, card_value_order: number) {
      this.card_color = card_color;
      this.card_color_order  = card_color_order;
      this.card_value = card_value;
      this.card_value_order  = card_value_order;
    }
};


var deck: card[] = []
var shuffled_deck: card[] = [];
var discard_deck: card[] = [];
var flop: card[] = []


// création du deck de cartes
function create_deck() {
  for (let i=0;i<array_colors.length;i++) {
    for (let j=0;j<array_values.length;j++) {
      deck.push(new card(array_colors[i], i, array_values[j], j));
    }
  }
  return deck;
}

// "mélangeage" du deck
function shuffle_deck(){
  let cpt: number;
  cpt= 0;
  while (deck.length > 0) {
    cpt++;
    let pos = Math.floor(Math.random()*(deck.length));
    shuffled_deck.push(deck[pos]);
    deck.splice(pos, 1);
  }
  return {"shuffle_deck":shuffled_deck, "remaining_deck":deck}
}

// distribution des cartes du flop
function deal(nb_card: number){
  //console.log ("deal");
  var hand: card[] = [];
  while (hand.length<nb_card) {
    //console.log ("shuffled_deck.length" + shuffled_deck.length)
    hand.push(shuffled_deck[0]);
    shuffled_deck.splice(0, 1);
  }
  return hand;
}

// "brulage" de carte lors de la distribution
function burn(nb_card: number) {
  //console.log ("burn");
  for (let i=0; i<nb_card; i++) {
    discard_deck.push(shuffled_deck[i]);
    shuffled_deck.splice(0, 1);
  }
}

// distribution du flop
function flop_() {
  flop = [];
  //console.log ("flop");
  for (let i=0 ; i<3 ; i++) {
    if (i==0) {
      burn(1);
      flop = deal(3);
    }
    else if (i==1 || i==2) {
      burn(1);
      flop = flop.concat(deal(1));
    }
  }
}

function play(hand:card[], flop:card[]) {
  let showdown :card[] = hand.concat(flop);
  let showdownOrderByCardValue :card[] = showdown;
  let showdownOrderByColorAndValue :card[] = showdown;
  let showdownOrderByValueAndColor :card[] = showdown;
  //
  showdownOrderByCardValue = showdown.slice();
  showdownOrderByCardValue.sort(function (card1, card2) {
    return card1.card_value_order - card2.card_value_order;
  });
  showdownOrderByColorAndValue.sort(function (card1, card2) {
    return card2.card_color_order - card1.card_color_order 
                || card2.card_value_order - card1.card_value_order;
  });
  showdownOrderByValueAndColor.sort(function (card1, card2) {
    return card2.card_value_order - card1.card_value_order 
                || card2.card_color_order - card1.card_color_order;
  });

  console.log("showdownOrderByCardValue");
  console.log(showdownOrderByCardValue);
  //
  console.log("showdownOrderByColorAndValue");
  console.log(showdownOrderByColorAndValue);
  //
  console.log("showdownOrderByValueAndColor");
  console.log(showdownOrderByValueAndColor);
  //
  let is_paire:boolean=false;
  let is_double_paire:boolean=false;
  let is_brelan:boolean=false;
  let is_suite:boolean=false;
  let is_couleur:boolean=false;
  let is_full:boolean=false;
  let is_carre:boolean=false;
  let is_quinte_flush:boolean=false;
  let is_quinte_flush_royale:boolean=false;
  //
  function trouve_paire(cartes: card[]) {
    let i:number=0;
    while (i<cartes.length-2) {
      if (cartes[i].card_value_order==cartes[i+1].card_value_order
        && cartes[i+1].card_value_order 
          != (i+2 < (cartes.length-1)?cartes[i+2] : -1 ))
        {
          return true;
        }
        i++;
    }
    return false
  }
  //
  function trouve_double_paire(cartes: card[]) {
    let is_double_paire:boolean=false;
    let is_paire:boolean=false;
    let i:number=0;
    while (i<cartes.length-2) {
      if (cartes[i].card_value_order==cartes[i+1].card_value_order
        && cartes[i+1].card_value_order 
          != (i+2 < (cartes.length-1)?cartes[i+2] : -1 ))
        {
          is_double_paire = is_paire;
          is_paire = true;
          if (is_double_paire) return is_double_paire;
        }
        i++
    }
    return false;
  }

  //
  function trouve_brelan(cartes: card[]) {
    let i:number=0;
    while (i<cartes.length-2) {
      if (cartes[i].card_value_order==cartes[i+2].card_value_order
        && cartes[i+2].card_value_order 
          != (i+3 < (cartes.length-1)?cartes[i+2] : -1 ))
        {
          return true;
        }
      i++
    }
    return false
  }

   //
   function trouve_carre(cartes: card[]) {
    let i:number=0;
    while (i<cartes.length-3) {
      if (cartes[i].card_value_order==cartes[i+3].card_value_order
        && cartes[i+3].card_value_order 
          != (i+4 < (cartes.length-1)?cartes[i+3] : -1 ))
        {
          return true;
        }
      i++ 
    }
    return false
  }
  //

  is_paire = trouve_paire(showdownOrderByCardValue);
  is_double_paire = trouve_double_paire(showdownOrderByCardValue);
  is_brelan = trouve_brelan(showdownOrderByCardValue);
  is_suite = true;
  is_couleur = trouve_carre(showdownOrderByCardValue);
  is_full = true;
  is_carre = trouve_carre(showdownOrderByCardValue);
  is_quinte_flush = true;
  is_quinte_flush_royale = true;

  console.log ("is_paire " + trouve_paire(showdownOrderByCardValue));
  console.log ("is_double_paire " + trouve_double_paire(showdownOrderByCardValue));
  console.log ("is_brelan " + trouve_brelan(showdownOrderByCardValue));
  console.log ("is_suite " + is_suite);
  console.log ("is_couleur " + trouve_carre(showdownOrderByCardValue));
  console.log ("is_full " + is_full);
 // console.log ("is_carre " + trouve_carre(showdownOrderByCardValue));
  console.log ("is_quinte_flush " + is_quinte_flush);
  console.log ("is_quinte_flush_royale " + is_quinte_flush_royale);
}

//** MAIN *******/
// création du paquet et mélange des cartes
create_deck()
shuffle_deck();
// distribution des cartes
let player1 = deal(2)
let player2 = deal(2)
console.log (player1);
console.log (player2);
// distribution du flop
flop_();
console.log (flop);
console.log (player1.concat(flop));
console.log (player2.concat(flop));
//---------
console.log ("deck: "+ deck.length);
console.log ("shuffled_deck: "+ shuffled_deck.length);
console.log ("discard_deck: "+ discard_deck.length);
console.log ("flop: "+ flop.length);
// "calcul" des mains du joueur
play(player1, flop);

export {create_deck};
export {shuffle_deck};
export {trouve_double_paire};
export {trouve_carre};