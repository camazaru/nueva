import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Result } from '../models/personaje-star-war';
import {map } from 'rxjs/operators'
import { response } from 'express';




@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

 

  constructor(private http:HttpClient){
  }

getPersonaje(){
  return this.http.get<any>('https://swapi.dev/api/people/')
  .pipe(
  map(resp => resp['results'])

  );
  
}

  }




