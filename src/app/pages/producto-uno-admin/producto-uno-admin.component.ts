import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Producto } from 'src/app/models/producto.models';
import { ProductoService } from 'src/app/services/producto.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-producto-uno-admin',
  templateUrl: './producto-uno-admin.component.html',
  styleUrls: ['./producto-uno-admin.component.css']
})
export class ProductoUnoAdminComponent implements OnInit {
  
  public id;
  public productos:Producto;

  constructor(
    private _route: ActivatedRoute,
    private _pService:ProductoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.cargarUno();
  }


  cargarUno() {
    this._pService.cargarProducto(this.id)
    .subscribe( (data: any ) => {
      this.productos = data;
      console.log( this.productos );
     });
  }


  
  actualizar(  valor: NgForm ) {
    if (  valor.invalid ) {
      return;
    }

    console.log( this.productos );

    this._pService.actualizarProducto(this.id, this.productos)
    .subscribe( (data: any)  =>  {
      console.log(data.producto);
      this.router.navigate(['/producto', data.producto._id]);
    } );
  }

}
