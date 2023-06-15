import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

interface Pokemon {
  id: number,
  name: string,
  type: string,
  isCool: boolean
}

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  favoriteAnimal: string = "cat";
  pokemonName: string = "pikachu";
  changeMethod: boolean = true;
  bv_list: number[] = [1500,1000,900];
  myName: string = "wendee";

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((data: Params) => {
      console.log("data:", data);
    }) 
  }

  handleSubmit(e: any) {
    console.log(e);
  }

  toggleUseRatio(e: any) {
    this.changeMethod = !this.changeMethod;
    console.log(this.changeMethod);
  }

  handleClick(value: any) {
    console.log(value);
  }

  handleSelect(value: any) {
    console.log("selected:", value);
  }

  pokemons: Pokemon[] = [{
    id: 1,
    name: "aaa",
    type: "fire",
    isCool: true
  },{
    id: 2,
    name: "bbb",
    type: "water",
    isCool: true
  },{
    id: 3,
    name: "ccc",
    type: "water",
    isCool: false
  },{
    id: 4,
    name: "ddd",
    type: "fire",
    isCool: true
  }]

}
