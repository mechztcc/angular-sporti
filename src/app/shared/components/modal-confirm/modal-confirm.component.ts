import { Component, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faClose,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { HomeService } from '../../../modules/home/shared/services/home.service';
import { ToasterService } from '../../services/toastr/toaster.service';
import { HomeStore } from '../../../modules/home/shared/stores/home-store.service';

@Component({
  selector: 'app-modal-confirm',
  imports: [FontAwesomeModule],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.scss',
})
export class ModalConfirmComponent {
  icons: any = {
    close: faClose,
    alert: faTriangleExclamation,
  };

  hasOpened: boolean = false;

  data = input<{ source: string; type: 'last' | 'next' }>();

  confirm = output<boolean>();

  constructor(
    private homeService: HomeService,
    private toastr: ToasterService,
    private store: HomeStore
  ) {}

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

  onConfirm() {
    this.confirm.emit(true);
    this.onHandleModal();
    this.homeService.onRemoveAll(this.data()!.type).subscribe((data) => {
      this.toastr.onHandle('Supervisões removidas com sucesso!', 'success');
      this.store.onList();
    });
  }

  onClose() {
    scrollTo(0, 0);
    this.hasOpened = false;
  }

  onOpen() {
    scrollTo(0, 0);
    this.hasOpened = true;
  }
}
