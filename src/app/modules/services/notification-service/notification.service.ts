import { Injectable } from '@angular/core';
import { NotificationTypeEnum } from 'src/app/enum/notification-type';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private messageService: MessageService) {}

  public notify(
    type: NotificationTypeEnum,
    responseMessage: string,
    responseCode: number
  ) {
    if (type == 'success') {
      this.messageService.add({
        severity: type,
        summary: this.upperCaseFirstLetter(type),
        detail: responseMessage,
        life: 2000,
      });
    } else {
      this.messageService.add({
        severity: type,
        summary: this.upperCaseFirstLetter(type) + ' ' + responseCode,
        detail: responseMessage,
        life: 2000,
      });
    }
  }

  upperCaseFirstLetter(char: string): string {
    return char.charAt(0).toUpperCase() + char.slice(1);
  }

  successNotification(responseMessage: string, responseCode: number) {
    this.notify(NotificationTypeEnum.SUCCESS, responseMessage, responseCode);
  }

  errorNotification(message: any, statusCode: any) {
    this.notify(NotificationTypeEnum.ERROR, message, statusCode);
  }

  clearNotification() {
    this.messageService.clear();
  }
}
