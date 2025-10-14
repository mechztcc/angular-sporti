import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCalendar,
  faChartArea,
  faChartSimple,
  faChevronDown,
  faChevronUp,
  faCircleNotch,
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
import { HomeStore } from '../../shared/stores/home-store.service';

interface Cards {
  title: string;
  value: number;
  icon: IconDefinition;
  bg: string;
}

interface Visibility {
  type: 'last' | 'next';
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
export class HomePageComponent implements OnInit {
  icons: any = {
    calendar: faCalendar,
    close: faClose,
    down: faChevronDown,
    up: faChevronUp,
    load: faCircleNotch
  };

  isShowNext: boolean = true;
  isShowLast: boolean = true;

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

  constructor(public store: HomeStore) {}

  ngOnInit(): void {
    this.store.onList();
  }

  onHandleVisibility({ type }: Visibility) {
    if (type == 'last') {
      this.isShowLast = !this.isShowLast;
      return;
    }

    this.isShowNext = !this.isShowNext;
  }
}
