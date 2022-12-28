import { Component, OnInit } from '@angular/core';
import { MiServicioService } from '../services/mi-servicio.service';
import { Personajes } from '../models/personaje-star-war';
import { response } from 'express';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{

	
	persona: any= [];


	constructor(public MiServicioService:MiServicioService){ }
	
	ngOnInit(): void{
	  console.log("El componente se ha inicializado");
	  this.MiServicioService.getPersonajes()
	  .subscribe( (response: Personajes) => this.persona = response)(console.log("aqui estoy", Response));
	   
	}



/* 
alumnosArray: Alumnos[] = [
    {"id":1,
    	"name":"Alexis",
    	"age":26,
    	"birthplace":"Sonora",
    	"status":"active",
    	"gendre":"h"
    	
    	},
    	{"id":2,
    	"name":"Azucena",
    	"age":31,
    	"birthplace":"Jalisto",
    	"status":"active",
    	"gendre":"m"
    	
    	},
    	{"id":3,
    	"name":"Chucho",
       	"age":14,
    	"birthplace":"Mazatlan, Sinaloa",
    	"status":"active",
    	"gendre":"h"
    	
    	},
    	{"id":4,
    	"name":"Diana",
    	"age":21,
    	"birthplace":"Veracruz",
    	"status":"active",
    	"gendre":"m"
    	
    	}
]
	 */

/* 
selectedAlumnos: Alumnos = new Alumnos()
	MiServicioService: any;
	Personaje: any;
	persona: any;

openOrEdit(alumnos: Alumnos){
         this.selectedAlumnos= alumnos;
         }

 addOrEdit() {
  if(this.selectedAlumnos.id === 0){
	  this.selectedAlumnos.id = this.alumnosArray.length +1;
		this.alumnosArray.push(this.selectedAlumnos);
       
   }

    this.selectedAlumnos = new Alumnos();
}


 delete(){
     if(confirm("Estas seguro de querer eliminarlo??")){
        this.alumnosArray = this.alumnosArray.filter(x => x != this.selectedAlumnos);
        this.selectedAlumnos = new Alumnos();
     }
    
 } */
 

}

