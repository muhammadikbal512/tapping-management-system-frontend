import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { RolesTableService } from 'src/app/modules/services/module-services/user-management/roles-table.service';
import { RolesService } from 'src/app/modules/services/module-services/user-management/roles.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-action-button-roles',
  templateUrl: './action-button-roles.component.html',
  styleUrls: ['./action-button-roles.component.css'],
})
export class ActionButtonRolesComponent implements AgRendererComponent {
  cellValue = '';
  constructor(
    private rolesService: RolesService,
    private confirmationService: PopupMessageService,
    private roleTableService: RolesTableService
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

  editButton() {
    this.rolesService.openDialog();
    this.rolesService.buttonStatus = 'edit';
  }

  deleteButton(event: Event) {
    this.confirmationService.roleConfirm(
      event,
      this.rolesService
    );
  }
}
