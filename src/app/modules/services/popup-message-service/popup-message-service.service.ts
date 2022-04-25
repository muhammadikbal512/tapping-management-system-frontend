import { Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ChannelTypeService } from '../module-services/channel-type.service';
import { ChannelService } from '../module-services/channel.service';
import { Iso8583DialectService } from '../module-services/iso8583-dialect.service';
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

  channelTypeConfirm(event: Event, onDelete: ChannelTypeService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteChannelType();
      }
    })
  }

  iso8583DialectConfirm(event: Event, onDelete: Iso8583DialectService) {
    this.confirmationService.confirm({
      target: event.target || undefined,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        onDelete.onDeleteIso8583Dialect();
      }
    })
  }
}
