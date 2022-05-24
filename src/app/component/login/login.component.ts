import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'app/_services/authentication.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  mail: string = '';
  password: string = '';
  errorMessage = '';

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != undefined && localStorage.getItem('toke') != ""){
      this.authService.isLogin = true;
      window.location.href="/conference";
    }

  }

  Login(): void {
    console.log("Login");
    this.authService.isLogin = true;
    this.authService.login(this.mail, this.password).then(
      data => {
        if(data === true && this.authService.isLogin === true){
          localStorage.setItem('token',uuidv4());
          window.location.href="/conference";
        }      
      },
      err => {
        console.log("ERROR");
        this.errorMessage = err.error.message;
        
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
