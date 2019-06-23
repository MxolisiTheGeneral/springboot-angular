import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  Authenticate(username, password){
        if(username === 'mxolisi' && password === 'treasure'){
          sessionStorage.setItem('authenticaterUser', username)
           return true;
        }
      return false;
  }

   isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticaterUser')
        return !(user === null)
   }
    logout(){
        sessionStorage.removeItem('authenticaterUser')
    }
}
