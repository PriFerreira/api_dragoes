import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data/data.service';
import { Dragao } from 'src/app/classes/dragao';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.sass']
})
export class EditarComponent implements OnInit {

  titulo: string;
  dragaoSelecionado: Dragao;
  idSelecionado: string;
  form: NgForm;

  alert = null;

  constructor( private dataService: DataService, 
               private route: ActivatedRoute) {
    this.titulo = "Editar Dragão";
  }

  ngOnInit() {
    this.idSelecionado = this.route.snapshot.params['id'];
    this.getDragonDetails(this.idSelecionado);
  }

  // request dragon detail from api
  getDragonDetails(id: string) {
    this.dataService.getDragonDetails(id).subscribe(
      response => {
        this.dragaoSelecionado = response;
      },
      error => {
        this.alert = 'Unable to fetch dragon details!';
      }
    )
  }

  // handle form information
  editDragonHandler(form: NgForm) {
    this.alert = null;
  
    this.form = form;
    const newData = form.value

    // Check if data inserted is different than original data
    if(this.isDataEqual(newData, this.dragaoSelecionado)) {
      return;
    }

    // format data to be sent to api
    const dragonData = {
      name: newData.name,
      type: newData.type,
      createdAt: newData.createdAt,
      id: newData.id,
      histories: newData.histories
    }

    this.sendEditRequest(form, dragonData);
  }
  
  // send edit dragon request
  sendEditRequest(form: NgForm, data: Dragao) {
    this.dataService.editDragon(this.idSelecionado, JSON.stringify(data)).subscribe(
      (response) => {
        if(response && response.id) {
          this.editRequestSuccessHandler(response);
        } else {
          this.alert = 'Invalid response';
        }
      },
      error => {
        this.alert = 'Unable to edit Dragon!';
      }
    );
  }

  // return boolean to indicate if new data is equal to the old one
  isDataEqual(newData: Dragao, oldData: Dragao) {
    return newData.name === oldData.name && newData.type === oldData.type;
  }

  // update selected dragon data
  editRequestSuccessHandler(response: Dragao) {
    this.alert = 'Dragon successfully edited!';
    this.dragaoSelecionado = {
      name: response.name,
      type: response.type,
      createdAt: response.createdAt,
      id: response.id,
      histories: response.histories
    }
  }

}
