import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ProductosService {
  
  productos:any [] = [];
  cargando_productos:boolean = false;

  constructor( private http:Http ) {
      this.cargar_productos();
   }
  cargar_productos(){
    this.cargando_productos = true;
    this.http.get('https://portafolioapp-dfc40.firebaseio.com/productos_idx.json')
        .subscribe(productos => {
          console.log(productos.json());
          setTimeout(() => {
            this.cargando_productos = false;
            this.productos = productos.json();  
          }, 1500);
        });
  }
}
