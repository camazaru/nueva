import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map } from 'rxjs/operators'

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




