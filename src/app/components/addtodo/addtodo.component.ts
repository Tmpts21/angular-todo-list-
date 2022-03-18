import { Component, OnInit } from '@angular/core';
import { TODOS } from 'src/app/sampleTodos';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: []
})
export class AddtodoComponent implements OnInit {


  title : string 

  id : number 
  body : string 
  status : string 
  due : string 

  error : boolean 
  errorMessage : string 

  success : boolean 
  successMessage : string  


  constructor() { 
    this.title = 'Add todo'
    this.id = TODOS.length + 1 
    this.body = ''
    this.status = 'pending'
    this.due = ''
    this.error = false  
    this.errorMessage = ""
    this.success= false 
    this.successMessage = ""

  }
  
  onSubmit() { 

    
    this.error = false 
    this.errorMessage = ''

    if(!this.body || !this.due) { 
      this.errorMessage = 'Body and due Is Required'
    }

    if(this.errorMessage) { 
      this.error = true 
    }
  
    if (!this.error) { 
      this.success = true 
      this.successMessage = "Todo Successfully added "
      
      TODOS.push({
        id:this.id,
        body:this.body,
        due:this.due,
        status:this.status
      })
    }

  
   

 

  }

  ngOnInit(): void {
  }

}
