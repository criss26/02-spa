import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  
  heroes:Heroe[] = [];


  //en el contructor del componente declaramos los servicios
  constructor(private _heroesService:HeroesService) {//mucho antes de la renderizacion.
      console.log("constructor");//Esto se va a ejecutar antes que el ngOnInit!!!
  }

  ngOnInit() {// cuando la pagina ya esta renderizada.
      console.log("ngOnInit");//Esto se va a ejecutar despues del contructor!!!
      this.heroes = this._heroesService.getHeroes();
      console.log(this.heroes);
  }

}
