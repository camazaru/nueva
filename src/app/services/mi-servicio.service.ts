import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {
  private API_SERVER = "https://swapi.dev/api/people"

  constructor(public http:HttpClient){  }

  public getPersonajes():Observable<any>{
return this.http.get(this.API_SERVER)

  }
}
