import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute,Router } from '@angular/router'; //para obtener los parametros de la url

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:String;

  constructor(private router:Router,
              private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) { 
    console.log("constructor");//Esto se va a ejecutar antes que el ngOnInit!!!
  }

  ngOnInit() {// cuando la pagina ya esta renderizada.
    console.log("ngOnInit");//Esto se va a ejecutar despues del contructor!!!
  
    this.activatedRoute.params.subscribe (/*nos suscribimos y aqui va a regresar los parametros*/
      params => {console.log(params);
                 console.log(params['termino']);
                 this.termino = params['termino'];
                 this.heroes = this._heroesService.buscarHeroes(params['termino']);
                 console.log(this.heroes); 
                });
  }

  verHeroe(idx:number){
    console.log(idx);
    //tenemos que importar el router.
    //con esto redireccionamos
    this.router.navigate(['/heroe',idx]);
  }

}