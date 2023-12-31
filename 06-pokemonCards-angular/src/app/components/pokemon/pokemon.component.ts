import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { FetchDataService } from 'src/app/services/fetchData/fetch-data.service';

import { Swiper } from 'swiper';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer: any;
  cards: any[] = [];

  constructor(
    private fetchDataService: FetchDataService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // this.fetchDataService.fetchCardsData().then((cards: any[]) => {
    //   this.cards = cards;
    //   this.changeDetector.detectChanges();
    //   new Swiper(this.swiperContainer.nativeElement, {
    //     // effect: 'cards',
    //     // grabCursor: true,
    //     // loop: true,
    //   });
    // });
  }

  ngAfterViewInit() {
    this.fetchDataService.fetchCardsData().then((cards: any[]) => {
      this.cards = cards;
      this.changeDetector.detectChanges();

      const swiper = new Swiper(this.swiperContainer.nativeElement, {
        effect: 'cards',
        grabCursor: true,
        loop: true,
      });

      console.log(this.cards);

      // this.swiperContainer.nativeElement.addEventListener(
      //   'slidechange',
      //   (event: Event) => {
      //     const beforeLastIndex = swiper.slides.length - 2;
      //     console.log(beforeLastIndex, ' ', swiper.slides.length);
      //   }
      // );
    });
  }

  // detect = (e: Event) => {
  //   console.log(e.target);
  // };
}
