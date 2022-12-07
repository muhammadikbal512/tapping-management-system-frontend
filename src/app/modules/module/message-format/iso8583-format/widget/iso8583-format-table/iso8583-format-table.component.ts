import { Component, OnInit } from '@angular/core';
import { MessageFormatService } from 'src/app/modules/services/module-services/message-format.service';
import { MessageFormatTableService } from 'src/app/modules/services/module-services/message-format-table.service';
import {
  GridReadyEvent,
  RowClassRules,
  RowClickedEvent,
} from 'ag-grid-community';

@Component({
  selector: 'app-iso8583-format-table',
  templateUrl: './iso8583-format-table.component.html',
  styleUrls: ['./iso8583-format-table.component.css'],
})
export class Iso8583FormatTableComponent implements OnInit {
  constructor(
    private iso8583FormatService: MessageFormatService,
    private iso8583FormatTableService: MessageFormatTableService
  ) {}

  ngOnInit(): void {
    this.getAllMessageFormats();
  }

  getAllMessageFormats() {
    this.iso8583FormatService.onGetAllIso8583Format();
  }

  refreshTable() {
    this.getAllMessageFormats();
    this.iso8583FormatTableService.loading = true;
  }

  showDialog() {
    this.iso8583FormatService.openDialog();
    this.iso8583FormatService.buttonStatus = 'create';
  }

  onRowSelect(event: any) {
    this.iso8583FormatService.ExistingData = event.data;
    console.log(event.data);
  }

  get messageFormats() {
    return this.iso8583FormatTableService.messageFormats;
  }

  get cols() {
    return this.iso8583FormatTableService.cols;
  }

  get loading() {
    return this.iso8583FormatTableService.loading;
  }
}
