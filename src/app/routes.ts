import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './componets/register/register.component';
import { LoginComponent } from './componets/login/login.component';
import { HomeComponent } from './componets/home/home.component';
// import { ServicioComponent  } from 'src/app/componets/servicio/servicio.component';
import { ProductoComponent } from './componets/producto/producto.component';
import { ServicioComponent } from './componets/servicio/servicio.component';
import { AdminServiceComponent } from './componets/servicioAdmin/admin-service/admin-service.component';
import { ServcioIDComponent } from './componets/servicios/servcio-id/servcio-id.component';
import { EntregaEquipoComponent } from './componets/pagos/entrega-equipo/entrega-equipo.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'servicio', component: ServicioComponent },
    { path: 'servicio/admin' , component: AdminServiceComponent },
    {  path: 'servicio/:id', component: ServcioIDComponent },
    { path: 'pagos/entrega/equipo', component: EntregaEquipoComponent },
    { path: '**', component: LoginComponent }
];


export const APPROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
