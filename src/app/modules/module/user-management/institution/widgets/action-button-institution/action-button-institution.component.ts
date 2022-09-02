import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import {
  ICellRendererParams,
  IAfterGuiAttachedParams,
} from 'ag-grid-community';
import { InstitutionService } from 'src/app/modules/services/module-services/institution.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-action-button-institution',
  templateUrl: './action-button-institution.component.html',
  styleUrls: ['./action-button-institution.component.css'],
})
export class ActionButtonInstitutionComponent implements AgRendererComponent {
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
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

  deleteButton(event: Event) {
    this.confirmationService.institutionConfirm(event, this.institutionService)
  }
}
