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
    message: string,
    statusCode: number
  ) {
    if (type == 'success') {
      this.messageService.add({
        severity: type,
        summary: this.upperCaseFirstLetter(type),
        detail: message,
        life: 2000,
      });
    } else {
      this.messageService.add({
        severity: type,
        summary: this.upperCaseFirstLetter(type) + ' ' + statusCode,
        detail: message,
        life: 2000,
      });
    }
  }

  upperCaseFirstLetter(char: string): string {
    return char.charAt(0).toUpperCase() + char.slice(1);
  }

  successNotification(message: string, statusCode: number) {
    this.notify(NotificationTypeEnum.SUCCESS, message, statusCode);
  }

  errorNotification(message: string, statusCode: number) {
    this.notify(NotificationTypeEnum.ERROR, message, statusCode);
  }

  clearNotification() {
    this.messageService.clear();
  }
}
