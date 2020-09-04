import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../classes/user';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user:String;
  public password:String
  public userCreds: User;
  public usuarioString:string;

  constructor(private router: Router) {}

  login(){
    this.userCreds.user = this.user;
    this.userCreds.password = this.password;
    if (this.user == 'admin' && this.password == 'admin') {
      this.router.navigate(['/Bienvenido']);
      this.usuarioString = JSON.stringify(this.userCreds);
      localStorage.setItem('usuario', this.usuarioString);
    } else {
      this.router.navigate(['/Error']);
    }
  }

  ngOnInit(): void {
  }

}
