import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  input,
  OnInit,
  output,
  viewChild,
} from '@angular/core';
import { Todo } from '../../types/todo.interface';
import { NgClass } from '@angular/common';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  todo = input.required<Todo>();
  isEditing = input.required<boolean>();
  setEditingId = output<string | null>();
  textInput = viewChild<ElementRef>('textInput');

  readonly todosService = inject(TodosService);

  editingText = '';

  constructor() {
    effect(() => {
      if (this.isEditing()) {
        this.textInput()?.nativeElement.focus();
      }
    });
  }

  ngOnInit(): void {
    this.editingText = this.todo().text;
  }

  changeText(event: Event): void {
    this.editingText = (event.target as HTMLInputElement).value;
  }

  changeTodo(): void {
    this.todosService.changeTodo(this.todo().id, this.editingText);
    this.setEditingId.emit(null);
  }

  setTodoInEditMode(): void {
    this.setEditingId.emit(this.todo().id);
  }

  removeTodo(): void {
    this.todosService.removeTodo(this.todo().id);
  }

  toggleTodo(): void {
    this.todosService.toggleTodo(this.todo().id);
  }
}
