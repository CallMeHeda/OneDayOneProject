import { Component, OnInit, Input } from '@angular/core';
import { IActor } from 'src/app/interfaces/iactor';

@Component({
  selector: 'app-card-actors',
  templateUrl: './card-actors.component.html',
  styleUrls: ['./card-actors.component.scss'],
})
export class CardActorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() actor: IActor = {} as IActor;
}
