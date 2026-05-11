import { NgClass } from '@angular/common';
import { Component, signal, computed } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
	templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
  imports: [
   // NgClass
  ]
})
export class DragonballPageComponent {

  name = signal("Gohan");
  power = signal(100);


  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 7000 },
    { id: 4, name: 'Yamcha', power: 500 }
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };

  });

	constructor() {}

  addCharacter() {
    this.characters.update(chars => [...chars, { id: chars.length + 1, name: this.name(), power: this.power() }]);
    this.name.set('');
    this.power.set(0);
  }
}
