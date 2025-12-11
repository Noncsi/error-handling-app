import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorResponse } from '../../models/error-response';
import { EMPTY, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerService {
  snackService = inject(MatSnackBar);

  handle(payload: ErrorResponse, isCustomError: boolean) {
    const { statusCode, message } = payload;
    const isNetworkError = statusCode < 1;

    if (!isNetworkError && isCustomError) {
      return throwError(() => payload);
    }
    const snackText = isNetworkError ? 'Network error. Please check your connection.' : `${statusCode}: ${message}`;
    this.snackService.open(snackText);
    return EMPTY;
  }
}
