import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-user-tag-lock',
  templateUrl: './user-tag-lock.component.html',
  styleUrls: ['./user-tag-lock.component.css']
})
export class UserTagLockComponent implements AgRendererComponent {
  cellValue: string = '';
  constructor() { }

  
  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params).toString();
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }

}
