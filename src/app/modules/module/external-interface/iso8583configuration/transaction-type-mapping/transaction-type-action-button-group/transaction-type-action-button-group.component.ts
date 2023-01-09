import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { TransactionTypeService } from 'src/app/modules/services/module-services/external-interfaces/transaction-type.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-transaction-type-action-button-group',
  templateUrl: './transaction-type-action-button-group.component.html',
  styleUrls: ['./transaction-type-action-button-group.component.css'],
})
export class TransactionTypeActionButtonGroupComponent
  implements AgRendererComponent
{
  constructor(
    private transtypeMapping: TransactionTypeService,
    private confirmationService: PopupMessageService
  ) {}

  agInit(params: ICellRendererParams): void {}

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  editButton() {
    this.transtypeMapping.openDialog();
    this.transtypeMapping.buttonStatus = 'edit';
  }

  deleteButton(event: Event) {
    this.confirmationService.transType(event, this.transtypeMapping);
  }
}
