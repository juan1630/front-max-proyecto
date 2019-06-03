import { ProductoService } from './../../services/producto.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos: [] = [];
  constructor( public _pService: ProductoService ) { }

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


  agregar( f: NgForm ) {
    console.log( f.value );
    this._pService.agregarProduct( f.value )
    .subscribe( (data: any ) => {
      console.log(data);
      this.cargarProductos();
     });
  }

}
