import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  productos: [] = [];

  public idProducto;


  constructor(
    public _pService: ProductoService
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



eliminarProducto( productoId ) {
  this._pService.eliminarProducto( productoId )
  .subscribe((data) => {
    console.log(data)
    this.cargarProductos();
  })
}


// verImagen(  archivo:File, idProducto )  {

//   this.imagenSubir = archivo;
//   this.cambiarImgen( this.imagenSubir, this.idProducto)

// }


// cambiarImgen( archivo: File,  id: string ) {

//   this._pService.subirArchivo( archivo, id )
//   .then( (data) => {

//     console.log( data );
//   } )
  
// }



  agregar( f: NgForm ) {
    console.log( f.value );
    this._pService.agregarProduct( f.value )
    .subscribe( (data: any ) => {
      console.log(data);
      this.idProducto = data.producto._id;
      
      this.cargarProductos();
     });
  }

}
