import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IListSupervisionsResponse } from '../interfaces/list-supervisions-response.interface';
import { ISupervision } from '../interfaces/supervision.interface';
import {
  lastSupervisions,
  nextSupervisions,
} from '../../../../shared/mocks/dumb.data.json';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private lastSupervisions: ISupervision[] = [];
  private nextSupervisions: ISupervision[] = [];

  constructor(private http: HttpClient) {
    this.lastSupervisions = lastSupervisions;
    this.nextSupervisions = nextSupervisions;
  }

  onListSupervisions(): Observable<IListSupervisionsResponse> {
    const randomDelay = Math.floor(Math.random() * 4000) + 1000;
    return of({ lastSupervisions, nextSupervisions }).pipe(delay(randomDelay));
  }

  onUpdate(payload: ISupervision): Observable<ISupervision> {
  const list = payload.statusId === 3 ? lastSupervisions : nextSupervisions;
  const index = list.findIndex((el) => el.id === payload.id);

  if (index !== -1) {
    list[index] = {
      ...list[index],
      ...payload,
    };
  }

  return of(list[index]);
}
}
