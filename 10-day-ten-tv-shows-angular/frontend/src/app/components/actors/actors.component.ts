import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { IActor } from 'src/app/interfaces/iactor';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss'],
})
export class ActorsComponent implements OnInit {
  id: string = '';
  actors: IActor[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchActorsBySerie();
  }
  async fetchActorsBySerie() {
    const options = {
      method: 'GET',
      url: `http://localhost:3000/details/${this.id}/aggregate_credits`,
    };

    try {
      const response = await axios.request(options);
      const actors = response.data.cast.slice(0, 8);

      this.actors = actors.map((data: IActor) => {
        return {
          id: data.id,
          name: data.name,
          profile_path: data.profile_path,
          roles: data.roles,
        };
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
