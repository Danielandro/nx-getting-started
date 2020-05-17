// business logic goes here
import { Injectable } from '@nestjs/common';
import { Todo } from "@myorg/data";

@Injectable()
export class AppService {
  private todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];
  getData(): Todo[] {
    return this.todos;
  }

  addTodo() {
    this.todos.push({ title: `Todo ${Math.floor(Math.random() * 1000)}` });
  }
}
