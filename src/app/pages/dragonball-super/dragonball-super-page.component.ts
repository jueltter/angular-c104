import { NgClass } from '@angular/common';
import { Component, signal, computed, inject } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list-component/character-list-component";
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from "../../components/dragonball/character-add-component/character-add-component/character-add-component";
import { DragonBallService } from '../../services/dragonball.service';



@Component({
	templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
]
})
export class DragonballSuperPageComponent {
  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };

  });

  public dragonballService = inject(DragonBallService);

	//constructor(public dragonballService: DragonBallService) {}

}
