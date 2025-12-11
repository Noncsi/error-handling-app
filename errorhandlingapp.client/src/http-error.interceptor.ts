import { HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable } from 'rxjs';
import { ErrorResponse } from './models/error-response';
import { ErrorHandlerService } from './app/services/error-handler.service';

export const httpErrorInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const errorHandlerService = inject(ErrorHandlerService);
  const isCustomError = request.headers.get('Is-Custom-Error') === 'true';

  return next(request).pipe(
    catchError((response: HttpErrorResponse) => {
      const payload: ErrorResponse = response.error;
      return errorHandlerService.handle(payload, isCustomError);
    }),
  );
};
