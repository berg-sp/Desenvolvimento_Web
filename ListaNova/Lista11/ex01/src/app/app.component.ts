import { Component } from '@angular/core';
import Produto from './models/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public listaProdutos: Produto[] = new Array<Produto>();

  constructor() {
    this.listaProdutos.push(new Produto("Bolu de murangu", "Hmmm bolu de murangu", 100, "https://bombocadosbs.com.br/wp-content/uploads/2020/04/2-1.jpg"));
    this.listaProdutos.push(new Produto("Bolo Marta Rocha", "Gostoso Bolo Marta Rocha", 101, "https://bombocadosbs.com.br/wp-content/uploads/2020/03/marta-rocha.jpg"));
    this.listaProdutos.push(new Produto("Bolo Raphaello", "Que bom do Bolo Raphaello", 102, "https://bombocadosbs.com.br/wp-content/uploads/2020/04/6.jpg"));
    this.listaProdutos.push(new Produto("Bolo Prestígio", "Prestigie sua comemoração", 103, "https://bombocadosbs.com.br/wp-content/uploads/2020/04/10.jpg"));
  }
}
