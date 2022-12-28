import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ChannelTypeService } from 'src/app/modules/services/module-services/channel-configuration/channel-type.service';
import { AidConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/aid-configuration.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-header-config-action-button',
  templateUrl: './header-config-action-button.component.html',
  styleUrls: ['./header-config-action-button.component.css']
})
export class HeaderConfigActionButtonComponent implements AgRendererComponent
{
  constructor(
    private aidConfigService: AidConfigurationService,
    private confirmationService: PopupMessageService
  ) {}

  agInit(params: ICellRendererParams): void {}

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  editButton() {
    this.aidConfigService.openDialog();
    this.aidConfigService.buttonStatus = 'edit';
  }

  deleteButton(event: Event) {
    
  }
}
