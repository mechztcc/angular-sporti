import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalendar,
  faChartArea,
  faChartSimple,
  faEnvelope,
  faUser,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { HomeHeaderComponent } from '../../components/home-header/home-header.component';
import { NgClass } from '@angular/common';

interface Cards {
  title: string;
  value: number;
  icon: IconDefinition;
  bg: string;
}

@Component({
  selector: 'app-home-page',
  imports: [FontAwesomeModule, HomeHeaderComponent, NgClass],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  icons: any = {
    calendar: faCalendar,
  };

  cards: Cards[] = [
    {
      title: 'Realizadas',
      value: 1.728,
      icon: faChartSimple,
      bg: 'bg-teal-400'
    },
    {
      title: 'Agendadas',
      value: 1.230,
      icon: faCalendar,
      bg: 'bg-zinc-50'
    },
    {
      title: 'Autuações',
      value: 1.680,
      icon: faEnvelope,
      bg: 'bg-zinc-50'
    },
    {
      title: 'Empresas Ativas',
      value: 3.680,
      icon: faUser,
      bg: 'bg-purple-400'
    },
  ];
}
