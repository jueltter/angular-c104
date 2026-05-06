import { Component } from '@angular/core';

@Component({
	selector: 'app-counter-page',
	standalone: true,
	template: `
		<p>Counter: {{ counter }}</p>
    <button (click)="increaseBy(1)">Increase by 1</button>
	`,
})
export class CounterPageComponent {
  counter = 10;

  increaseBy(value: number) {
    this.counter += value;
  }
}
