import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-regalos',
  templateUrl: './lista-regalos.component.html',
  styleUrls: ['./lista-regalos.component.css']
})
export class ListaRegalosComponent implements OnInit {
  regalos: string[];
  constructor() {
    this.regalos = ['Pelota', 'Polera', 'Perfume', 'Zapatillas'];
   }

  ngOnInit(): void {
  }

}
