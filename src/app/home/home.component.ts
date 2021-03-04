import { AllserviceService } from './../services/allservice.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../Pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemon: Pokemon = new Pokemon;
  pokemons: Pokemon[] = new Array;

  constructor(private servico: AllserviceService) { }

  ngOnInit(): void {
    this.listarPokemons();
  }

  listarPokemons() {
    console.log(this.pokemons);
    this.servico.getPokemons().subscribe(resposta => this.pokemons = resposta);
  }

}
