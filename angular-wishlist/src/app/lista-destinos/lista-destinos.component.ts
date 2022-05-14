import { Component, HostBinding, OnInit } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  destinos: DestinoViaje[];
  constructor() { 
    this.destinos = [];
  }
  @HostBinding('attr.class') cssClass = 'col-md-4';
  ngOnInit(): void {
  }

  guardar(nombre:string, url: string):boolean {
    this.destinos.push(new DestinoViaje(nombre, url));
    console.log('array destinos', this.destinos);
    return false
  }
}
