const data = require('./data');
const dataArray = data.split('\n');

// scinder les paires en 2 élements distincts
const arraySplit = dataArray.map(pair => pair.split(','));
let arrayPairSplit =[];
for (const pair of arraySplit) {
    const pairSplit = [pair[0].split('-'), pair[1].split('-')];
    arrayPairSplit.push(pairSplit);
}

// * PARTIE 1

// vérifier si une paire est entièrement contenue dans l'autre
let result1 = 0
for (const pair of arrayPairSplit) {
    const section1min = parseInt(pair[0][0]);
    const section1max = parseInt(pair[0][1]);
    const section2min = parseInt(pair[1][0]);
    const section2max = parseInt(pair[1][1]);
    if (section1min >= section2min && section1max <= section2max) {
        // si la section 1 est incluse dans la 2
        result1 ++;
    }else if (section2min >= section1min && section2max <= section1max) {
        // si la section 2 est incluse dans la 1
        result1 ++;
    }
}

console.log(result2);
// resultat : 513

// * PARTIE 2

let result2 = 0;
for (const pair of arrayPairSplit) {
    const section1min = parseInt(pair[0][0]);
    const section1max = parseInt(pair[0][1]);
    const section2min = parseInt(pair[1][0]);
    const section2max = parseInt(pair[1][1]);
    if ((section1min >= section2min && section1min <= section2max) || (section1max >= section2min && section1max <= section2max)) {
        // si une partie de la section 1 est incluse dans la 2
        result2 ++;
    } else if ((section2min >= section1min && section2min <= section1max) || (section2max >= section1min && section2max <= section1max)) {
        // si une partie de la section 1 est incluse dans la 2
        result2 ++;
    }
}

console.log(result2);
// resultat 878