import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Dragao } from 'src/app/classes/dragao';
import { DataService } from 'src/app/services/data/data.service';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.sass']
})
export class DetalhesComponent implements OnInit {

  titulo: string = null
  idEscolhido: string;
  dragonildo:string;
  detalhesDoDragao: Dragao;

  constructor( private data: DataService,
               private route: ActivatedRoute,
               private router: Router) {
    this.titulo ="Detalhes do Dragonildo"
  }    

  /*acessa os detalhes sobre os dragões, através do id
  e os mostra na tela ou informa que não foi possível.*/
  detalhes(id: string) {
    this.data.detalhesDoDragao(id).subscribe(response => {
      this.detalhesDoDragao = response;
      }, error => {
        alert('Não deu buscar os detalhes do Dragonildo :(');
      }
    )
  }

  /*faz o pedido de exclusão de um dragão para api através do id, 
  responde através um alert conforme o status da resposta (se excluiu ou não o dragão)
  e redireciona para a lista de drgões já atualizada. */
  deletar(id: string) {    
    this.data.deletarODRagao(id).subscribe(response => {
      this.dragonildo = response.name;
      alert('O Dragonildo chamado ' + this.dragonildo + 'foi E-X-C-L-U-Í-D-O!');
      this.router.navigate(['/listar']);
    }, error => {
        alert('Não deu pra excluir o Dragonildo '+this.dragonildo);
        this.router.navigate(['/listar']);
      }
    );    
  }

  /*aqui estou carregando os dados da api através do id
    posteriormente acesso o get de detalhes passando o id por parametro
    para poder carregar as informações do drag~eo selecionado.*/
  ngOnInit() {
    this.idEscolhido = this.route.snapshot.params['id'];
    this.detalhes(this.idEscolhido);
  }
  
}
