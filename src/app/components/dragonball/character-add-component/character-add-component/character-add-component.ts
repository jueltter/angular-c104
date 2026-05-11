import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import type { Character } from '../../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent {

name = signal<string>('');
  power = signal<number>(0);


addCharacter() {
if ( !this.name() || !this.power() || this.power() <= 0 ) return;

    const newCharacter: Character = {
      id: 1000,
      name: this.name(),
      power: this.power()
    };

    console.log({newCharacter});

    // this.characters.update(chars => [...chars, newCharacter]);
    this.resetFields();


}

resetFields(){
this.name.set('');
    this.power.set(0);
  }
}
