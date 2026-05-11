import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadCharactersFromLocalStorage = (): Character[]  => {
  const data = localStorage.getItem('characters');
  return data ? JSON.parse(data) : [];
}

@Injectable({
	providedIn: 'root',
})
export class DragonBallService {
	characters = signal<Character[]>(loadCharactersFromLocalStorage());

  constructor() {}


  saveToLocalStorage = effect(() => {
    console.log(`Total characters: ${this.characters().length}`);
    localStorage.setItem('characters', JSON.stringify(this.characters()));

  });

  addCharacter(character: Character) {
    this.characters.update(chars => [...chars, character]);
  }

}
