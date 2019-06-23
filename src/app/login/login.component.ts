import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   username = 'mxolisi'
   password = ''
   errorMessage = 'Invalid Credintials'
   invalidLogin = false

  constructor( private router: Router, private Auth: AuthenticationService) { }

  ngOnInit() {
  }
  handleLogin(){
      // console.log(this.username)
      if(this.Auth.Authenticate(this.username, this.password)){
        //Route to the welcome page
         this.router.navigate(['welcome', this.username])
         this.invalidLogin = false
      } else {
           this.invalidLogin = true;
      }
  }
}
