import { TestBed } from '@angular/core/testing';

import { SidebarStore } from './sidebar-store.service';

describe('SidebarStore', () => {
  let service: SidebarStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
