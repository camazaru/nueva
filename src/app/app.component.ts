import { Component, Input, OnInit } from '@angular/core';
import {MiServicioService} from '../app/services/mi-servicio.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
personajes:any;

constructor(public personaje:MiServicioService){ }

ngOnInit()
{
  this.personaje.getPersonajes().subscribe(
    (r) => {this.personajes = r; console.log(r)},
    (e) => {console.log(e)}
  )
}

}
