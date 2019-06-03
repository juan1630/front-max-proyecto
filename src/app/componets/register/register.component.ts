import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( public _lServices: LoginService ) { }

  ngOnInit() {
  }

  ingresar( forma: NgForm ) {
    const usuario = new User( forma.value.nombre, forma.value.email, forma.value.password );
    console.log( forma );
    this._lServices.creaUsuario(usuario)
    .subscribe( (data: any)  => {
      window.location.href = '#/home';
     })
  }
}
