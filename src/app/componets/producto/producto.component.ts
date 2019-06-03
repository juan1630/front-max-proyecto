import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  producto: [] = [];
   id = 0;

  constructor( public _pService: ProductoService,
               public activatedRoute: ActivatedRoute ) {
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

  actualizar(  valor: NgForm ) {
      console.log( valor.value );
      this._pService.actualizarProducto(this.id, valor.value);
  }

}
