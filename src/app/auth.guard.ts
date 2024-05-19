import { state } from '@angular/animations';
import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);

  // console.log(authService.user?.email);
  
  if (authService.user) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }

}