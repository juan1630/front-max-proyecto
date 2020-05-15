import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Servicios } from 'src/app/interfaces/servicios.interfaces';

@Component({
  selector: 'app-entrega-equipo',
  templateUrl: './entrega-equipo.component.html',
  styleUrls: ['./entrega-equipo.component.css']
})
export class EntregaEquipoComponent implements OnInit {

  public servicio:Servicios[] = [];

  constructor(
    private productoService: ProductoService
  ) { }

  ngOnInit() {
  }


  buscarPedidos( f ){

    this.productoService.getEquimentByName( f.value.nombre )
    .subscribe( (data:any) => {
      console.log(data);
      this.servicio = data;
      console.log( this.servicio );
    })
  }

}
