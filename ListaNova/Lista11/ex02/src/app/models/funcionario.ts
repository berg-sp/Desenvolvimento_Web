export default class Funcionario {
  nome: string | undefined;
  cargo!: string;
  funcional: number | undefined;
  admitidoEm: Date | undefined;

  constructor(nome: string, cargo: string, funcional: number, admitidoEm: Date) {
    this.nome = nome;
    this.cargo = cargo;
    this.funcional = funcional;
    this.admitidoEm = admitidoEm;
  }
}
