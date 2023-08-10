import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { CardSeriesComponent } from './components/card-series/card-series.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { TvShowsDetailsComponent } from './components/tv-shows-details/tv-shows-details.component';

@NgModule({
  declarations: [AppComponent, TvShowsComponent, CardSeriesComponent, TvShowsDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
