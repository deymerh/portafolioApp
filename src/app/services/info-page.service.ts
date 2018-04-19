import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
@Injectable()
export class InfoPageService {
  info:any = {};
  infoCargada:boolean = false;

  constructor( public http:Http ) {
    this.http.get("assets/data/info.pagina.json")
              .subscribe(data => {
                console.log(data.json());
                this.info = data.json();
                this.infoCargada = true;
              })
   }
    
    
}
