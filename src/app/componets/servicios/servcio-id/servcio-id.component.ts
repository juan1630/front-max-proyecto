import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { Servicios } from 'src/app/interfaces/servicios.interfaces';

@Component({
  selector: 'app-servcio-id',
  templateUrl: './servcio-id.component.html',
  styleUrls: ['./servcio-id.component.css']
})
export class ServcioIDComponent implements OnInit {

  public id: string;
  public servicio:Servicios[]=[];

  constructor(
    public _route: ActivatedRoute,
    private _ProducTService: ProductoService
  ) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this._ProducTService.getServiceById( this.id )
    .subscribe( (data :any ) => {
  
      this.servicio = data.servicios;
      console.log( this.servicio );
    } )
  }

  estado( f ) {

    this._ProducTService.updateService( this.id, f.value )
    .subscribe( (data) => {
      console.log( data )
    })
  }

}
