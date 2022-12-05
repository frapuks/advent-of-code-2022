const piles = require('./piles');
const moves = require('./moves');

// * PARTIE 1

// pour chaque move
for (const move of moves) {
    // on défini les piles de départ et d'arrivée
    const pileFrom = piles[move.from];
    const pileTo = piles[move.to];
    // On boucle autant de fois que le move le demande
    for (let i = 0; i < move.move; i++) {
        // récupérer le dernier élément de la pile de départ
        const elemMoved = pileFrom[pileFrom.length - 1];
        // le supprimer de la pile de départ
        pileFrom.pop();
        // l'ajouter dans la pile d'arrivée
        pileTo.push(elemMoved);
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
// resultat : MQSHJMWNH