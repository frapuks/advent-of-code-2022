const piles = require('./piles');
const moves = require('./moves');

// * PARTIE 2


for (let i = 0; i < moves.length; i++) {
    const pileFrom = piles[moves[i].from];
    const pileTo = piles[moves[i].to];
    const moveNumber = moves[i].move;
    // on crée un tableau temporaire qui va stocker les données de la pileFrom
    let temp = [];
    for (let index = 0; index < moveNumber; index++) {
        // on supprime la dernière valeur de pileFrome et on l'insère dans temp
        temp.push(pileFrom.pop());
    }
    for (let a = 0; a < temp.length; a++) {
        // on insère les valeurs de temp dans pileTo en partant du dernier
        pileTo.push(temp[temp.length - (1 + a)]);
    }
}

let result = '';
// Pour chaque pile
for (const pile in piles) {
    // on récupère la pile en cours
    const currentPile = piles[pile];
    // on récupère le dernier élément de cette pile
    const lastElement = currentPile[currentPile.length - 1];
    // On l'ajoute au résultat
    result += lastElement;
}

console.log(result);
// resultat : LLWJRBHVZ