import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router,
               private auth: AuthService) { }

  login(){ this.router.navigate(['login']); }
  logout(){ this.auth.logout(); }

  ngOnInit() { }
}
