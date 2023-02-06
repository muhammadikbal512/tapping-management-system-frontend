import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { IsoFieldConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/iso-field-configuration.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-action-button-subfield',
  templateUrl: './action-button-subfield.component.html',
  styleUrls: ['./action-button-subfield.component.css'],
})
export class ActionButtonSubfieldComponent implements AgRendererComponent {
  constructor(
    private isoFieldConfigurationService: IsoFieldConfigurationService,
    private confirmationService: PopupMessageService
  ) {}

  agInit(params: ICellRendererParams): void {}

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  editButton() {
    this.isoFieldConfigurationService.openSubFieldDialog();
    this.isoFieldConfigurationService.buttonStatusSubField = 'edit';
  }

  deleteButton(event: any) {
    this.confirmationService.iso8583SubFieldConfigurationConfirm(
      event,
      this.isoFieldConfigurationService
    );
  }
}
