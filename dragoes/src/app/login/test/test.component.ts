import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  formUsuario: FormGroup;
  acesso: Usuario;

  constructor( private formBuilder: FormBuilder, private router: Router ) { }

  ngOnInit() {
    this.createForm( new Usuario() );
  }

  createForm(usuario: Usuario) {
    this.formUsuario = this.formBuilder.group({
      nome: [usuario.nome],
      senha: [usuario.senha]
    })
  }

  onSubmit() {
     console.log(this.formUsuario.value);  
    
    if( this.formUsuario.get('nome').value == "usuario" && 
        this.formUsuario.get('senha').value == "123"){   
      this.router.navigate(['home']);
      console.log('foooi');
    }else{
      this.router.navigate(['erro']);
     console.log('ops');
    }

    this.formUsuario.reset(new Usuario());
  }

}