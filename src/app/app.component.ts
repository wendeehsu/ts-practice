import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Pokemon {
  id: number,
  name: string,
  type: string,
  isCool: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  favoriteAnimal: string = "cat";
  pokemonName: string = "pikachu";
  changeMethod: boolean = true;

  constructor() {

  }

  toggleUseRatio(e: any) {
    this.changeMethod = !this.changeMethod;
    console.log(this.changeMethod);
  }

  handleClick(value: any) {
    console.log(value);
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
