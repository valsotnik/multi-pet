import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Filter } from '../../types/filter.enum';
import { TodoComponent } from '../index';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todos-main',
  standalone: true,
  imports: [TodoComponent, NgClass],
  templateUrl: './todos-main.component.html',
  styleUrl: './todos-main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosMainComponent {
  readonly todosService = inject(TodosService);
  editingId: string | null = null;

  visibleTodos = computed(() => {
    const todos = this.todosService.todos();
    const filter = this.todosService.filter();

    if (filter === Filter.Active) {
      return todos.filter(todo => !todo.isCompleted);
    } else if (filter === Filter.Completed) {
      return todos.filter(todo => todo.isCompleted);
    } else {
      return todos;
    }
  });

  isAllTodosSelected = computed(() =>
    this.todosService.todos().every(todo => todo.isCompleted)
  );

  noTodosClass = computed(() => this.todosService.todos().length === 0);

  setEditingId(editingId: string | null): void {
    this.editingId = editingId;
  }
  toggleAllTodos(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.todosService.toggleAll(target.checked);
  }
}
