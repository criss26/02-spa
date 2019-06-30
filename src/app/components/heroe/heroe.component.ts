import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //para obtener los parametros de la url
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {}; //creamos un objeto para el heroe

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService ) {


    this.activatedRoute.params.subscribe (/*nos suscribimos y aqui va a regresar los parametros*/
                                          params => {console.log(params);
                                                     console.log(params['id']);
                                                    
                                                     this.heroe = this._heroesService.getHeroe(params['id']);
                                                     console.log(this.heroe); 
                                                    });


   }

  ngOnInit() {
  
  }

}
