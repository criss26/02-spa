import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  //Con el decorador Input indico qu puede veneir de afuera.
  @Input() heroe: any = {}; //creamos un objeto para el heroe
  @Input() index: number;

  //Ejemplo con output
  //@Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router:Router) {
    //this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {

  }

  
  verHeroe(){
    
    console.log(this.index);
    //tenemos que importar el router.
    //con esto redireccionamos
    this.router.navigate(['/heroe',this.index]);
    
   //ejemplo como crear un evento que escucha el padre
   //this.heroeSeleccionado.emit(this.index);
  }

}
