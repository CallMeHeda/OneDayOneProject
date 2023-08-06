import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetchData/fetch-data.service';
// swiper bundle styles
import 'swiper/css/bundle';

// swiper core styles
import 'swiper/css';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  cards: any[] = [];

  constructor(private fetchDataService: FetchDataService) {}

  ngOnInit() {
    this.fetchDataService.fetchCardsData().then((cards: any[]) => {
      this.cards = cards;

      // this.config = {
      //   autoHeight: true,
      //   spaceBetween: 20,
      //   navigation: false,
      //   pagination: { clickable: true, dynamicBullets: true },
      //   slidesPerView: 1,
      //   centeredSlides: true,
      //   breakpoints: {
      //     400: {
      //       slidesPerView: 'auto',
      //       centeredSlides: false,
      //     },
      //   },
      // };
    });

    // new Swiper('.mySwiper', {
    //   effect: 'cards',
    //   grabCursor: true,
    //   slidesPerView: 1.5,
    //   centeredSlides: true,
    //   loop: true,
    // });
  }
}
