import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  formulario: FormGroup;
  isLoading = false;
  alerta = null;
  
  constructor( private router: Router, 
               private authService: AuthService ) { }

  /*recebendo a submissão do formulario eu verifico se 
  os dados conferem com o único usuário registrado.*/
  login() {
    const form = this.formulario.value;
    this.isLoading = true;

    /*validação do usuário e senha. 
    Caso esteja tudo certo vai para a Home se não o usuário é avisado através de um alert simples.*/
    if ( this.authService.verificaLogin( form.usuario, form.senha ) ) {
      this.router.navigate(['/listar']);
      this.alerta = 'Logado com sucesso \\o/';
    } else {
      this.alerta = 'Atenção: Seu Usuário ou Senha está invalido! Entre com dados válidos para acessar.';      
    }

    alert(this.alerta);

    this.isLoading = false;
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      'usuario': new FormControl(null, Validators.required),
      'senha': new FormControl(null, Validators.required)
    });

    this.alerta = null;
  }

}
