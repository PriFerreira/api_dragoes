import { Component, OnInit } from '@angular/core';
import { Dragao } from 'src/app/api/dragao';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lista-dragoes',
  templateUrl: './lista-dragoes.component.html',
  styleUrls: ['./lista-dragoes.component.sass']
})
export class ListaDragoesComponent implements OnInit {
  dragoes$: Dragao[];
  titulo:string;

  constructor( private dataService: DataService ){
    this.titulo = "Lista de Dragões";
  }

  ngOnInit(){
    return this.dataService.getDragoes()
    .subscribe(data => this.dragoes$ = data); 
  }

}
