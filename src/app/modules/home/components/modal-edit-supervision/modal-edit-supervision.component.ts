import { NgClass } from '@angular/common';
import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { InputErrorComponent } from '../../../../shared/components/input-error/input-error.component';
import { ISupervision } from '../../shared/interfaces/supervision.interface';
import { HomeService } from '../../shared/services/home.service';
import { HomeStore } from '../../shared/stores/home-store.service';
import { ToasterService } from '../../../../shared/services/toastr/toaster.service';

@Component({
  selector: 'app-modal-edit-supervision',
  imports: [
    FontAwesomeModule,
    ReactiveFormsModule,
    NgClass,
    InputErrorComponent,
  ],
  templateUrl: './modal-edit-supervision.component.html',
  styleUrl: './modal-edit-supervision.component.scss',
})
export class ModalEditSupervisionComponent implements OnChanges {
  data = input<ISupervision>();

  icons = {
    close: faClose,
    location: faLocationDot,
  };

  hasOpened: boolean = false;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    private store: HomeStore,
    private toastr: ToasterService
  ) {
    this.form = this.fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      dateVisit: ['', Validators.required],
      name: ['', Validators.required],
      owner: ['', Validators.required],
      region: ['', Validators.required],
      status: ['', Validators.required],
      statusId: [null],
      type: ['', Validators.required],
      id: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.get('city')?.setValue(this.data()?.city);
    this.form.get('state')?.setValue(this.data()?.state);
    this.form.get('name')?.setValue(this.data()?.name);
    this.form.get('dateVisit')?.setValue(this.data()?.dateVisit);
    this.form.get('owner')?.setValue(this.data()?.owner);
    this.form.get('type')?.setValue(this.data()?.type);
    this.form.get('status')?.setValue(this.data()?.status);
    this.form.get('statusId')?.setValue(this.data()?.statusId);
    this.form.get('region')?.setValue(this.data()?.region);
    this.form.get('id')?.setValue(this.data()?.id);
  }

  onSubmit() {
    if (this.form.invalid) {
      // this.toastr.onHandle('Formulário inválido', 'error');
      return;
    }

    this.homeService
      .onUpdate(this.form.value)
      .subscribe((data) => {})
      .add(() => {
        this.toastr.onHandle('Informações atualizadas com sucesso!', 'success');
        this.store.onList();
      });
  }

  onHandleModal() {
    scrollTo(0, 0);
    this.hasOpened = !this.hasOpened;
  }

  onCloseBackDrop(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (target.classList.contains('backdrop')) {
      this.hasOpened = false;
    }
  }
}
