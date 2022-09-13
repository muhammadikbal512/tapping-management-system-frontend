import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { InstitutionService } from 'src/app/modules/services/module-services/institution.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-user-action-button',
  templateUrl: './institution-action-button.component.html',
  styleUrls: ['./institution-action-button.component.css']
})
export class InstitutionActionButtonComponent implements AgRendererComponent {
  cellValue: string = '';
  constructor(
    private institutionService: InstitutionService,
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
    this.confirmationService.institutionConfirm(event, this.institutionService)
  }

  editButton() {
    this.institutionService.openDialog();
    this.institutionService.buttonStatus = 'edit';
  }

}
