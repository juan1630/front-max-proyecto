import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  public ServiceDB:any[] =[];

  public servicio = {
    nombreCliente: '',
    primerApellido :'',
    segundoApellido : '',
    email: '',
    telefono : '',
    marcaEquipo: '',
    modeloEquipo:'',
    fallaEquipo:'',
    accesoriosEquipo:'',
    adelanto: '',
    costoTotal: '',
    productos :''

  }

  constructor(
   public productoService: ProductoService
  ) { }

  ngOnInit() {
  }

  agregarServicio(){
    this.productoService.agregarServicio( this.servicio )
    .subscribe(  (data: any) => {
      console.log( data );
      this.ServiceDB = data;
    })
  }

}
