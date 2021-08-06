const Rhash = require ("rhash");
const tx = "console log"
const key = "487"
const encrpt = Rhash.hash(key,tx)
console.log(encrpt)

function ecyp(x,y){
    const ecp = Rhash.hash(x,y)
    return ecp
}
module.exports = {
    ecyp: ecyp,
}