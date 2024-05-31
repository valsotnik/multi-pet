import { Injectable, signal } from '@angular/core';
import { Todo } from '../types/todo.interface';
import { Filter } from '../types/filter.enum';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos = signal<Todo[]>([]);
  filter = signal<Filter>(Filter.All);

  changeFilter(filter: Filter): void {
    this.filter.set(filter);
  }

  addTodo(text: string): void {
    const newTodo: Todo = {
      id: Math.random().toString(16),
      text,
      isCompleted: false,
    };

    this.todos.update(todos => [...todos, newTodo]);
  }

  changeTodo(id: string, text: string): void {
    this.todos.update(todos =>
      todos.map(todo => (todo.id === id ? { ...todo, text } : todo))
    );
  }

  removeTodo(id: string): void {
    this.todos.update(todos => todos.filter(todo => todo.id !== id));
  }

  toggleTodo(id: string): void {
    this.todos.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  toggleAll(isCompleted: boolean): void {
    this.todos.update(todos => todos.map(todo => ({ ...todo, isCompleted })));
  }
}
