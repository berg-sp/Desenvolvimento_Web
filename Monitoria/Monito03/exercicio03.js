/**
1 - Crie um arquivo JS (javascript) contendo 3 objetos representando um(a) artista/banda com as seguintes informações:
Nome do(a) artista/banda 
Ano de lançamento do primeiro CD
Uma lista de melhores músicas
Uma lista com as informações dos integrantes - LEIA A OBSERVAÇÃO 
Estilo da banda/artista

OBS: A lista de integrantes deve guardar objetos com as seguintes informações:
Nome completo
país de origem
idade
*/

var artistaRaimundos = {    
    nome: "Raimundos",
    ano: 1999,
    listaMelhoresMusica: ["Amor", "Ideia", "Coração"],
    listaIntegrantes: [
        {
            nomeCompleto: "Fabio",
            paisOrigem: "Brasil",
            idade: 32
        },
        {
            nomeCompleto: "Fernando",
            paisOrigem: "Brasil",
            idade: 28
        },
        {
            nomeCompleto: "Paulo",
            paisOrigem: "Brasil",
            idade: 25
        }
    ],
    estilo: "Rock"
};
var artistaBandaEva = {
    nome: "Banda Eva",
    ano: 2000,
    listaMelhoresMusica: ["Cheiro de amor", "Ache", "Viva"],
    listaIntegrantes: [
        {
            nomeCompleto: "Ivete",
            paisOrigem: "Brasil",
            idade: 32
        },
        {
            nomeCompleto: "Fer",
            paisOrigem: "Brasil",
            idade: 28
        },
        {
            nomeCompleto: "Pepe",
            paisOrigem: "Brasil",
            idade: 25
        }
    ],
    estilo: "Rock"
};
var artistaJao = {
    nome: "Jão",    
    ano: 2020,
    listaMelhoresMusica: ["Cheiro de amor", "Ache", "Viva"],
    listaIntegrantes: [
        {
            nomeCompleto: "Ivete",
            paisOrigem: "Brasil",
            idade: 32
        },
        {
            nomeCompleto: "Fer",
            paisOrigem: "Brasil",
            idade: 28
        },
        {
            nomeCompleto: "Pepe",
            paisOrigem: "Brasil",
            idade: 25
        }
    ],
    estilo: "Rock"
};

//console.log(artistaRaimundos);
//console.log(artistaBandaEva);
//console.log(artistaJao);

/** Após a criação dos 3 objetos, crie uma lista chamada database (a lista deve ser criada vazia) */
var database = [];

/** Adicione os 3 objetos criados de artistas/bandas na lista (database).  */
database.push(artistaRaimundos);
database.push(artistaBandaEva);
database.push(artistaJao);

/** Imprima a lista (database) no console */
console.log("Database: ");
for(let i = 0; i < 3; i++) {    
    console.log(database[i]);    
}

/** Ordene a lista (database). 
Imprima a lista (database) no console.
*/
console.log("Ordene a lista (database). ");
database.sort();
for(let i = 0; i < 3; i++) {    
    console.log(database[i]);    
}

/**
Remova o item da lista (database)
Imprima a lista (database) no console.      
*/
console.log("Remova o item da lista (database):")
// database.pop();
database.splice(0, 1);
for(let i = 0; i < 3; i++) {    
    console.log(database[i]);    
}