import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { UserGroupService } from 'src/app/modules/services/module-services/user-management/user-group.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-user-group-action-button',
  templateUrl: './user-group-action-button.component.html',
  styleUrls: ['./user-group-action-button.component.css'],
})
export class UserGroupActionButtonComponent {
  cellValue: string = '';
  constructor(
    private UserGroupService: UserGroupService,
    private confirmationService: PopupMessageService
  ) {}

  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

  deleteButton(event: Event) {
    this.confirmationService.userGroupConfirm(event, this.UserGroupService);
  }

  editButton() {
    this.UserGroupService.openDialog();
    this.UserGroupService.buttonStatus = 'edit';
  }
}
