import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TodosHeaderComponent,
  TodosMainComponent,
  TodosFooterComponent,
} from '../../components';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodosHeaderComponent, TodosMainComponent, TodosFooterComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodosComponent {}
