import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Result } from '../models/personaje-star-war';



@Injectable({
  providedIn: 'root'
})
export class MiServicioService {


  constructor(private http:HttpClient){}

getPersonaje(){
  return this.http.get<Result[]>('https://swapi.dev/api/people/')

  
}

  }




