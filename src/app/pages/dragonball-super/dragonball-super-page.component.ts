import { NgClass } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list-component/character-list-component";
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/dragonball/character-add-component/character-add-component/character-add-component";



@Component({
	templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
]
})
export class DragonballSuperPageComponent {




  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    { id: 2, name: 'Vegeta', power: 8500 }
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };

  });

	constructor() {}


  addCharacter(character: Character) {
    this.characters.update(chars => [...chars, character]);
  }

}
