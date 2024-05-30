import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser = signal<User | undefined | null>(undefined);
}
