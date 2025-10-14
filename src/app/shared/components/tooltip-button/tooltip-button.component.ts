import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tooltip-button',
  imports: [],
  templateUrl: './tooltip-button.component.html',
  styleUrl: './tooltip-button.component.scss',
})
export class TooltipButtonComponent {
  label = input<string>();
  pressed = output<boolean>()

  onClick() {
    this.pressed.emit(true)
  }
}
