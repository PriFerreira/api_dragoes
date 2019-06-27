import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opcoes',
  templateUrl: './opcoes.component.html',
  styleUrls: ['./opcoes.component.sass']
})
export class OpcoesComponent implements OnInit {

  acoes$: string[] = ['listar', 'editar', 'inserir', 'excluir'];
  imgs$: string[] = [
    '../../../assets/drag.jpg', 
    '../../../assets/drag.jpg', 
    '../../../assets/drag.jpg', 
    '../../../assets/drag.jpg'
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
