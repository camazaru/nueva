import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

 // private API_SERVER = "https://swapi.dev/api/people"

  constructor(public http:HttpClient){ console.log('Servicio HTTP') }

getPersonajes():any{
  return this.http.get('https://swapi.dev/api/people')
}

  }




