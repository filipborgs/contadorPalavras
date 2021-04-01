const fs = require('fs');
const f = require('./functions');
const result = {}

async function main() {
    //lendo diretorio
    readDir('./legendas').then(f.getSrts).then(readLines)

}
function readLines(arr) {
    for (const fileName of arr) {
        //lendo arquivos
        const patch = `./legendas/${fileName}`;
        const file = fs.readFileSync(patch).toString();

        //removendo tags
        palavras = file.replace(/<[a-z="0-9 #]+>|<\/[a-z="0-9 #]+>/gi, '');
        //separando palavras
        palavras = palavras.match(/[a-z]+'?[a-z]+/gi);
        
        //contando palavras
        for (let key of palavras) {
            key = key.toLowerCase();
            result[key] = result[key] > 0 ? ++result[key] : 1;
        }
    }
    fs.writeFileSync('palavras.json', JSON.stringify(result))

}


function readDir(dir) {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, file) => {
            err ? reject(err) : resolve(file)
        })
    })
}

main()