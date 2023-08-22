import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-get-animals',
  templateUrl: './get-animals.component.html',
  styleUrls: ['./get-animals.component.scss'],
})
export class GetAnimalsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.fetchAnimals();
  }

  fetchAnimals(): void {
    axios.get('http://localhost:3000/api/animals').then((response) => {
      console.log(response.data);
    });
  }
}
