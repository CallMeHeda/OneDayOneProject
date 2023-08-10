import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';

const routes: Routes = [{ path: '', component: TvShowsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
