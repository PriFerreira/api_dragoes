import { Injectable } from '@angular/core';

import { Usuario } from 'src/app/classes/user';


@Injectable({ 
  providedIn: 'root' 
})
export class AuthService {

  logado: boolean = false;

  //dados do unico usuario
	authUsuario: Usuario = { 
    usuario: 'usuario', 
    senha: 'senha' 
  };

  login() { this.logado = true; }
  logout() { this.logado = false; }
  
	auth() {
		const promise = new Promise(
			resolve => {
				resolve(this.logado);
			}
    );
    
		return promise;
	}

	verificaLogin( usuario: string, senha: string ) {
    if(usuario === this.authUsuario.usuario && 
       senha === this.authUsuario.senha) {

			this.login();
    }
    
		return this.logado;
  }
  	
}

