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
  public categorias: string[]=[];
  public role: string;


  constructor( public _pService: ProductoService ) { }

  ngOnInit() {
    this.cargarProductos();
   let  usuarioLS =  JSON.parse( localStorage.getItem('usuario'));
    this.role = usuarioLS.role;

  }


  cargarProductos() {
    this._pService.cargarItems()
    .subscribe( (data: any) => {
      console.log( data );
      this.productos = data;
   });
}



eliminarProducto( productoId ){

  this._pService.eliminarProducto( productoId )
  .subscribe( (data) => {
      console.log(data);
      this.cargarProductos();

  } )

}



}
