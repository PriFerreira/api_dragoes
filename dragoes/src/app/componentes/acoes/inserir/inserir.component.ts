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
  alerta = null;
  isError = null;
  isLoading = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.alerta = null;
  }

  // handle form information
  registerHandler(form: NgForm) {
    this.isLoading = true;

    // format data to be sent to api
    this.dragonData = {
      name: form.value.name,
      type: form.value.dragonType,
      createdAt: form.value.createdAt,
      id: form.value.id,
      histories: form.value.histories
    }

    // send create dragon request
    this.dataService.createDragon(JSON.stringify(this.dragonData)).subscribe(
      (response) => {
        if(response && response.id) {
          this.isError = false;
          alert(this.alerta = `Dragon ${ response.name } successfully registered!`);
          form.reset();
        } else {
          this.isError = true;
          alert(this.alerta = 'Invalid response');
        }
        this.isLoading = false;
      },
      error => {
        alert(this.alerta = 'Unable to register dragon.');
        this.isError = true;
        this.isLoading = false;
      }
    );
  }

}