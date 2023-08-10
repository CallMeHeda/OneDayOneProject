import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss'],
})
export class TvShowsComponent implements OnInit {
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

      console.log(series);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
