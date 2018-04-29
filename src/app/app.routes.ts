
import {  Routes, RouterModule, Router} from "@angular/router";

import {AboutComponent,
        PortafolioComponent,
        ItemPortafolioComponent }
     from "./components/index.paginas";

const app_routes: Routes = [
    { path: 'home' , component: PortafolioComponent},
    { path: 'about' , component: AboutComponent},
    { path: 'producto/:id' , component: ItemPortafolioComponent },
    { path: '**' , pathMatch: 'full', redirectTo: 'home' }

];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true } );