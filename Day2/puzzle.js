// récupérer les données
let strategy = require('./data');

// transformer la string en tableau
strategy = strategy.split('\n');

// transformer la string de chaque round en tableau de 2 éléments
let strategyTab = [];
for (const round of strategy) {
    const roudTab =  round.split(' ');
    strategyTab.push(roudTab);
}

// * Partie 1

// A => Pierre <= X 
// B => Papier <= Y
// C => Ciseau <= Z

// calcul du résultat
let total1 = 0;
for (const round of strategyTab) {
    let count = 0;
    count += getPointsForChoice1(round[1]);
    count += getPointsForResult1(round[0], round[1]);
    total1 += count;
}

// récupérer le résultat
console.log(total1);
// résultat : 11873

// fonctions
function getPointsForChoice1(str) {
    // points pour le choix
    if (str === 'X') {
        return 1;
    } else if (str === 'Y') {
        return 2;
    } else if (str === 'Z') {
        return 3;
    }
}
function getPointsForResult1(dealer, player) {
    if ((dealer === 'A' && player === 'X') || (dealer === 'B' && player === 'Y') || (dealer === 'C' && player === 'Z')) {
        // égalité
        return 3;
    } else if ((dealer === 'A' && player === 'Z') || (dealer === 'B' && player === 'X') || (dealer === 'C' && player === 'Y')) {
        // défaite du joueur
        return 0;
    } else {
        // victoire
        return 6;
    }
}

// * Partie 2

// A => Pierre
// B => Papier
// C => Ciseau
// X => Défaite => 0 pts
// Y => Match nul => 3 pts
// Z => Victoire => 6 pts

// calcul du résultat
let total2 = 0;
for (const round of strategyTab) {
    let count = 0;
    count += getPointsForResult2(round[1]);
    count += getPointsForChoice2(round[0], round[1]);
    total2 += count;
}

// récupérer le résultat
console.log(total2);
// résultat : 12014

// fonctions
function getPointsForResult2(str) {
    if (str === 'X') {
        // X => Défaite => 0 pts
        return 0;
    } else if (str === 'Y') {
        // Y => Match nul => 3 pts
        return 3;
    } else if (str === 'Z') {
        // Z => Victoire => 6 pts
        return 6;
    }
}
function getPointsForChoice2(dealer, player) {
    if (player === 'X') {
        // Défaite
        return getPointsForLose(dealer);
    } else if (player === 'Y') {
        // match nul
        return getPointsForDraw(dealer);
    } else if (player === 'Z') {
        // victoire
        return getPointsForVictory(dealer);
    }
}
function getPointsForLose(dealer) {
    if (dealer === 'A') {
        // A => Pierre
        // Défaite => Ciseau => 3pts
        return 3;
    } else if (dealer === 'B') {
        // B => Papier
        // Défaite => Pierre => 1pt
        return 1;
    } else if (dealer === 'C') {
        // C => Ciseau
        // Défaite => Papier => 2pts
        return 2;
    }
}
function getPointsForDraw(dealer) {
    if (dealer === 'A') {
        // A => Pierre => 1 pt
        return 1;
    } else if (dealer === 'B') {
        // B => Papier => 2pts
        return 2;
    } else if (dealer === 'C') {
        // C => Ciseau => 3pts
        return 3;
    }
}
function getPointsForVictory(dealer) {
    if (dealer === 'A') {
        // A => Pierre
        // Victoire => Papier => 2pts
        return 2;
    } else if (dealer === 'B') {
        // B => Papier
        // Victoire => Ciseau => 3pts
        return 3;
    } else if (dealer === 'C') {
        // C => Ciseau
        // Victoire => Pierre => 1pt
        return 1;
    }
}