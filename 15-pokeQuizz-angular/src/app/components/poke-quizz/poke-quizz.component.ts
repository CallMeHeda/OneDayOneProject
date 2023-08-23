import { Component, OnInit } from '@angular/core';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { ShuffleService } from 'src/app/services/shuffle.service';

@Component({
  selector: 'app-poke-quizz',
  templateUrl: './poke-quizz.component.html',
  styleUrls: ['./poke-quizz.component.scss'],
})
export class PokeQuizzComponent implements OnInit {
  pokemon: { name: ''; sprites: { front_default: '' } } = {
    name: '',
    sprites: { front_default: '' },
  };

  names: any[] = [];
  // correctAnswer: string = '';
  score: number = 0;
  shuffleNames: any[] = [];

  isLoading: boolean = true;
  questionNumber: number = 1;

  constructor(
    private fetchDataService: FetchDataService,
    private shuffleService: ShuffleService
  ) {}

  visible: boolean = false;

  ngOnInit(): void {
    this.fetchDataService.fetchPokemonName().then(
      (pokemon: any) => {
        this.pokemon = pokemon.fetchedPokemon;
        this.names = pokemon.names;
        this.isLoading = false;
        // this.correctAnswer = this.pokemon.name;
        this.shuffleNames = this.shuffleService.shuffle(this.names);

        console.log(this.shuffleNames);
      },
      (error) => {
        console.error('Error:', error);
        this.isLoading = false;
      }
    );
  }

  submitAnswer(selectedName: string, correctAnswer: string) {
    this.names = [];
    this.shuffleNames = [];
    this.isLoading = true;
    this.questionNumber++;

    if (selectedName === correctAnswer) {
      this.score++;
    }

    this.fetchDataService.fetchPokemonName().then(
      (pokemon: any) => {
        this.pokemon = pokemon.fetchedPokemon;
        this.names = pokemon.names;
        this.isLoading = false;
        this.shuffleNames = this.shuffleService.shuffle(this.names);

        console.log(this.shuffleNames);
      },
      (error) => {
        console.error('Error:', error);
        this.isLoading = false;
      }
    );

    if (this.questionNumber > 10) {
      this.showDialog();
    }
  }

  reset() {
    this.names = [];
    this.shuffleNames = [];
    this.isLoading = true;
    this.questionNumber = 0;
    this.score = 0;
    this.visible = false;

    this.fetchDataService.fetchPokemonName().then(
      (pokemon: any) => {
        this.pokemon = pokemon.fetchedPokemon;
        this.names = pokemon.names;
        this.isLoading = false;
        this.shuffleNames = this.shuffleService.shuffle(this.names);

        console.log(this.shuffleNames);
      },
      (error) => {
        console.error('Error:', error);
        this.isLoading = false;
      }
    );
  }

  showDialog() {
    this.visible = true;
  }
}
