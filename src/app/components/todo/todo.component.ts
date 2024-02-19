
import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';


interface TodoItem {
  content: string;
  completed: boolean;
  editMode: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})



export class TodoComponent implements OnInit{
  todos!: TodoItem[];
  inputTodo: string ="";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Buy Groceries',
        completed: false,
        editMode: false
      },
      {
        content: 'Write a blog post',
        completed: false,
        editMode:false
      },
      {
        content: 'Complete Assignments',
        completed: false,
        editMode:false
      },
      {
        content: 'Go for a walk',
        completed: false,
        editMode:false
      },
    ]
  }

  toggleDone(id: number) {
    this.todos = this.todos.map((v, i) => i === id ? { ...v, completed: !v.completed } : v);
  }

  editTodo(id: number) {
    this.todos = this.todos.map((v, i) => {
      if (i === id) {
        return { ...v, editMode: true }; 
      } else {
        return { ...v, editMode: false }; 
      }
    });
  }
 
  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
 

  addTodo() {
    if (this.inputTodo.trim() !== "") {
      this.todos.push({
        content: this.inputTodo,
        completed: false,
        editMode: false
      });

      this.inputTodo = "";
  }
}

}




  


 
 
  


 
  













