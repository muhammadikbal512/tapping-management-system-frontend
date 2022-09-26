import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { TypeService } from 'src/app/modules/services/module-services/type.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';
@Component({
  selector: 'app-type-action-button',
  templateUrl: './type-action-button.component.html',
  styleUrls: ['./type-action-button.component.css']
})
export class TypeActionButtonComponent implements AgRendererComponent {
  cellValue: string = '';
  constructor(
    private typeService: TypeService,
    private confirmationService: PopupMessageService
  ) {}

  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value
  }

  deleteButton(event: Event) {
    this.confirmationService.typeConfirm(event, this.typeService)
  }

  editButton() {
    this.typeService.openDialog();
    this.typeService.buttonStatus = 'edit';
  }
}
