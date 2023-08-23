import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  pokemon: { name: string } = { name: '' };
  names: string[] = [];

  constructor() {}

  random(total: number): number {
    return Math.floor(Math.random() * total);
  }

  async fetchPokemon() {
    try {
      // TOTAL DE POKEMON
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon-species/'
      );
      const pokemon = await response.json();
      const count = pokemon.count;
      const random = this.random(count);

      // FETCH POKEMON
      const poke = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${random}`
      );
      const result = await poke.json();

      const data = result.results[0];
      const pokemonResponse = await fetch(data.url);
      const urlData = await pokemonResponse.json();
      // this.pokemon = urlData;

      return urlData;
    } catch (error) {
      console.error('Error :', error);
      return;
    }
  }

  async fetchPokemonName() {
    this.names = [];
    try {
      // TOTAL DE POKEMON
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon-species/'
      );
      const data = await response.json();
      const count = data.count;

      // RECCUPERATION DU NOM DU POKEMON PRINCIPALE
      const fetchedPokemon: any = await this.fetchPokemon();
      const fetchedPokemonName = fetchedPokemon?.name;
      this.pokemon = fetchedPokemon;

      // FETCH POKEMON
      while (this.names.length < 3) {
        const randomIndex = this.random(count);
        const poke = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${randomIndex}`
        );
        const result = await poke.json();

        const data = result.results[0];
        const fetchUrl = await fetch(data.url);
        const pokemonData = await fetchUrl.json();
        const pokemonName = pokemonData.name;

        if (
          pokemonName !== fetchedPokemonName &&
          !this.names.includes(pokemonName)
        ) {
          this.names.push(pokemonName);
        }
      }

      if (!this.names.includes(fetchedPokemonName)) {
        this.names.push(fetchedPokemonName);
      }

      return { fetchedPokemon, names: this.names };
    } catch (error) {
      console.error('Error:', error);
      return { fetchedPokemon: {}, names: [] };
    }
  }
}
