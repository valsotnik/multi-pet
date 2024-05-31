import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos-header',
  standalone: true,
  imports: [],
  templateUrl: './todos-header.component.html',
  styleUrl: './todos-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosHeaderComponent {
  private readonly todosService = inject(TodosService);
  text = signal('');
  changeText($event: Event): void {
    const target = $event.target as HTMLInputElement;
    this.text.set(target.value);
  }

  addTodo(): void {
    this.todosService.addTodo(this.text());
    this.text.set('');
  }
}
