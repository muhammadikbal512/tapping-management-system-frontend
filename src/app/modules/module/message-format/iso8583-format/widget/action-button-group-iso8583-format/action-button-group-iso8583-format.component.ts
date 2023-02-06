import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { MessageFormatService } from 'src/app/modules/services/module-services/message-format/message-format.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-action-button-group-iso8583-format',
  templateUrl: './action-button-group-iso8583-format.component.html',
  styleUrls: ['./action-button-group-iso8583-format.component.css'],
})
export class ActionButtonGroupIso8583FormatComponent
  implements AgRendererComponent
{
  date = new Date();
  cellValue: string = '';
  constructor(
    private iso8583FormatService: MessageFormatService,
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
    this.iso8583FormatService.openDialog();
    this.iso8583FormatService.buttonStatus = 'edit';
  }

  deleteButton(event: Event) {
    this.confirmationService.messageFormatConfirm(
      event,
      this.iso8583FormatService
    );
  }
}
