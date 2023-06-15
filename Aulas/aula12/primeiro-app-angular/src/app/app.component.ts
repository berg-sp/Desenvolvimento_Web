import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public message: string = 'Olá angular!'
  public nome: string = 'Fulano';
  public idade: number = 20;
  public profissao: string = 'DEV Javascript';

  public listaAnimais = [{id: "546f6sd76fs", nome: "Dovahiin", raca: "SRD", peso: "25"}, {id: "88176767", nome: "Penelope", raca: "SRD", peso: "25"}];

  public listaNumeros = [1,2, 3, 4, 5, 6, 7, 8, 9, 10];

}
