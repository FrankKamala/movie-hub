import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HorrorListComponent } from './horror-list/horror-list.component';
import { ComedyListComponent } from './comedy-list/comedy-list.component';


const routes: Routes = [
  { path: 'movieList', component: MovieListComponent},
  { path: 'horrorList', component: HorrorListComponent},
  { path: 'comedyList', component: ComedyListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
