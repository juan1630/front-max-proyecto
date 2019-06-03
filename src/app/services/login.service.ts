import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from '../config/config';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( public http: HttpClient ) { }


  login( usuario: User ) {
    const URI = `${ URL }/login`;

    return this.http.post(URI, usuario)
    .pipe( map( (res: any) => {
      console.log(res);
      return res;
     }));
  }

  creaUsuario( usuario: User ) {
    const URI = ` ${URL}/user`;
    return this.http.post( URI, usuario )
    .pipe( map( (data: any) => {
      return data;
    } ) );
  }
}
