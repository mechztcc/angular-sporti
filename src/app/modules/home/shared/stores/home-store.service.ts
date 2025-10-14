import { Injectable, signal, WritableSignal } from '@angular/core';
import { ISupervision } from '../interfaces/supervision.interface';
import { HomeService } from '../services/home.service';

interface IState {
  lastSupervisions: WritableSignal<ISupervision[]>;
  nextSupervisions: WritableSignal<ISupervision[]>;
  isLoading: boolean;

  get hasLastSupervisions(): boolean;
  get hasNextSupervisions(): boolean;

  onClearState(): void;
}

@Injectable({
  providedIn: 'root',
})
export class HomeStore {
  state: IState = {
    lastSupervisions: signal<ISupervision[]>([]),
    nextSupervisions: signal<ISupervision[]>([]),
    isLoading: false,

    onClearState: function (): void {
      this.lastSupervisions.set([]);
      this.nextSupervisions.set([]);
      this.isLoading = false;
    },

    get hasLastSupervisions() {
      return this.lastSupervisions().length > 0;
    },
    
    get hasNextSupervisions() {
       return this.nextSupervisions().length > 0;
    }
  };

  constructor(private homeService: HomeService) {}

  onList() {
    this.state.isLoading = true;
    this.homeService.onListSupervisions().subscribe((data) => {
      this.state.lastSupervisions.set(data.lastSupervisions);
      this.state.nextSupervisions.set(data.nextSupervisions);
    }).add(() => {
      this.state.isLoading = false;
    });
  }
}
