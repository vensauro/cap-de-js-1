for(var i = 0; i < 5; i++)
    console.log(i)

// agoraa voce espera que isso abaixo funcione?
console.log(i)

// e se vc criar a variavel dentro do if

if(true) {
    var c = "Bom dia"
} else {
    var d = "Mal dia"
}

console.log(c)

// o d teve hoisting por isso não deu erro
console.log(d)

// isso de não ter deixa o propenso a mais bugs
// é um comportamento diferente de todas as outras linguagens
// além que vc poderá se sentir intimidado a usar a variavel
// com mesmo nome por não saber oq tem
