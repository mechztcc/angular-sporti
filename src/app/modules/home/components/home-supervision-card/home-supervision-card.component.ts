import { DatePipe, NgClass } from '@angular/common';
import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalendar,
  faCheck,
  faCircleNotch,
  faClock,
  faLocationDot,
  faMagnifyingGlass,
  faMapLocation,
  faPen,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { ISupervision } from '../../shared/interfaces/supervision.interface';
import { ModalEditSupervisionComponent } from '../modal-edit-supervision/modal-edit-supervision.component';

@Component({
  selector: 'app-home-supervision-card',
  imports: [
    FontAwesomeModule,
    DatePipe,
    NgClass,
    ModalEditSupervisionComponent,
  ],
  templateUrl: './home-supervision-card.component.html',
  styleUrl: './home-supervision-card.component.scss',
})
export class HomeSupervisionCardComponent {
  data = input<ISupervision>();

  icons: any = {
    search: faMagnifyingGlass,
    user: faUser,
    calendar: faCalendar,
    map: faMapLocation,
    pen: faPen,
    location: faLocationDot,
    clock: faClock,
    load: faCircleNotch,
    check: faCheck,
  };
}
