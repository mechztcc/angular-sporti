import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGaugeChartComponent } from './home-gauge-chart.component';

describe('HomeGaugeChartComponent', () => {
  let component: HomeGaugeChartComponent;
  let fixture: ComponentFixture<HomeGaugeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeGaugeChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGaugeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
