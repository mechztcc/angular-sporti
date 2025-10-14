import { Component, input } from '@angular/core';
import { ISupervision } from '../../shared/interfaces/supervision.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faClock, faLocationDot, faMagnifyingGlass, faMapLocation, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import { DatePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-home-supervision-card',
  imports: [FontAwesomeModule, DatePipe, NgClass],
  templateUrl: './home-supervision-card.component.html',
  styleUrl: './home-supervision-card.component.scss',
})
export class HomeSupervisionCardComponent {
  icons: any = {
    search: faMagnifyingGlass,
    user: faUser,
    calendar: faCalendar,
    map: faMapLocation,
    pen: faPen,
    location: faLocationDot,
    clock: faClock
  };
  data = input<ISupervision>();
}
