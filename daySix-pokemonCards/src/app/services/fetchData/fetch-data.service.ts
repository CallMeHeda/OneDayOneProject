import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor() {}

  async fetchCardsData() {
    const pageSize = 3;
    const randomPage = Math.floor(Math.random() * (16444 / pageSize));

    const options = {
      method: 'GET',
      url: `https://api.pokemontcg.io/v2/cards?page=${randomPage}&pageSize=${pageSize}`,
      headers: {
        accept: 'application/json',
        ['X-Api-Key']: environment.API_KEY,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
