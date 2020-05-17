import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todo {
  title: string;
}
@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.fetchTodos();
  }

  public todos: Todo[] = [
    { title: 'Todo One' },
    { title: 'Todo Two' }
  ];

  private fetchTodos(): void {
    this.http.get<Todo[]>('/api/todos')
      .subscribe(todosFromApi => this.todos = todosFromApi);
  }

  public addTodo() {
    this.http.post('/api/addTodo', {})
      .subscribe(() => this.fetchTodos());
  }
}
