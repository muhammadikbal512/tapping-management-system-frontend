import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { IsoConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso-configuration.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-iso-config-action-button',
  templateUrl: './iso-config-action-button.component.html',
  styleUrls: ['./iso-config-action-button.component.css'],
})
export class IsoConfigActionButtonComponent implements AgRendererComponent {
  constructor(
    private isoConfigService: IsoConfigurationService,
    private confirmationService: PopupMessageService
  ) {}

  agInit(params: ICellRendererParams): void {}

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  editButton() {
    this.isoConfigService.openDialog();
    this.isoConfigService.buttonStatus = 'edit';
  }

  deleteButton(event: Event) {}
}
