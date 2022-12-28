import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { UserService } from 'src/app/modules/services/module-services/user-management/user.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-users-action-button',
  templateUrl: './user-action-button.component.html',
  styleUrls: ['./user-action-button.component.css']
})
export class UserActionButtonComponent implements AgRendererComponent {
  cellValue: string = '';
  constructor(
    private userService: UserService,
    private confirmationService: PopupMessageService
  ) {}

  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value
  }

  deleteButton(event: Event) {
    this.confirmationService.userConfirm(event, this.userService)
  }

  editButton() {
    this.userService.openDialog();
    this.userService.buttonStatus = 'edit';
  }

  resetPassword(event: Event) {
    this.confirmationService.resetPassword(event, this.userService);
  }

}
