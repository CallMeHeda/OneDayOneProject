import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { TvShowsDetailsComponent } from './components/tv-shows-details/tv-shows-details.component';

const routes: Routes = [
  { path: '', component: TvShowsComponent },
  { path: 'details/:id', component: TvShowsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
