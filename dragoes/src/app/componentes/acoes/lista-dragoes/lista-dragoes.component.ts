import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data/data.service';
import { Dragao } from 'src/app/classes/dragao';


@Component({
  selector: 'app-lista-dragoes',
  templateUrl: './lista-dragoes.component.html',
  styleUrls: ['./lista-dragoes.component.sass']
})
export class ListaDragoesComponent implements OnInit {

  dragoes$: Dragao[] = [];
  titulo: string;

  constructor( private dataService: DataService ){
    this.titulo = "Lista de Dragões";
  }

  pegaDragonildo() {
    this.dataService.getDragoes().subscribe(
      dragoes => {
        dragoes.sort((prev, next) => (
          prev.name.toLocaleLowerCase() > next.name.toLocaleLowerCase()) ? 1 : -1);
        this.dragoes$ = dragoes;
      },
      error => { alert(`Não deu pra buscar a lista de dragões amigo(a) :(`); }
    )
  }

  onDeleteDragon(id: string) {
    this.dataService.deletar(id).subscribe(
      response => {
        alert(`O Dragonildo ${response.name} foi excluído.`);      
        this.pegaDragonildo();
      },
      error => { alert(`Não é possível excluir o dragão que tu escolheu amigo(a)!`); }
    );
  }

  ngOnInit() {
    this.pegaDragonildo();
  }

}
