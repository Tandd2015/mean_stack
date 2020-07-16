import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import { Ability } from '../models/ability';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeyService {
  private readonly baseURL = 'https://pokeapi.co/api/v2/pokemon/';
  // private readonly baseURL2 = 'https://pokeapi.co/api/v2/ability/';
  // thisOnePokemon: Pokemon;
  // onePokemon: Pokemon;
  // MyPokemon: Pokemon[] = [];
  constructor(private readonly http: HttpClient) { }

    // catchAllPokemon(): Pokemon[] {
    //   this.http.get<Pokemon[]>(this.baseURL).subscribe(allPokemonYes => {
    //     const allMyPokemon: Pokemon[] = allPokemonYes;
    //     const count: number = allMyPokemon['count'];
    //     console.log('catchAllPokemon');
    //     for (let i = 1; i < count - 157; i++) {
    //       this.getPokemon(String(i)).subscribe(onePokemonYes => {
    //         this.thisOnePokemon = onePokemonYes;
    //         this.MyPokemon.push(this.thisOnePokemon);
    //       });
    //     }
    //   });
    //   return this.MyPokemon;
    // }

    getAllPokemon(): Observable<Pokemon[]> {
      return this.http.get<Pokemon[]>(this.baseURL);
    }

    getPokemonWithId(id: string): Observable<Pokemon> {
      return this.http.get<Pokemon>(this.baseURL + id);
    }

    getPokemonWithRoute(route: string): Observable<Pokemon> {
      return this.http.get<Pokemon>(route);
    }

    getAbilities(route: string): Observable<Ability[]> {
      return this.http.get<Ability[]>(route);
    }

    getInCommonAbilities(route: string): Observable<Ability[]> {
      return this.http.get<Ability[]>(route);
    }

}
