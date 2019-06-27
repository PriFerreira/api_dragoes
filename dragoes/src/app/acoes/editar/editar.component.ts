import { Component, OnInit } from '@angular/core';
import { Dragao } from 'src/app/api/dragao';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.sass']
})
export class EditarComponent implements OnInit {
  dragoes$: Dragao[];
  titulo:string;

  constructor( private dataService: DataService ){
    this.titulo = "Editar de Dragões";
  }

  ngOnInit(){
    return this.dataService.getDragoes()
    .subscribe(data => this.dragoes$ = data); 
  }

}
