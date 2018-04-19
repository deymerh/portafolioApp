import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
 constructor(public _is:InfoPageService){ }

}
