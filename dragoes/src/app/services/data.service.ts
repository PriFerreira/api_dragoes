import { Injectable } from '@angular/core';
import { Dragao } from '../api/dragao';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 //declarei a url da api em uma variável
 apiUrl = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';
  

 //injetei o HttpClient para fazer ...
 constructor( private _http: HttpClient, 
              private router: Router) { }

 private usuarioAutenticado: boolean = false;

 getDragoes(){
   return this._http.get<Dragao[]>(this.apiUrl);
 }

  // fazerLogin( usuario : Usuario ){
  //   if(usuario.nome == "usuario" && usuario.senha == "123"){   
  //     this.router.navigate(['home']);
  //   }else{
  //    console.log('ops');
  //   }
  // }

}
