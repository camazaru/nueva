import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Personaje } from '../models/personaje-star-war';


@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  private Personaje: Personaje = { 
    name:      "",
    height:    "" ,
    mass:       "",
    hair_color: "",
    skin_color: "",
    eye_color: "" ,
    birth_year: "",
    homeworld: "" ,
    films:      [],
    species:    [],
    vehicles:   [],
    starships:  [],
    url:       "" ,
   }


   private starWarUrl = "https://swapi.dev/api/people"
  constructor(private http: HttpClient) { }

public getPersonaje(): Observable<Personaje> {
return this.http.get<Personaje>(this.starWarUrl);

  }
  
}
