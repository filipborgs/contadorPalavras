
function getSrts(arr) {
    const srts = file => file.match(/\.srt$/);
    return arr.filter(srts);
}



module.exports = {
    getSrts
}