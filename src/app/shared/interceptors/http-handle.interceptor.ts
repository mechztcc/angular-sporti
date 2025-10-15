import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ToasterService } from '../services/toastr/toaster.service';

export const httpHandleInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToasterService);
  const token = localStorage.getItem('token'); 

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: token,
      },
    });
  }

  return next(req).pipe(
    catchError((error) => {
      const message =
        error?.error?.message ?? 'Algo inesperado aconteceu, tente novamente em breve';

      toastr.onHandle(message, 'error');
      return throwError(() => error);
    })
  );
};
