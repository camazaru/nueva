import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter } from 'rxjs';
import { MiServicioService } from '../services/mi-servicio.service';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent{

	persona:any = []
	

	constructor(private miServicioService:MiServicioService){ 
		this.miServicioService.getPersonaje()
		.subscribe(	response=> {
			this.persona=response
		})

	}
	
	
	 
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
 


