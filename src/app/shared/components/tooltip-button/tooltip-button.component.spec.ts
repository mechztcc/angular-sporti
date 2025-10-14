import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipButtonComponent } from './tooltip-button.component';

describe('TooltipButtonComponent', () => {
  let component: TooltipButtonComponent;
  let fixture: ComponentFixture<TooltipButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
