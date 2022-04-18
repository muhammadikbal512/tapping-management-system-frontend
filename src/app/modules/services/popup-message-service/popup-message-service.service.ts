import { Injectable } from '@angular/core';
import {ConfirmationService} from "primeng/api";
import { MessageFormatService } from '../module-services/message-format.service';

@Injectable({
  providedIn: 'root'
})
export class PopupMessageServiceService {

  constructor(private confirmationService: ConfirmationService) { }

  messageFormatConfirm(event: Event, onDelete: MessageFormatService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteIso8583Format();
      }
    })
  }
}
