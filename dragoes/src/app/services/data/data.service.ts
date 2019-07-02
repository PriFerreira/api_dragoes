import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dragao } from 'src/app/classes/dragao';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 apiUrl: string = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/';

  constructor( private http: HttpClient ) { }

  /**Aqui estamos montando as urls para acessar a lista geral 
   * ou conforme o id acessamos os detalhes de cada dragão e 
   * assim podemos executar ações como adicionar novo dragão, excluir ou editar.
   */
  acessaListaDragoes() {
    return this.http.get<Dragao[]>(`${this.apiUrl}dragon`);
  }

  detalhesDoDragao(id: string) {
    return this.http.get<Dragao>(`${this.apiUrl}dragon/${id}`);
  }

  editarInfoDoDragao(id: string, data: string) {
    return this.http.put<Dragao>(`${this.apiUrl}dragon/${id}`, JSON.parse(data));
  }

  addDragao(data: string) {
    return this.http.post<Dragao>(`${this.apiUrl}dragon`, JSON.parse(data));
  }

  deletarODRagao(id: string) {
    return this.http.delete<Dragao>(`${this.apiUrl}dragon/${id}`);
  }
  
}
