const data = require('./data');

function findSignal(string) {
    for (let i = 3; i < data.length; i++) {
        const char1 = data.charAt(i - 3);
        const char2 = data.charAt(i - 2);
        const char3 = data.charAt(i - 1);
        const char4 = data.charAt(i);
        if (char1 !== char2 && char1 !== char3 && char1 !== char3 && char1 !== char4 && char2 !== char3 && char2 !== char4 && char3 !== char4) {
            const signal = char1 + char2 + char3 + char4;
            const charNumber = i + 1;
            return `${charNumber} (${signal})`;
        }
    }
}

const result = findSignal(data);

console.log(result);
// resultat : 1598 (nmjl)

function findMessage(string) {
    for (let i = 14; i < string.length; i++) {
        const indexFin = i
        const indexDepart = indexFin - 14;
        const stringWith14Char = string.slice(indexDepart, indexFin);
        const array = stringWith14Char.split('');
        let singleLetters = 0;
        for (const letter of array) {
            const arrayOfThisLetter = array.filter(elem => elem === letter)
            if (arrayOfThisLetter.length === 1) {
                singleLetters++;
            }
        }
        if (singleLetters === 14) {
            return i;
        }
    }
}

const result2 = findMessage(data);
console.log(result2);
// resultat : 2414