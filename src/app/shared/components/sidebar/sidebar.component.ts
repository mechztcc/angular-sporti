import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChartSimple,
  faCog,
  faCrown,
  faEnvelope,
  faGlobe,
  faHome,
  faList,
  faMapPin,
  faPenClip,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { InputToggleSwitchComponent } from '../input-toggle-switch/input-toggle-switch.component';
import { SidebarStore } from '../../services/sidebar/sidebar-store.service';
import { NgClass } from '@angular/common';

interface SidebarItem {
  label: string;
  icon: IconDefinition;
  badge?: string | null;
}

@Component({
  selector: 'app-sidebar',
  imports: [FontAwesomeModule, InputToggleSwitchComponent, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  icons: any = {
    profile: faCrown,
    global: faGlobe
  };

  
  items: SidebarItem[] = [
    {
      label: 'Home',
      icon: faHome,
      badge: null,
    },
    {
      label: 'Menu 1',
      icon: faChartSimple,
      badge: null,
    },
    {
      label: 'Menu 2',
      icon: faCog,
      badge: null,
    },
    {
      label: 'Menu 3',
      icon: faList,
      badge: null,
    },
    {
      label: 'Menu 4',
      icon: faPenClip,
      badge: null,
    },
    {
      label: 'Comunicados',
      icon: faEnvelope,
      badge: '3',
    },
    {
      label: 'Mapas',
      icon: faMapPin,
      badge: null,
    },
  ];

  constructor(public store: SidebarStore) {}
}
