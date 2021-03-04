import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../Pokemon';


@Injectable({
  providedIn: 'root'
})
export class AllserviceService {

  API = 'https://pokeapi.co/api/v2/pokemon/';


  constructor(private http: HttpClient) { }

  public getPokemons(): Observable<Pokemon[]> {
  return this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon/');
  }

}
