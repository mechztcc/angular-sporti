import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKpiComponent } from './card-kpi.component';

describe('CardKpiComponent', () => {
  let component: CardKpiComponent;
  let fixture: ComponentFixture<CardKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardKpiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
