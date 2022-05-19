import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { TransactionParametersService } from 'src/app/modules/services/module-services/transaction-parameters.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-transaction-param-action-button',
  templateUrl: './transaction-param-action-button.component.html',
  styleUrls: ['./transaction-param-action-button.component.css'],
})
export class TransactionParamActionButtonComponent
  implements AgRendererComponent
{
  cellValue: string = '';
  constructor(
    private transactionParametersService: TransactionParametersService,
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

  editButton() {
    this.transactionParametersService.openDialog();
    this.transactionParametersService.buttonStatus = 'edit';
  }

  deleteButton(event: Event) {
    this.confirmationService.transactionParametersConfirm(event, this.transactionParametersService)
  }
}
