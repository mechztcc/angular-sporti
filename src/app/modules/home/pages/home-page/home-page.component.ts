import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { HomeHeaderComponent } from '../../components/home-header/home-header.component';

@Component({
  selector: 'app-home-page',
  imports: [FontAwesomeModule, HomeHeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  icons: any = {
    calendar: faCalendar,
  };
}
