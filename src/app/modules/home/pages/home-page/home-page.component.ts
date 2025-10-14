import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalendar,
  faChartArea,
  faChartSimple,
  faChevronDown,
  faClose,
  faEnvelope,
  faUser,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { HomeHeaderComponent } from '../../components/home-header/home-header.component';
import { NgClass } from '@angular/common';
import { HomePieChartComponent } from '../../components/home-pie-chart/home-pie-chart.component';
import { HomeGaugeChartComponent } from '../../components/home-gauge-chart/home-gauge-chart.component';
import { HomeSupervisionCardComponent } from '../../components/home-supervision-card/home-supervision-card.component';
import { ISupervision } from '../../shared/interfaces/supervision.interface';

interface Cards {
  title: string;
  value: number;
  icon: IconDefinition;
  bg: string;
}

@Component({
  selector: 'app-home-page',
  imports: [
    FontAwesomeModule,
    HomeHeaderComponent,
    NgClass,
    HomePieChartComponent,
    HomeGaugeChartComponent,
    HomeSupervisionCardComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  icons: any = {
    calendar: faCalendar,
    close: faClose,
    down: faChevronDown
  };

  cards: Cards[] = [
    {
      title: 'Realizadas',
      value: 1.728,
      icon: faChartSimple,
      bg: 'bg-teal-400',
    },
    {
      title: 'Agendadas',
      value: 1.23,
      icon: faCalendar,
      bg: 'bg-zinc-50',
    },
    {
      title: 'Autuações',
      value: 1.68,
      icon: faEnvelope,
      bg: 'bg-zinc-50',
    },
    {
      title: 'Empresas Ativas',
      value: 3.68,
      icon: faUser,
      bg: 'bg-purple-400',
    },
  ];

  lastSupervisions: ISupervision[] = [
    {
      city: 'Recife',
      state: 'PE',
      dateVisit: new Date().toISOString(),
      name: 'Academia da superação e vitória',
      owner: 'Alberto paiva',
      region: '#01',
      status: 'Concluída',
      statusId: 3,
      type: 'Postura',
    },

    {
      city: 'Recife',
      state: 'PE',
      dateVisit: new Date().toISOString(),
      name: 'Academia da superação e vitória',
      owner: 'Alberto paiva',
      region: '#01',
      status: 'Concluída',
      statusId: 3,
      type: 'Postura',
    },
  ];

  nextSupervisions: ISupervision[] = [
    {
      city: 'Recife',
      state: 'PE',
      dateVisit: new Date().toISOString(),
      name: 'Academia da superação e vitória',
      owner: 'Alberto paiva',
      region: '#01',
      status: 'Agendada',
      statusId: 1,
      type: 'Postura',
    },

    {
      city: 'Recife',
      state: 'PE',
      dateVisit: new Date().toISOString(),
      name: 'Academia da superação e vitória',
      owner: 'Alberto paiva',
      region: '#01',
      status: 'Agendada',
      statusId: 1,
      type: 'Postura',
    },
  ];
}
