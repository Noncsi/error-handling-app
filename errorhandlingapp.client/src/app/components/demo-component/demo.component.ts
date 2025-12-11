import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { catchError, take, tap } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { ErrorResponse } from '../../../models/error-response';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatSnackBarModule],
})
export class DemoComponent {
  apiService = inject(ApiService)
  snackService = inject(MatSnackBar)
  router = inject(Router)

  upgrade() {
    this.apiService.upgrade({ isCustomError: true }).pipe(
      take(1),
      catchError((error: ErrorResponse) => {
        const action$ = this.snackService
          .open(error.message, 'Upgrade now')
          .onAction();

        return action$.pipe(
          tap(() => this.router.navigate(['/pricing'])),
        );
      }),
    ).subscribe();
  }
}
