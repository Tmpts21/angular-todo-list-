import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';
import { TODOS } from '../../sampleTodos'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: []
})


export class TodoComponent implements OnInit {

  header: string 

  todos : Todo[] = TODOS

  status : string 

  todoId : string 

  sucessMessage : string

  success : boolean

  constructor() { 
    this.header = "My todos"
    this.status = 'pending'
    this.todoId = '' 
    this.sucessMessage = ''
    this.success = false
  }

  onSave() { 

    //update status 
    for (let object of this.todos) { 
      if (object.id ===  parseInt(this.todoId )){ 
        object.status = this.status
      }
    }
    
    this.success = true 
    this.sucessMessage = "todo successfully updated"

  }

  setId(id : string ) { 
    this.todoId = id
  }

  ngOnInit(): void {
  }

}
