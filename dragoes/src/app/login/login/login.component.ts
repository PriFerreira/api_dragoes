import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;
  acesso: Usuario;

  constructor( private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit() {
    this.createForm( new Usuario() );
  }

  createForm(usuario: Usuario) {
    this.forma = this.formBuilder.group({
      nome: [usuario.nome],
      senha: [usuario.senha]
    })
  }

  onSubmit() {
     console.log(this.forma.value);  
    
    if( this.forma.get('nome').value == "usuario" && 
        this.forma.get('senha').value == "123"){   
      this.router.navigate(['home']);
      console.log('foooi');
    }else{
      this.router.navigate(['erro']);
     console.log('ops');
    }

    this.forma.reset(new Usuario());
  }

}