function imprimirNome(pessoa) {
    console.log(pessoa.nome)
    console.log(pessoa.sobrenome)
    console.log(pessoa.idade)
}

let pessoa1 = {
    nome: 'Carol' ,
    sobrenome: 'Wojtyla' ,
    idade: 78
}

console.log(`Seu nome completo é ${pessoa1.nome} ${pessoa1.sobrenome} você tem ${pessoa1.idade}`)