import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class InfoPageService {
  info:any = {};
  infoCargada:boolean = false;
  infoCargada_sobre_nosotros:boolean = false;
  equipo:any[] = [];

  constructor( public http:Http ) {
    this.carga_info();
    this.carga_sobre_nosotros();
   }

    public carga_info(){
      this.http.get("assets/data/info.pagina.json")
              .subscribe(data => {
                this.info = data.json();
                this.infoCargada = true;
              });  
    }
    public carga_sobre_nosotros(){
      this.http.get("https://portafolioapp-dfc40.firebaseio.com/equipo.json")
              .subscribe(data => {
                this.equipo = data.json();
                this.infoCargada_sobre_nosotros = true;
                console.log(data.json());
                
              });
    }
}
