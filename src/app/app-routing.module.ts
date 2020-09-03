import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ArtisteComponent } from './components/artiste/artiste.component';
import { SearchComponent } from './components/search/search.component';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtisteComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
