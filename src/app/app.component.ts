import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from './auth/models/user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  readonly authService = inject(AuthService);
  readonly http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<{ user: User }>('https://api.realworld.io/api/user')
      .subscribe({
        next: response => {
          console.log('response', response);
          this.authService.currentUser.set(response.user);
        },
        error: () => {
          this.authService.currentUser.set(null);
        },
      });
  }

  logout(): void {
    localStorage.setItem('token', '');
    this.authService.currentUser.set(null);
  }
}
