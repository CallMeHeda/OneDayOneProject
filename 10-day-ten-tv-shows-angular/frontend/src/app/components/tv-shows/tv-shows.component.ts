import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ITvShows } from 'src/app/interfaces/itv-shows';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
})
export class TvShowsComponent implements OnInit {
  tvShows: ITvShows[] = [];
  constructor() {}

  ngOnInit(): void {
    this.fetchTopRatedTv();
  }

  async fetchTopRatedTv() {
    const OPTIONS = {
      method: 'GET',
      url: 'http://localhost:3000/',
    };

    try {
      const response = await axios.request(OPTIONS);
      const series = response.data;

      this.tvShows = series.map((data: ITvShows) => {
        return {
          id: data.id,
          name: data.name,
          first_air_date: data.first_air_date,
          overview: data.overview,
          poster_path: 'https://image.tmdb.org/t/p/original' + data.poster_path,
          vote_average: data.vote_average,
        };
      });

      console.log(this.tvShows);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
