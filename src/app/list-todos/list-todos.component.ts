import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{

    constructor(
       public id: number,
       public description: string,
       public done: boolean,
       public targetDate: Date
    ){

    }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

   todos = []
   successMessage: string 
    
  //  todo = {
  //     id: 1,
  //     description: 'Learn to Dance'
  //  }
  constructor(
    private todoservice: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
      this.refreshTodos()
  }
   
  refreshTodos(){
    this.todoservice.retrieveAllTodo('Mxolisi').subscribe(
      response => {
         console.log(response)
         this.todos = response
      }
    )
  }
   deleteTodo(id){
      this.todoservice.deleteTodo('Mxolisi', id).subscribe(
          response => {
              console.log(response)
              this.successMessage = `Delete Successful! ${id}`
              this.refreshTodos()
          }
      )
      console.log(`deleted ${id}`)
   }

   updateTodo(id){
      console.log(`update ${id}`)
      this.router.navigate(['todos', id])
   }
   addTodo(){
    this.router.navigate(['todos', -1])
  }
}
