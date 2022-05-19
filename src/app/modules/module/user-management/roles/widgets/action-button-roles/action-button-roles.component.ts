import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { RolesService } from 'src/app/modules/services/module-services/roles.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-action-button-roles',
  templateUrl: './action-button-roles.component.html',
  styleUrls: ['./action-button-roles.component.css'],
})
export class ActionButtonRolesComponent implements AgRendererComponent {
  constructor(
    private rolesService: RolesService,
    private confirmationService: PopupMessageService
  ) {}

  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: ICellRendererParams): void {
    throw new Error('Method not implemented.');
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

  deleteButton(event: Event) {
    this.confirmationService.roleConfirm(event, this.rolesService);
  }
}
