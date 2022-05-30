import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ResponseMappingService } from 'src/app/modules/services/module-services/response-mapping.service';
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
    private confirmationService: PopupMessageService,
    private responseService: ResponseMappingService
  ) {}
  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: ICellRendererParams): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}

  editButton() {
    this.responseService.buttonStatus = 'edit';
    this.responseService.openDialog();
  }

  deleteButton(event: Event) {
    this.confirmationService.responseConfirm(event, this.responseService);
  }
}
