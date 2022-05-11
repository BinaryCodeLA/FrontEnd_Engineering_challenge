import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  public isLogin = false;
 
  async login(username: string, password: string) {
    return new Promise((resolve,reject)=>{ 
              try {
                if(password == "test" && username == "test@test.com"){
                  this.isLogin = true;
                  resolve(true);           
                }
                else{  
                  this.isLogin = false;
                  reject(false);
                }
              } catch (error) {
                reject(false);
                console.log("error=> ", error);
              }
          
           }).catch((err)=>{
              console.log("error login=> ", err);
           })
    }

    isLoggedIn() {
     
      if(localStorage.getItem("token") != null)
        return true
      else
        return false
  
    }
  logout(){
    localStorage.removeItem("token");
  }
}
