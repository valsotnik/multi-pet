import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-routing').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'todo',
    loadChildren: () =>
      import('./todo-list/todo-list.routing').then(m => m.TODO_LIST_ROUTES),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
