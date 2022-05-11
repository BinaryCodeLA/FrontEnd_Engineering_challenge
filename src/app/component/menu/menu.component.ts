import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/_services/authentication.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  toggle: any;
  bar: any;
  constructor(public auth: AuthenticationService) { 

  }

  ngOnInit(): void {
   console.log(" this.auth.isLogin=> ",  this.auth.isLogin);
  }

  toggle_bar(){
    let toggle = document.getElementsByClassName('toggle_bar');
    console.log("toogle");
         let element = document.querySelector(".toggle");
         if(element != null)
            element.classList.toggle("show")
         
         let element2 = document.querySelector(".bar")
         if(element2 != null)
            element2.classList.toggle("bar2")      
         
  }

  Logout(){
    localStorage.removeItem('token');
    window.location.href="/";
  }
}
