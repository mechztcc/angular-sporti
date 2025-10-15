import { HostListener, Injectable } from '@angular/core';
import { Store } from '../../interfaces/store.interface';

interface State {
  isOpened: boolean;
  onHandle(): void;
}

@Injectable({
  providedIn: 'root',
})
export class SidebarStore implements Store<State> {
  readonly tabletBreakpoint = 768;

  state: State = {
    isOpened: true,
    onHandle() {
      this.isOpened = !this.isOpened;
    },
  };

  get isMobile() {
    return window.innerWidth <= 1024;
  }

  checkWindowSize(width: number) {
    if (width < this.tabletBreakpoint) {
      this.state.isOpened = false;
    } else {
      this.state.isOpened = true;
    }
  }

  constructor() {}
}
