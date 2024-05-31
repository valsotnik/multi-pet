import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { Filter } from '../../types/filter.enum';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todos-footer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todos-footer.component.html',
  styleUrl: './todos-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosFooterComponent {
  readonly todosService = inject(TodosService);
  filter = this.todosService.filter;
  filterEnum = Filter;
  activeCount = computed(
    () => this.todosService.todos().filter(todo => !todo.isCompleted).length
  );
  noTodosClass = computed(() => this.todosService.todos().length === 0);
  itemsLeftText = computed(
    () => `item${this.activeCount() !== 1 ? 's' : ''} left`
  );

  readonly filterTabs = [
    { type: Filter.All, label: 'All' },
    { type: Filter.Active, label: 'Active' },
    { type: Filter.Completed, label: 'Completed' },
  ];

  changeFilter(event: Event, filter: Filter): void {
    event.preventDefault();
    this.todosService.changeFilter(filter);
  }
}
