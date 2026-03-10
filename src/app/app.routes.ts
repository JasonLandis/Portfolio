import { Routes, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ConstellationComponent } from './components/constellation/constellation.component';
import { GameDevBlogComponent } from './components/gamedevblog/gamedevblog.component';
import { GuessPhraseComponent } from './components/guessphrase/guessphrase.component';
import { PhotophobiaComponent } from './components/photophobia/photophobia.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Jason Landis | Software Developer Portfolio' },
  { path: 'about', component: AboutComponent, title: 'Jason Landis | Software Developer Portfolio' },
  { path: 'constellation', component: ConstellationComponent, title: 'Constellation | Jason Landis | Software Developer Portfolio' },
  { path: 'gamedevblog', component: GameDevBlogComponent, title: 'Game Dev Blog | Jason Landis | Software Developer Portfolio' },
  { path: 'guessphrase', component: GuessPhraseComponent, title: 'GuessPhrase | Jason Landis | Software Developer Portfolio' },
  { path: 'photophobia', component: PhotophobiaComponent, title: 'Photophobia | Jason Landis | Software Developer Portfolio' },
  {
    path: '**',
    component: HomeComponent,
    resolve: {
      clean: () => inject(Router).navigate(['/'], { replaceUrl: true }),
    },
  }
];
