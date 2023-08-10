import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { ITvShows } from 'src/app/interfaces/itv-shows';

import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-tv-shows-details',
  templateUrl: './tv-shows-details.component.html',
  styleUrls: ['./tv-shows-details.component.scss'],
})
export class TvShowsDetailsComponent implements OnInit {
  id: string = '';
  tvShowsDetails: ITvShows = {
    id: 0,
    name: '',
  };
  value: number = 0;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  customDiameter: number = 68;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchDetails();
  }

  async fetchDetails() {
    const options = {
      method: 'GET',
      url: `http://localhost:3000/details/${this.id}`,
    };

    try {
      const response = await axios.request(options);
      const series = response.data;

      this.tvShowsDetails = {
        id: series.id,
        name: series.name,
        first_air_date: series.first_air_date,
        last_air_date: series.last_air_date,
        overview: series.overview,
        poster_path: 'https://image.tmdb.org/t/p/original' + series.poster_path,
        backdrop_path:
          'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces' +
          series.backdrop_path,
        vote_average: series.vote_average,
        created_by: series.created_by,
        genres: series.genres,
        in_production: series.in_production,
        networks: [
          {
            id: series.networks[0].id,
            logo_path:
              'https://image.tmdb.org/t/p/original' +
              series.networks[0].logo_path,
            name: series.networks[0].name,
          },
        ],
        number_of_episodes: series.number_of_episodes,
        number_of_seasons: series.number_of_seasons,
        production_countries: series.production_countries,
        status: series.status,
        tagline: series.tagline,
      };

      if (this.tvShowsDetails.vote_average) {
        const rating = (this.tvShowsDetails.vote_average / 10) * 100;
        this.value = Math.round(rating);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
