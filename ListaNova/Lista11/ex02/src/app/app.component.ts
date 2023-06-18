import { Component } from '@angular/core';
import Produto from './models/produto';
import Funcionario from './models/funcionario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public listaProdutos: Produto[] = new Array<Produto>());
  public listaFuncionarios: Funcionario[] = new Array<Funcionario>());

  constructor() {

    this.listaProdutos.push(new Produto("pulsera", "pulsera Ouro 24k", 950, true, 20230405));
    this.listaProdutos.push(new Produto("colar", "colar Ouro 24k", 1080, true, 20230322));
    this.listaProdutos.push(new Produto("gargantilha", "gargantilha prata inoxidavel", 695, true, 20221115));
    this.listaProdutos.push(new Produto("anel", "anel Ouro 24k", 856, true, 20230207));
  }
}
