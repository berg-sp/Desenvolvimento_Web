export default class Produto {
  nome: string;
  descricao: string;
  valor: number;
  emEstoque: boolean;
  publicadoEm: Date;

  constructor(nome: string, descricao: string, valor: number, emEstoque: boolean, publicadoEm: Date) {
    this.nome = nome;
    this.descricao = descricao;
    this.valor = valor;
    this.emEstoque = emEstoque;
    this.publicadoEm = publicadoEm;
  }
}
