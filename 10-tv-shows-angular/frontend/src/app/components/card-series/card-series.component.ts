import { Component, Input, OnInit } from '@angular/core';
import { ITvShows } from 'src/app/interfaces/itv-shows';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-card-series',
  templateUrl: './card-series.component.html',
  styleUrls: ['./card-series.component.scss'],
  animations: [
    trigger('zoomIn', [
      state('mouseleave', style({ transform: 'scale(1)' })),
      state('mouseenter', style({ transform: 'scale(1.05)' })),
      transition('mouseleave => mouseenter', animate('400ms')),
      transition('mouseenter => mouseleave', animate('400ms')),
    ]),
  ],
})
export class CardSeriesComponent implements OnInit {
  cardState: string = 'mouseleave';
  constructor() {}

  ngOnInit(): void {}

  @Input() serie: ITvShows = {} as ITvShows;
}
