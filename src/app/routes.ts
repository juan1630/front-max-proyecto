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
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { ProductoAdminComponent } from './pages/producto-admin/producto-admin.component';
import { ProductoUnoAdminComponent } from './pages/producto-uno-admin/producto-uno-admin.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'servicio', component: ServicioComponent },
    { path: 'servicio/admin' , component: AdminServiceComponent },
    {  path: 'servicio/:id', component: ServcioIDComponent },
    { path: 'pagos/entrega/equipo', component: EntregaEquipoComponent },
    {  path: 'homeAdmin' , component: HomeAdminComponent },
    { path: 'productos/admin/all', component: ProductoAdminComponent },
    { path: 'productos/admin/one/:id', component: ProductoUnoAdminComponent },
    { path: '**', component: LoginComponent }
];


export const APPROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
