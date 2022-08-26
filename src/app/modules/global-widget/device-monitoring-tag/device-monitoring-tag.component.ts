import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import {
  ICellRendererParams,
  IAfterGuiAttachedParams,
  ICellRenderer,
} from 'ag-grid-community';

@Component({
  selector: 'app-device-monitoring-tag',
  templateUrl: './device-monitoring-tag.component.html',
  styleUrls: ['./device-monitoring-tag.component.css'],
})
export class DeviceMonitoringTagComponent implements AgRendererComponent {
  cellValue: string = '';
  constructor() {}
  refresh(params: ICellRendererParams): boolean {
    return false;
  }
  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params).toString();
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }
}
