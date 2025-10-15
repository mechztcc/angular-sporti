import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditSupervisionComponent } from './modal-edit-supervision.component';

describe('ModalEditSupervisionComponent', () => {
  let component: ModalEditSupervisionComponent;
  let fixture: ComponentFixture<ModalEditSupervisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditSupervisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditSupervisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
