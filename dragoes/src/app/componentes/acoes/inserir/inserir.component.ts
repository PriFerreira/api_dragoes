import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DataService } from 'src/app/services/data/data.service';
import { Dragao } from 'src/app/classes/dragao';


@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.sass']
})
export class InserirComponent implements OnInit {

  dragonData: Dragao;
  dragao: string;
  titulo: string = null;

  constructor( private data: DataService ) { 
    this.titulo = 'Adicionar um Dragonildo';
  }

  registrar(form: NgForm) {
    this.dragonData = {
      name: form.value.name,
      type: form.value.dragonType,
      createdAt: form.value.createdAt,
      id: form.value.id,
      histories: form.value.histories
    }

    /**Aqui estou fazendo a requisição para adicionar um novo dragão.*/
    this.data.addDragao(JSON.stringify(this.dragonData))
    .subscribe((response) => {
        if(response && response.id) {
          this.dragao = response.name;
          alert('\\o/ O Dragonildo '+ this.dragao +' foi adicionado \\o/');
        } else {
          alert('Invalid response');
        }
      }, error => { alert('Unable to register dragon.'); }
    );
  }

  ngOnInit() { }

}