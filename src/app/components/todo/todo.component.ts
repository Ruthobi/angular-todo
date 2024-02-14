import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos!: Todo[];
  inputTodo: string ="";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'first content',
        completed: false
      },
      {
        content: 'second content',
        completed: false
      },
    ]
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  editTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i! == id);
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i! == id);
  }

  addTodo() {
    console.log(this.inputTodo)
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }



}




  


 
 
  


 
  

 


  // addTodo() {
  //   console.log(this.inputTodo)
  //   this.todos.push({
  //     content: this.inputTodo,
  //     completed: false
  //   });

  //   this.inputTodo = "";
  // }

  //   }
// }
// editTodo(id: number) {
//   this.todos = this.todos.filter((v, i) => i! == id);
// }

// // Function to update a todo item
// updateTodo() {
//   if (this.editIndex !== null && this.editContent.trim() !== '') {
//       this.todos[this.editIndex].content = this.editContent;
//       this.editIndex = null;
//       this.editContent = '';
//   }
// }

// // Function to delete a todo item
// deleteTodo(id: number) {
//   this.todos = this.todos.filter((v, i) => i! == id);
// }

// // Function to toggle the completion status of a todo item
// toggleDone(index: number) {
//   this.todos.map((v, i) => {
//     if (i == id) v.completed = !v.completed;

//     return v;
//   })
// }













