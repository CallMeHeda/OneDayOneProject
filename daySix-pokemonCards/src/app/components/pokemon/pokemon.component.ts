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
    this.fetchDataService.fetchCardsData().then((cards: any[]) => {
      this.cards = cards;
      this.changeDetector.detectChanges();

      new Swiper(this.swiperContainer.nativeElement, {
        // effect: 'cards',
        // grabCursor: true,
        // loop: true,
      });
    });
  }

  ngAfterViewInit() {}
}
