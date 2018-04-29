import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-portafolio',
  templateUrl: './item-portafolio.component.html',
  styles: []
})
export class ItemPortafolioComponent  {

  constructor(public route:ActivatedRoute) {
    route.params.subscribe(parametros=>{
      console.log(parametros);
      console.log(parametros['id']);     
    });
   }
}
