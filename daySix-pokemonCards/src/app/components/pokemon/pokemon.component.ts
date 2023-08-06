import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetchData/fetch-data.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  constructor(private fetchDataService: FetchDataService) {}

  ngOnInit(): void {
    this.fetchDataService.fetchCardsData();
  }
}
