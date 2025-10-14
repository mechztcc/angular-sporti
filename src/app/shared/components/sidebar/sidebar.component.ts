import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChartSimple,
  faCog,
  faCrown,
  faEnvelope,
  faHome,
  faList,
  faMapPin,
  faPenClip,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import { InputToggleSwitchComponent } from '../input-toggle-switch/input-toggle-switch.component';

interface SidebarItem {
  label: string;
  icon: IconDefinition;
  badge?: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [FontAwesomeModule, InputToggleSwitchComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  icons: any = {
    profile: faCrown,
  };
  items: SidebarItem[] = [
    {
      label: 'Home',
      icon: faHome,
    },
    {
      label: 'Menu 1',
      icon: faChartSimple,
    },
    {
      label: 'Menu 2',
      icon: faCog,
    },
    {
      label: 'Menu 3',
      icon: faList,
    },
    {
      label: 'Menu 4',
      icon: faPenClip,
    },
    {
      label: 'Comunicados',
      icon: faEnvelope,
      badge: '3',
    },
    {
      label: 'Mapas',
      icon: faMapPin,
    },
  ];
}
