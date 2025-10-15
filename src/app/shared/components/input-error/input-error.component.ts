import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input-error',
  imports: [FontAwesomeModule],
  templateUrl: './input-error.component.html',
  styleUrl: './input-error.component.scss',
})
export class InputErrorComponent {
  msg = input<string>('Campo inválido');
  icons: any = {
    error: faClose,
  };
}
