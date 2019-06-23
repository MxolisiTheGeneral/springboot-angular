import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
    
   constructor(
      public messaage: string
   ){

   }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldService(){
   return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    // console.log('get messsage')
  }
   executeHelloWorldServiceWithPath(name){
      
     return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-var/${name}`)
   }
}
