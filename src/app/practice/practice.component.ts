import { Component, OnInit } from '@angular/core';

interface Pokemon {
  id: number,
  name: string,
  type: string,
  isCool: boolean
}

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  favoriteAnimal: string = "cat";
  pokemonName: string = "pikachu";
  changeMethod: boolean = true;
  bv_list: number[] = [1500,1000,900];
  myName: string = "wendee";

  constructor() { }

  ngOnInit() {
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
