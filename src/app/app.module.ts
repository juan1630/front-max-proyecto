import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { APPROUTES } from './routes';
import { AsideComponent } from './componets/aside/aside.component';
import { HomeComponent } from './componets/home/home.component';
import { ProductoComponent } from './componets/producto/producto.component';
import { ServicioComponent } from './componets/servicio/servicio.component';
import { AdminServiceComponent } from './componets/servicioAdmin/admin-service/admin-service.component';
import { ServcioIDComponent } from './componets/servicios/servcio-id/servcio-id.component';
import { EntregaEquipoComponent } from './componets/pagos/entrega-equipo/entrega-equipo.component';
// import { ServicioComponent } from './componets/servicio/servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AsideComponent,
    HomeComponent,
    ProductoComponent,
    ServicioComponent,
    AdminServiceComponent,
    ServcioIDComponent,
    EntregaEquipoComponent
  ],
  imports: [
    BrowserModule,
    APPROUTES,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
