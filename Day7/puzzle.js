const data = require('./data');


const dataCD = data.split('$ cd ');
const dataCDsplit = dataCD.map(elem => elem.split('\n'));
const dataClean = dataCDsplit.filter(elem => elem.length > 2);

const directories = [];
for (const elem of dataClean) {
    let size = 0;
    const name = elem[0];
    const contenu = [];
    for (let i = 2; i < elem.length; i++){
        const dirElem = elem[i];
        if (dirElem.includes('dir')) {
            contenu.push(dirElem.slice(4))
        } else if (parseInt(dirElem)) {
            size += parseInt(dirElem);
        }
    }

    const directory = {
        name,
        contenu,
        size
    }
    directories.push(directory);
}

const origin = directories[0];
// console.log(origin);

function calcSize(object) {
    for (const directory of object.contenu) {
        const child = directories.find(elem => elem.name === directory);
        // console.log(child);
        if (child.contenu.length) {
            calcSize(child);            
        }
        return object.size += child.size;
    }
}

function calc(string){
    const directory = directories.find(elem => elem.name === string);
    for (const child of directory.contenu) {
        if (child.contenu.length) {
            calc(child);
        }
        directory.size += child.size;
    }
}

calc(directories[0].name)


// calcSize(origin);




console.log(directories);