import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './componets/register/register.component';
import { LoginComponent } from './componets/login/login.component';
import { HomeComponent } from './componets/home/home.component';
// import { ServicioComponent  } from 'src/app/componets/servicio/servicio.component';
import { ProductoComponent } from './componets/producto/producto.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: '**', component: LoginComponent }
];


export const APPROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
