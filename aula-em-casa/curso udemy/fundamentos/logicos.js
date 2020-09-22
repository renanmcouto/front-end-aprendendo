function comprar(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(comprar(true, true))
console.log(comprar(true, false))
console.log(comprar(false, true))
console.log(comprar(false, false))

/*  v e v = v
    v e f = f
    f e ? = f
    
    v ou f = v
    f ou v = v
    v/f ou ? = ?

    v xor v = f
    v xor f = v
    f xor v = v 
    f xor f = f

    !v = f
    !f = v
*/    