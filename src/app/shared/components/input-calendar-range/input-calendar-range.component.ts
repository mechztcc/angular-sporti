import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';
import { FlatpickrDefaultsInterface, FlatpickrDirective, provideFlatpickrDefaults } from 'angularx-flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';

@Component({
  selector: 'app-input-calendar-range',
  imports: [FontAwesomeModule, FlatpickrDirective, FormsModule],
  providers: [provideFlatpickrDefaults()],
  templateUrl: './input-calendar-range.component.html',
  styleUrl: './input-calendar-range.component.scss',
})
export class InputCalendarRangeComponent {
  change = output<string>();

  dateRangeOptions: FlatpickrDefaultsInterface = {
    mode: 'range',
    dateFormat: 'Y-m-d',
    altFormat: 'd/m/Y',
    altInput: true,
    locale: Portuguese,
  };
  icons: any = {
    clock: faCalendar,
  };

  selectedDate = signal<string | null>(null);

  onChange() {
    this.change.emit(this.selectedDate() ?? '');
  }
}
