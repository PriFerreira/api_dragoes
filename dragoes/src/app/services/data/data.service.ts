import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dragao } from 'src/app/classes/dragao';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //apiUrl: string = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/';
 
 // constructor( private http: HttpClient ) { }
  
 apiUrl: string = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/';

  constructor(private http: HttpClient) { }

  getDragoes() {
    return this.http.get<Dragao[]>(`${this.apiUrl}dragon`);
  }

  // getDragoes() {
  //   return this.http.get<Dragao[]>(this.apiUrl);   
  // }

  getDragonDetails(id: string) {
    return this.http.get<Dragao>(`${this.apiUrl}dragon/${id}`);
  }

  editDragon(id: string, data: string) {
    return this.http.put<Dragao>(`${this.apiUrl}dragon/${id}`, JSON.parse(data));
  }

  createDragon(data: string) {
    return this.http.post<Dragao>(`${this.apiUrl}dragon`, JSON.parse(data));
  }

  deletar(id: string) {
    return this.http.delete<Dragao>(`${this.apiUrl}dragon/${id}`);
  }

  // detalhes(id: string) {
  //   console.log("detalhes data service "+id);
  //   return this.http.get<Dragao>(this.apiUrl+id);    
  // }

  // deletar(id: string) {
  //   return this.http.delete<Dragao>(`${this.apiUrl}${id}`);
  // }

  // criar(data: string) {
  //   console.log(this.http.post<Dragao>(`${this.apiUrl}dragon`, JSON.parse(data)));
  //   return this.http.post<Dragao>(`${this.apiUrl}dragon`, JSON.parse(data));
  // }

  // editar(id: string, data: string) {
  //   return this.http.put<Dragao>(`${this.apiUrl}dragon/${id}`, JSON.parse(data));
  // }
  
}
