import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ChannelService } from '../module-services/channel.service';
import { MessageFormatService } from '../module-services/message-format.service';

@Injectable({
  providedIn: 'root',
})
export class PopupMessageService {
  constructor(private confirmationService: ConfirmationService) {}

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

  channelConfirm(event: Event, onDelete: ChannelService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteChannel();
      }
    })
  }
}
