import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Servicios } from 'src/app/interfaces/servicios.interfaces';

@Component({
  selector: 'app-admin-service',
  templateUrl: './admin-service.component.html',
  styleUrls: ['./admin-service.component.css']
})
export class AdminServiceComponent implements OnInit {

  public servicios: Servicios[]=[];

  constructor(
    public productoService: ProductoService
  ) { }

  ngOnInit() {

    this.productoService.getService()
    .subscribe( (data:any)  => {
        console.log( data );
        this.servicios = data.servicios;
        console.log( this.servicios );
    } )
  }

}
