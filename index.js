const fs = require('fs');
const f = require('./functions');


// 
async function main() {
    // console.log(getSrts);
    readDir('./legendas').then(f.getSrts).then(console.log)

}


function readDir(dir) {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (err, file) => {
            err ? reject(err) : resolve(file)
        })
    })
}

main()