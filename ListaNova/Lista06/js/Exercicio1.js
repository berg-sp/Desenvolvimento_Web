function maiorIdade(listaPessoas) {
    for(var i = 0; i < listaPessoas.length; i++) {
        if (listaPessoas[i].idade >= 18) {
            console.log(`Seja  bem vindo(a)! Você se chama ${listaPessoas[i].nome} ${listaPessoas[i].sobrenome} e tem ${listaPessoas[i].idade} anos e é maior de idade.`)
        } else {
            console.log(`Seja  bem vindo(a)! Você se chama ${listaPessoas[i].nome} ${listaPessoas[i].sobrenome} e tem ${listaPessoas[i].idade} anos e não é maior de idade.`)
        }
    }
}

function verificarNome(listaPessoas) {

    for(let j = 0; j < listaPessoas.length; j++) {
        var tamanho = listaPessoas[j].nome.length + listaPessoas[j].sobrenome.length
        if (tamanho <= 3) {
            console.log(`Erro! Nome invalido, nome e sobrenome devem ser maiores que 3 caracteres.`)
        } else {
            if (tamanho >= 50) {        
                console.log(`Erro! Nome invalido, nome e sobrenome devem ser menores que 50 caracteres.`)
            }
        }
    }
}

function quantidadePessoas(listaPessoas) {
        console.log(`A quantidade de pessoas é :  ${listaPessoas.length}`)
}

let listaPessoas = [
    {
        nome: "Fulano",
        sobrenome: "Santos",
        idade: 18
    },
    {
        nome: "Ciclano",
        sobrenome: "Ribeiro",
        idade: 17
    },
    {
        nome: "Beltrano", 
        sobrenome: "Silva",
        idade: 13
    }
]

maiorIdade(listaPessoas);
verificarNome(listaPessoas);
quantidadePessoas(listaPessoas);