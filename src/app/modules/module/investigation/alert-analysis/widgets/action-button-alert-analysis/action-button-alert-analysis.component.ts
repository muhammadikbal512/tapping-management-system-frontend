import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { AlertInvestigationService } from 'src/app/modules/services/module-services/alert-investigation.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-action-button-alert-analysis',
  templateUrl: './action-button-alert-analysis.component.html',
  styleUrls: ['./action-button-alert-analysis.component.css'],
})
export class ActionButtonAlertAnalysisComponent implements AgRendererComponent {
  date = new Date();
  cellValue: string = '';
  constructor(
    private confirmationService: PopupMessageService,
    private alertService: AlertInvestigationService
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

  takeActionButton() {
    this.alertService.openTakeActionDialog();
  }

  forwardActionButton() {
    this.alertService.forwardActionDialog();
    this.alertService.buttonStatus = 'forward';
  }

  deleteButton(event: Event) {
    this.confirmationService.alertConfirm(event, this.alertService);
  }
}
