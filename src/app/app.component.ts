import { Component, Input, OnInit } from '@angular/core';
import {MiServicioService} from '../app/services/mi-servicio.service'
import { Observable } from 'rxjs';
import {Personajes} from "./models/personaje-star-war"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    console.log('El componente se ha inicializaco 01')
  }


}
