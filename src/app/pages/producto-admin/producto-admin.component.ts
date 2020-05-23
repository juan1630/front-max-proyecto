import { Component, OnInit } from '@angular/core';


import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/producto.models';

@Component({
  selector: 'app-producto-admin',
  templateUrl: './producto-admin.component.html',
  styleUrls: ['./producto-admin.component.css']
})
export class ProductoAdminComponent implements OnInit {

  public productos:Producto[]=[];

    constructor(
    private _pService: ProductoService
  ) { }

  ngOnInit() {
    this.cargarProductos();

  }

  cargarProductos() {
    this._pService.cargarItems()
    .subscribe( (data: any) => {
      console.log( data );
      this.productos = data;
   });
}

}
