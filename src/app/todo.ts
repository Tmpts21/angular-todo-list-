export class Todo {
    id : number
    body : string
    status : string 
    due : string  
   
    constructor(id: number , body : string , status : string , due : string ) {
      this.id = id 
      this.body = body 
      this.status = status
      this.due = due 
    }

}