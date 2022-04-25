import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellEditorParams, ICellRendererParams } from 'ag-grid-community';
import { Iso8583DialectService } from 'src/app/modules/services/module-services/iso8583-dialect.service';
import { PopupMessageService } from 'src/app/modules/services/popup-message-service/popup-message-service.service';

@Component({
  selector: 'app-action-button-group-iso8583-dialect',
  templateUrl: './action-button-group-iso8583-dialect.component.html',
  styleUrls: ['./action-button-group-iso8583-dialect.component.css']
})
export class ActionButtonGroupIso8583DialectComponent implements AgRendererComponent {

  constructor(
    private iso8583DialectService: Iso8583DialectService,
    private confirmationService: PopupMessageService
  ) { }

  agInit(params: ICellRendererParams): void {
    
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  ngOnInit(): void {
  }

  editButton () {
    this.iso8583DialectService.openDialog();
    this.iso8583DialectService.buttonStatus = 'edit'
  }

  deleteButton(event: Event) {
    this.confirmationService.iso8583DialectConfirm(event, this.iso8583DialectService)
  }

}
