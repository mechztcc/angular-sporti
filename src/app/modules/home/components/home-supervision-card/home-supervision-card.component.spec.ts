import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSupervisionCardComponent } from './home-supervision-card.component';

describe('HomeSupervisionCardComponent', () => {
  let component: HomeSupervisionCardComponent;
  let fixture: ComponentFixture<HomeSupervisionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSupervisionCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSupervisionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
