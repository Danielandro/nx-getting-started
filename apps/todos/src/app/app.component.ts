import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from "@myorg/data";

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    this.fetchTodos();
  }

  public todos: Todo[] = [];

  private fetchTodos(): void {
    this.http.get<Todo[]>('/api/todos')
      .subscribe(todosFromApi => this.todos = todosFromApi);
  }

  public addTodo() {
    this.http.post('/api/addTodo', {})
      .subscribe(() => this.fetchTodos());
  }
}
