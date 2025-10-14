import { TestBed } from '@angular/core/testing';

import { HomeStore } from './home-store.service';

describe('HomeStore', () => {
  let service: HomeStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
