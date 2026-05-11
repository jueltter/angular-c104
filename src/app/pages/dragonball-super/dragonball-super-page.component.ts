import { NgClass } from '@angular/common';
import { Component, signal, computed } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/cahracter-list-component/character-list-component";
import { Character } from '../../interfaces/character.interface';



@Component({
	templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
  imports: [
    CharacterListComponent
]
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);


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

  addCharacter() {
    if ( !this.name() || !this.power() || this.power() <= 0 ) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };

    this.characters.update(chars => [...chars, newCharacter]);
    this.resetFields();
  }

  resetFields(){
this.name.set('');
    this.power.set(0);
  }
}
