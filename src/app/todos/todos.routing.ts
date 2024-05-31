import { Routes } from '@angular/router';
import { TodosComponent } from './pages/todos/todos.component';

export const TODO_LIST_ROUTES: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];
