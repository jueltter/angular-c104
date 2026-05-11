import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
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

  newCharacter = output<Character>();


addCharacter() {
if ( !this.name() || !this.power() || this.power() <= 0 ) return;

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 10000), // Genera un ID aleatorio
      name: this.name(),
      power: this.power()
    };

    console.log({newCharacter});

    this.newCharacter.emit(newCharacter);
    this.resetFields();


}

resetFields(){
this.name.set('');
    this.power.set(0);
  }
}
