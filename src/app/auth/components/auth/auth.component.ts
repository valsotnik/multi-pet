import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.interface';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
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
