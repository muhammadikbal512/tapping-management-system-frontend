import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { AidConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/aid-configuration.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-aid-config-action-button',
  templateUrl: './aid-config-action-button.component.html',
  styleUrls: ['./aid-config-action-button.component.css'],
})
export class AidConfigActionButtonComponent implements AgRendererComponent {
  cellValue: string = '';
  constructor(
    private aidConfigService: AidConfigurationService,
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

  editButton() {
    this.aidConfigService.openDialog();
    this.aidConfigService.buttonStatus = 'edit';
  }

  deleteButton(event: Event) {
    this.confirmationService.aidConfigConfirm(event, this.aidConfigService);
  }
}
