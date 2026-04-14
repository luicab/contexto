import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/landing/landing').then((m) => m.Landing),
  },
  {
    path: 'recursos',
    loadComponent: () =>
      import('./pages/recursos/recursos').then((m) => m.Recursos),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
