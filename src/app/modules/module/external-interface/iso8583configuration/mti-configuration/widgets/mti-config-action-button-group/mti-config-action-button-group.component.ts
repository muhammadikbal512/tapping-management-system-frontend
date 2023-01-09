import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { HeaderConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/header-configuration.service';
import { MtiConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/mti-configuration.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-mti-config-action-button-group',
  templateUrl: './mti-config-action-button-group.component.html',
  styleUrls: ['./mti-config-action-button-group.component.css'],
})
export class MtiConfigActionButtonGroupComponent
  implements AgRendererComponent
{
  constructor(
    private mtiConfigService: MtiConfigurationService,
    private confirmationService: PopupMessageService
  ) {}

  agInit(params: ICellRendererParams): void {}

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  editButton() {
    this.mtiConfigService.openDialog();
    this.mtiConfigService.buttonStatus = 'edit';
  }

  deleteButton(event: Event) {
    this.confirmationService.mtiConfig(event, this.mtiConfigService);
  }
}
