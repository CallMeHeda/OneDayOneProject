import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-tv-shows-details',
  templateUrl: './tv-shows-details.component.html',
  styleUrls: ['./tv-shows-details.component.scss'],
})
export class TvShowsDetailsComponent implements OnInit {
  id: string = '';
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

      console.log(series);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
