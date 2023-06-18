export default class Produto {
    nome: string;
    descricao: string;
    preco: number;
    image: string;

    constructor(nome: string, descricao: string, preco: number, image: string) {
      this.nome = nome;
      this.descricao = descricao;
      this.preco = preco;
      this.image = image;
    }
}
