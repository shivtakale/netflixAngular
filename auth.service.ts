import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
loginStatus:boolean=false;
  constructor() {
  }
isActivate():Promise<boolean>{
return new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve(this.loginStatus)
  }, 30);
})
}

logIn(){
  this.loginStatus=true;
}
logOut(){
  this.loginStatus=false;
}
}
