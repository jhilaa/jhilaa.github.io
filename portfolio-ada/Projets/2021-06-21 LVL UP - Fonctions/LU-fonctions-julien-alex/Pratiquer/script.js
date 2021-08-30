// Déclaration des variables globales
//let lettersTab = [];
let typedLetter = "";

// Tir au hasard un mot d'ans un tableau et renvoit ce mot
function chooseWord(){
    let tabWord = ["alex", "julien", "adrien"];
    let numRamdom = Math.floor(Math.random() * tabWord.length);
    let motRandom = tabWord[numRamdom];
    return motRandom;
}

// Remplace les lettres du mot word par des *, pour les lettres présentes dans le tableau de lettres letters. Retourne le mot avec les *
function replaceCharacters(word,letters){
    let wordInProgress = "";
    for(let i = 0;i<word.length;i++){
       if(letters.indexOf(word[i])== -1){
        wordInProgress = wordInProgress.concat("*");
       }else{
        wordInProgress = wordInProgress.concat(word[i]);
       }
    }
    return wordInProgress;
}    

// demande à l'utilisateur de saisir une lettre. recommence tant que la saisie n'est pas une lettre en minuscule, ou une lettre déjà saisies (tableau des lettres déjà transmises passé en paramètre dans pastLetters)
function getLoneDifferentLetter(pastLetters){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let letterInput = prompt("Enter a letter : ");
    while(letterInput.length != 1 || alphabet.indexOf(letterInput) == -1 || pastLetters.indexOf(letterInput) != -1 ){
        letterInput = prompt("Enter one letter : ");
    }
    typedLetter = typedLetter.concat(letterInput); // on stocke la lettre saisie dans le tableau typedLetter des lettres déjà saisies
    return letterInput;
}


// renvoie true si candidateLetter est danns le mot chosenWord. false sinon
function letterIsInWord(candidateLetter, chosenWord){
    if(chosenWord.indexOf(candidateLetter) == -1){
        return  false;
    }else{
        return true;
    }
}

// Mise en place du pendu pour affichage dans la console
    //let  = ["||","=","|","-","O","/","\\"];
    let hangManArray = ["==========="];
    hangManArray.push("||        |");
    hangManArray.push("||        O");
    hangManArray.push("||        |");  
    hangManArray.push("||      -----");
    hangManArray.push("||        |");
    hangManArray.push("||       /  \\");
    hangManArray.push("||");
    hangManArray.push("||");
    //sconsole.log(hangManArray);

// lancement du jeu
function jeuDuPendu(){ 
   let imagePendu = document.getElementById("pendu");
   let penduWord = document.getElementById("pendu_word");
   
   // tire un mot au hasard
   let guessing_a_word =  chooseWord();
   let wordInProgress = replaceCharacters(guessing_a_word,typedLetter);

   // tant que le mot n'a pas été trouvé le joueur à 8 tries
   let numbOfFails = 0;
   do {
     // affiche le mot mystère en affichant des * pour les lettres non devinées 
        penduWord.textContent = wordInProgress;
       // demande à l'utlisateur de choisir une lettre et on lui demande tant que ce n'est pas une lettre ou déjas saisi 
       let enterLetter = getLoneDifferentLetter(typedLetter);
       // Verifie si la lettre est dans le mot 
       let letterInWord = letterIsInWord(enterLetter,guessing_a_word);
       // si la lettre n'est pas dans le mot on compte une erreur
       if(!letterInWord){
            numbOfFails++; //************************************************************** incrément du numboffail avant le for (plus logique et pratique)
            // affiochage dans la console
            for (let i = 0;i<numbOfFails;i++){ 
                console.log(hangManArray[i]);   
                //----------------------
                } 
            //affichage sur la page
            imagePendu.style.height = (32*numbOfFails)+"px"; //************************ on augmente la taille de l'image
            }
        wordInProgress = replaceCharacters(guessing_a_word,typedLetter); 
         // affiche le mot mystère en affichant des * pour les lettres non devinées 
        penduWord.textContent = wordInProgress;
    }
   while(numbOfFails < 8 && wordInProgress.indexOf("*") != -1);
   if (wordInProgress.indexOf("*") == -1) {alert ("yeah!")}
    else {alert ("t'es mort")}
}
jeuDuPendu();