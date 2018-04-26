import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
import { ProductosService } from '../../services/productos.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
 constructor(public _is:InfoPageService,
            public _ps:ProductosService)
            { }

}
