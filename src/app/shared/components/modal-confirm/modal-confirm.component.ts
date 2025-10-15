import { Component, input, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

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

  data = input<{ source: string }>();

  confirm = output<boolean>();

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
