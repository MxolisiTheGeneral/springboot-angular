import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

   name ='Mxolisi'
   welcomeMessage:string
   //ActivateRoute
  constructor( private router: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {

    // console.log(this.router.snapshot.params['name'])
    this.name = this.router.snapshot.params['name']
  }

   getWelcomeMessage(){

      console.log(this.service.executeHelloWorldService())
      this.service.executeHelloWorldService().subscribe(
        response => this.handleSuccesfulResponse(response),
        error => this.handleErrorResponse(error)
      )
     //console.log('get welcome message')
   }

    getWelcomeMessageWithPath(){
       this.service.executeHelloWorldServiceWithPath(this.name).subscribe(
         response => this.handleSuccesfulResponse(response),
         error => this.handleErrorResponse(error)
       )
    }

   handleSuccesfulResponse(response){
      this.welcomeMessage = response.message
   }

   handleErrorResponse(error){
       this.welcomeMessage = error.error.message;
   }
}
