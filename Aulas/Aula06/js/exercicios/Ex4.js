function imprimirNome(pessoa) {
    console.log(pessoa.nome)
    console.log(pessoa.sobrenome)
    console.log(pessoa.idade)
    console.log(pessoa.endereco)
    console.log(pessoa.telefone)
}

let pessoa1 = {
    nome: 'Jorge' ,
    sobrenome: 'Bergoglio' ,
    idade: 86 ,
    endereco: 'Catedral de São Pedro, Praça de São Pedro, Vaticano' ,
    telefone: '+39.06.698.45793'
}

let pessoa2 = {
    nome: 'Joseph' ,
    sobrenome: 'Ratzinger' ,
    idade: 95 ,
    endereco: 'Diocese de Roma, Praça de São Pedro, Vaticano' ,
    telefone: '+39.06.698.45793'
}

console.log(`Bem vindo(a)! ${pessoa1.nome} ${pessoa1.sobrenome} você tem ${pessoa1.idade} anos
    suas informações de contato são ${pessoa1.telefone}
    endereco cadastrado ${pessoa1.endereco}`)

console.log(`Bem vindo(a)! ${pessoa2.nome} ${pessoa2.sobrenome} você tem ${pessoa2.idade} anos
    suas informações de contato são ${pessoa2.telefone}
    endereco cadastrado ${pessoa2.endereco}`)