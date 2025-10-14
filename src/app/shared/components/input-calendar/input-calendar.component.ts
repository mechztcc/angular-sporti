import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import {
  FlatpickrDirective,
  provideFlatpickrDefaults,
} from 'angularx-flatpickr';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-input-calendar',
  imports: [FontAwesomeModule, FlatpickrDirective, FormsModule],
  providers: [provideFlatpickrDefaults()],

  templateUrl: './input-calendar.component.html',
  styleUrl: './input-calendar.component.scss',
})
export class InputCalendarComponent implements OnInit, OnDestroy {

  icons: any = {
    calendar: faCalendar,
  };

  today: string = '';

  subscription!: Subscription;

  onPrepareToday() {
    const now = new Date();
    const date = now.toLocaleDateString('pt-BR');
    const time = now.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
    this.today = `${date} ${time}`;
  }

  ngOnInit(): void {
    this.subscription = interval(1).subscribe(() => {
      this.onPrepareToday();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
