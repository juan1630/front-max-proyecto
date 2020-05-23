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


  eliminarProducto( id: string ){

    const uri  = `${URL}/producto/producto/${id}`;
    return this.http.delete( uri );

  }

// se crea un nuevo servicio de computadoras

  agregarServicio( servicio ) {

    const uri  = `${URL}/servicio/nuevo/servicio`;

   return this.http.post(uri, servicio);

  }


  // visualización de los servicios creado
 
  getService() {

    let url = `${URL}/servicio/servicios`;
    
    return this.http.get( url );
 
  }


  getServiceById( id ) {
    let url = `${URL}/servicio/servicio/${id}`;
     return  this.http.get(url);
  }
  updateService( id, cuerpo  ){

    let url = `${URL}/servicio/servicios/edit/${id}`;
    return this.http.put( url, cuerpo );

  } 


  getEquimentByName( name ){
    console.log( name );
    let url = `${URL}/servicio/servicio/entrega/${name}`;
    return this.http.get( url );
  
  }


  // subirArchivo( archivo: File,  id: string ) {

  //   return new Promise( (resolve, reject) => {
  //     const formData = new FormData();
  //     const xhr = new XMLHttpRequest();

  //     formData.append( 'imagen', archivo, archivo.name );
  //     // tslint:disable-next-line:only-arrow-functions
  //     xhr.onreadystatechange = function() {
  //       if ( xhr.readyState === 4 ) {
  //         if (xhr.status === 200) {
  //           console.log('Imagen subida');
  //           resolve( JSON.parse(xhr.response));
  //         } else {
  //           console.log('fallo la subida');
  //           reject(xhr.response);
  //         }
  //    }
  //   };

  //     const url = `${URL}/producto/upload/${id}`;
  //     xhr.open('PUT', url, true);
  //     xhr.send(formData);
  //     });
  // }


}
