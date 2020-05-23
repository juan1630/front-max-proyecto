import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Producto } from '../../models/producto.models';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: Producto[]=[];
   id = 0;
  // tslint:disable-next-line:variable-name
  constructor( public _pService: ProductoService,
               public activatedRoute: ActivatedRoute,
               public router: Router ) {

                 activatedRoute.params.subscribe( params => {
                   this.id = params.id;
                  });
  }

  ngOnInit() {
    this.cargarUno();
  }


  cargarUno() {
    this._pService.cargarProducto(this.id)
    .subscribe( (data: any ) => {
      this.producto = data;
      console.log( this.producto );
     });
  }


  // funcion a quitar

  actualizar(  valor: NgForm ) {
    if (  valor.invalid ) {
      return;
    }
    console.log( this.producto );

    this._pService.actualizarProducto(this.id, this.producto[0])
    .subscribe( (data: any)  =>  {
      console.log(data.producto);
      this.router.navigate(['/producto', data.producto._id]);
    } );
  }

}
