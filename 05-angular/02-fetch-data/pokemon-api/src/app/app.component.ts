import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { PokeyService } from './services/pokey.service';
import { Pokemon } from './models/pokemon';
import { Ability } from './models/ability';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  newPokemon: Pokemon;
  newestPokemon: Pokemon;
  pokedex: Pokemon[];
  componentErrors: string[] = [];
  constructor(private readonly pokeServe: PokeyService, private readonly route: ActivatedRoute) {

  }
  ngOnInit() {
    this.displayOneGetAll('1');

    this.pokeAbilityComparison('1');
  }

  pokeAbilityComparison(id: string) {
    this.pokeServe.getPokemonWithId(id).subscribe(thePokemon => {
      // console.log('thePokemon', thePokemon);
      for (let key of thePokemon.abilities) {
        this.pokeServe.getAbilities(key.ability.url).subscribe(theAbility => {
          // console.log(theAbility['pokemon'].length);
          // console.log(theAbility['name']);
          for (let okey of theAbility['pokemon']) {
            // console.log(okey['pokemon']['url']);
            this.pokeServe.getPokemonWithRoute(okey['pokemon']['url']).subscribe(matchPokemon => {
              this.newestPokemon = matchPokemon;
              console.log(this.newestPokemon.name, ' Count of Matching Pokemon ' + theAbility['pokemon'].length);
              // console.log(this.newestPokemon.abilities);
              for (let lastKey of this.newestPokemon.abilities) {
                if (lastKey.ability.name !== theAbility['name']) {
                  console.log(this.newestPokemon.name + ' Knows ' + lastKey.ability.name);
                }
              }
            });
          }
        });
      }
    });
  }

  displayOneGetAll(id: string) {
    this.pokeServe.getPokemonWithId(id).subscribe(pokemon => {
      // const newPokemon: Pokemon = pokemon;
      // console.log(newPokemon);
      // console.log(newPokemon.abilities);
      this.newPokemon = pokemon;
      this.pokeServe.getAllPokemon().subscribe(allPokemon => {
        this.pokedex = allPokemon;
        // console.log(this.pokedex);
        // console.log(this.newPokemon);
      });
    });
  }

}
