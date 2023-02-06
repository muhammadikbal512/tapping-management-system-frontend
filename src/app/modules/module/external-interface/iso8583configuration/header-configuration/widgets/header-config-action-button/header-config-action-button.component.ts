import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { HeaderConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/header-configuration.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-header-config-action-button',
  templateUrl: './header-config-action-button.component.html',
  styleUrls: ['./header-config-action-button.component.css'],
})
export class HeaderConfigActionButtonComponent implements AgRendererComponent {
  constructor(
    private headerConfigService: HeaderConfigurationService,
    private confirmationService: PopupMessageService
  ) {}

  agInit(params: ICellRendererParams): void {}

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  editButton() {
    this.headerConfigService.openDialog();
    this.headerConfigService.buttonStatus = 'edit';
  }

  deleteButton(event: Event) {
    this.confirmationService.headerConfigConfirm(
      event,
      this.headerConfigService
    );
  }
}
