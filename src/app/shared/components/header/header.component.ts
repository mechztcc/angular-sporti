import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faChevronDown, faGlobe, faIndent, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { SidebarStore } from '../../services/sidebar-store.service';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  icons: any = {
    global: faGlobe,
    user: faUser,
    menu: faBars,
    search: faMagnifyingGlass,
    down: faChevronDown,
    ident: faIndent
  }


  constructor(public store: SidebarStore) {}
}
