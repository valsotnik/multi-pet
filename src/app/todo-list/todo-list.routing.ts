import { Routes } from '@angular/router';
import { TodoListContainerComponent } from './components/todo-list-container/todo-list-container.component';

export const TODO_LIST_ROUTES: Routes = [
  {
    path: '',
    component: TodoListContainerComponent,
  },
];
