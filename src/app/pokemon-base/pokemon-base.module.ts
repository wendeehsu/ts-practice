import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: PokemonListComponent },
      { path: ':id', component: PokemonListComponent },
    ]
  }
]

@NgModule({
  declarations: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    PokemonListComponent
  ]
})
export class PokemonBaseModule { }
