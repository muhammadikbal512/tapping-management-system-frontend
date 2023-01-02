import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { IsoFieldConfigurationService } from 'src/app/modules/services/module-services/iso-field-configuration.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-action-button-iso8583-field-configuration',
  templateUrl: './action-button-field-config.component.html',
  styleUrls: ['./action-button-field-config.component.css'],
})
export class ActionButtonIso8583FieldConfigurationComponent
  implements AgRendererComponent
{
  constructor(
    private isoFieldConfigurationService: IsoFieldConfigurationService,
    private confirmationService: PopupMessageService
  ) {}

  agInit(params: ICellRendererParams): void {}

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  editButton() {
    this.isoFieldConfigurationService.openDialog();
    this.isoFieldConfigurationService.buttonStatus = 'edit';
  }

  deleteButton(event: any) {
    this.confirmationService.iso8583FieldConfigurationConfirm(
      event,
      this.isoFieldConfigurationService
    );
  }
}
