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
  nomeDragao: any;

  constructor( private data: DataService ){
    this.titulo = "Lista de Dragões";
  }

  /*aqui estamos chamando o método que acessa a 
  url da api para trazer os nomes dos dragoes */
  pegaDragonildo() {
    this.data.acessaListaDragoes().subscribe(
      dragoes => {
        dragoes.sort((prev, next) => (
          prev.name.toLocaleLowerCase() > next.name.toLocaleLowerCase()) ? 1 : -1);
        this.dragoes$ = dragoes;
      },
      error => { alert(`Não deu pra buscar a lista de dragões amigo(a) :(`); }
    )
  }

  /*aqui estamos deletando um draga a partir da lista */
  deletaODRagao(id: string) {
    this.data.deletarODRagao(id).subscribe(
      response => {
        this.nomeDragao = response.name;
        alert('O Dragonildo '+ this.nomeDragao +' foi excluído.');      
        this.pegaDragonildo();
      },
      error => { alert('Desculpa! Não deu pra excluir o dragão que tu escolheu amigo(a).'); }
    );
  }

  ngOnInit() {
    this.pegaDragonildo();
  }

}
