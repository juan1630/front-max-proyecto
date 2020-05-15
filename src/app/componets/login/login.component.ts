import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor( public _lServices: LoginService ) { }

  ngOnInit() {
  }

  ingresar( f: NgForm ) {
    console.log( f );
    if ( f.invalid ) {
      return;
    }

    const usuario = new User(null, f.value.email, f.value.password);
    this._lServices.login( usuario ).
    subscribe( ( data: any ) => {
      console.log( data );
      if( data.usuario.role === 'ADMIN_ROEL') {
        
        window.location.href = '#/home';
      }else {
        // aca ira el hom del usuario
        window.location.href = '#/servicio';
      }

     } );
  }

}
