import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-todo-list-container',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-container.component.html',
  styleUrl: './todo-list-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListContainerComponent {}
