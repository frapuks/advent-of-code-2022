const data = require('./data');

// transformer la string en tableau
const sacsStr = data.split('\n');

// * Partie 1
// découpage de chaque sac en 2 parties
let sacsTab = [];
for (const sac of sacsStr) {
    const length = sac.length;
    const middle = length/2;
    const part1 = sac.substring(0, middle);
    const part2 = sac.substring(middle);
    sacsTab.push([part1, part2]);
}

// trouver la lettre qui se retrouver dans les 2 parties de chaque sac
const priorityList = [];
for (const sac of sacsTab) {
    const part1 = sac[0];
    const part2 = sac[1];
    for (let i = 0; i < part1.length; i++) {
        const lettre = part1.charAt(i)
        const find = part2.indexOf(lettre);
        if (find >= 0) {
            priorityList.push(lettre)
            break;
        }
    }
}

// Calculer le total des priotités
let result = 0;
// Création d'une string avec 0 devant pour que chaque index corresponde à la valeur de priorité de chaque lettre
const alphabetWithIndex = '0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// calculer la valeur de chaque lettre et l'additionner à result
for (const lettre of priorityList) {
    result += alphabetWithIndex.indexOf(lettre);
}

console.log(result);
// résultat : 7997



// * Partie 2
// groupe de 3
let allGroups = [];
for (let i = 0; i < sacsStr.length; i+=3) {
    let group = [sacsStr[i], sacsStr[i+1], sacsStr[i+2]];
    allGroups.push(group);
}


let result2 = 0;
// pour chaque groupe de 3 on va chercher la lettre correspondant au badge
for (const group of allGroups) {
    const sac1 = group[0];
    const sac2 = group[1];
    const sac3 = group[2];
    // Pour chaque lettre de l'alphabet, on vient vérifier si elle existe dans les 3 strings et on ajoute la valur de son index au résultat
    for (let i = 0; i < alphabetWithIndex.length; i++) {
        const lettre = alphabetWithIndex.charAt(i);
        if (sac1.includes(lettre) && sac2.includes(lettre) && sac3.includes(lettre)) {
            badgePriority = i;
            break;
        }
    }
    result2 += badgePriority;
}

console.log(result2);
// resultat : 2545