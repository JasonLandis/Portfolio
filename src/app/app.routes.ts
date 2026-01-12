import { Routes, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Jason Landis | Software Developer Portfolio' },
  {
    path: '**',
    component: HomeComponent,
    resolve: {
      clean: () => inject(Router).navigate(['/'], { replaceUrl: true }),
    },
  },
];
