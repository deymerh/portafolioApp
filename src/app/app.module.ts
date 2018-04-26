import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http'

import { app_routing } from './app.routes';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ItemPortafolioComponent } from './components/item-portafolio/item-portafolio.component';

//infoPage services
import { InfoPageService } from './services/info-page.service';
import { ProductosService } from './services/productos.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemPortafolioComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule
  ],
  providers: [ 
    InfoPageService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
