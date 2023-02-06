import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ResponseMappingService } from 'src/app/modules/services/module-services/external-interfaces/response-mapping.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-iso8583-response-mapping-action-button',
  templateUrl: './iso8583-response-mapping-action-button.component.html',
  styleUrls: ['./iso8583-response-mapping-action-button.component.css'],
})
export class Iso8583ResponseMappingActionButtonComponent
  implements AgRendererComponent
{
  constructor(
    private responseMappingService: ResponseMappingService,
    private confirmationService: PopupMessageService
  ) {}

  agInit(params: ICellRendererParams): void {}

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  editButton() {
    this.responseMappingService.openDialog();
    this.responseMappingService.buttonStatus = 'edit';
  }

  deleteButton(event: Event) {
    this.confirmationService.responseConfirm(
      event,
      this.responseMappingService
    );
  }
}
