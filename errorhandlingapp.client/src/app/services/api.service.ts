import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '../../models/request-options';
import { tap } from 'rxjs/internal/operators/tap';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ApiService {
  http = inject(HttpClient);
  snackService = inject(MatSnackBar);

  private base = '/api/demo';

  private options(options?: RequestOptions) {
    const headers = options?.isCustomError
      ? new HttpHeaders().set('Is-Custom-Error', 'true')
      : new HttpHeaders();

    return { headers };
  }

  success() {
    return this.http.get(`${this.base}/success`).pipe(
      tap(() => this.snackService.open('Success!')));
  }

  error(options?: RequestOptions) {
    return this.http.get(`${this.base}/error`, this.options(options));
  }

  upgrade(options?: RequestOptions) {
    return this.http.get(`${this.base}/upgrade`, this.options(options));
  }
}
