import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dragao } from 'src/app/classes/dragao';
import { DataService } from 'src/app/services/data/data.service';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.sass']
})
export class DetalhesComponent implements OnInit {

  idDragao: string;
  detalhesDoDragao: Dragao;

  constructor( private dataService: DataService,
               private route: ActivatedRoute) { }  

  /*faz o pedido de exclusão de um dragão para api, através do id*/
  deletar(id: string) {
    this.dataService.deletar(id).subscribe(response => {
      alert(`O Dragão: ${response.name} foi deletado!`);
    }, error => {
        alert('Não foi possível excluir o dragão selecionado!');
      }
    );
  }

  /*acessa os detalhes sobre os dragões, através do id*/
  detalhes(id: string) {
    this.dataService.getDragonDetails(id).subscribe(response => {
      this.detalhesDoDragao = response;
      }, error => {
        alert('Não foi possível buscar detalhes do dragão :(');
      }
    )
  }

  ngOnInit() {
    /*recupera o ID do dragão através da URL e carregar os dados*/
    this.idDragao = this.route.snapshot.params['id'];
    /*exibe os detalhes do dragão.*/
    this.detalhes(this.idDragao);
  }
}
