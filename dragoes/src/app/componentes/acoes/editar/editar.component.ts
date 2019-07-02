import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { DataService } from 'src/app/services/data/data.service';
import { Dragao } from 'src/app/classes/dragao';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.sass']
})
export class EditarComponent implements OnInit {

  titulo: string = null
  dragaoSelecionado: Dragao;
  idEscolhido: string;
  infoDoForm: NgForm;

  constructor( private data: DataService, private route: ActivatedRoute) {
    this.titulo ="Editar o Dragonildo ;)"
  }

  /*Aqui estou solicitando à api detalhes sobre o dragão referente ao id que 
  recebi no ngOnInit. Para isso acesso o metodo de comunicação com a api através 
  da variável data, referente ao service criado para me comunicar com a api.*/
  acessaDetalhesDoDragao(id: string) {
    this.data.detalhesDoDragao(id).subscribe(
      response => {
        this.dragaoSelecionado = response;
      }, error => {
        alert('Não deu pra buscar os detalhes do Dragonildo :(');
      }
    )
  }

  /*aqui estou editando/atualizando as informações do 
  formulário e enviando-as para atualizar na api.*/
  editaHandler(form: NgForm) {  
    this.infoDoForm = form;
    const infoAtualizada = form.value
    const dadosDoDragao = {
      id: infoAtualizada.id,
      name: infoAtualizada.name,
      type: infoAtualizada.type,
      createdAt: infoAtualizada.createdAt,      
      histories: infoAtualizada.histories
    }

    this.enviaSolicitacaoEdicao(form, dadosDoDragao);
  }

  enviaSolicitacaoEdicao(form: NgForm, data: Dragao) {
    this.data.editarInfoDoDragao(this.idEscolhido, JSON.stringify(data))
      .subscribe((response) => {
        if(response && response.id) {
          this.editaRequisicao(response);
        } else {
          alert('Resposta inválida queridinho(a)');
        }
      }, error => {
        alert('Não deu pra editar o Dragonildo :(');
      }
    );
  }

  /*atualizar dados selecionados do dragão*/
  editaRequisicao(response: Dragao) {
    alert('\\o/ O Dragonildo aí, agora tá editado \\o/');
    this.dragaoSelecionado = {
      name: response.name,
      type: response.type,
      createdAt: response.createdAt,
      id: response.id,
      histories: response.histories
    }
  }

  /*aqui estou carregando os dados da api através do id
    posteriormente acesso o get de detalhes passando o id por parametro
    para poder carregar as informações do drag~eo selecionado.*/
  ngOnInit() {    
    this.idEscolhido = this.route.snapshot.params['id'];
    this.acessaDetalhesDoDragao(this.idEscolhido);
  }
}
