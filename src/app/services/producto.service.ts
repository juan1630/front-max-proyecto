import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../config/config';
import { map } from 'rxjs/operators';
import { Producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {



  constructor( public http: HttpClient ) { }


  agregarProduct( producto: Producto ) {
    const URI = `${URL}/producto`;

    return this.http.post( URI, producto )
    .pipe( map( (res: any) => {
      console.log( res );
      return res;
     } ) );
  }

  cargarItems() {
    const URI = `${URL}/producto`;

    return this.http.get(URI).
    pipe( map( (data: any)  => {
      console.log(data);
      return data.items;
     }));
  }

  cargarProducto( id: number ) {
    const URI = `${URL}/producto/${id}`;

    return this.http.get(URI)
    .pipe( map( (data: any ) => {
      return data.producto;
     }));
  }

  actualizarProducto( id: number, data: Producto ) {
    const URI = `${URL}/producto/${id}`;
    return this.http.put(URI, data)
    .pipe( map(  (resp: any) => {
      return resp;
     } ));
  }
}
