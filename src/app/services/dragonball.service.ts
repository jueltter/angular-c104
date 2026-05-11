import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
	providedIn: 'root',
})
export class DragonBallService {
	characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    { id: 2, name: 'Vegeta', power: 8500 }
  ]);

  constructor() {}


  saveToLocalStorage = effect(() => {
    console.log(`Total characters: ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()));

  });

  addCharacter(character: Character) {
    this.characters.update(chars => [...chars, character]);
  }

}
