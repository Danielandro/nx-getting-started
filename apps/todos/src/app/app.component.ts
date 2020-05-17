import { Component } from '@angular/core';

interface Todo {
  title: string;
}
@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todos: Todo[] = [
    { title: 'Todo One' },
    { title: 'Todo Two' }
  ];

  public addTodo(newTodo: string) {
    this.todos.push({ title: newTodo });
  }
}
