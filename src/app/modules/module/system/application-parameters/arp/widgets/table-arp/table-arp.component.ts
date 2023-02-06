import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { AppParametersTableService } from 'src/app/modules/services/module-services/system/app-parameters-table.service';
import { AppParametersService } from 'src/app/modules/services/module-services/system/app-parameters.service';

@Component({
  selector: 'app-table-arp',
  templateUrl: './table-arp.component.html',
  styleUrls: ['./table-arp.component.css'],
})
export class TableArpComponent implements OnInit {
  constructor(
    private appTableService: AppParametersTableService,
    private appService: AppParametersService
  ) {}

  ngOnInit(): void {
    this.getAllArps();
  }

  getAllArps() {
    this.appService.onGetArpAll();
  }

  refreshTable() {

  }


  showDialog() {
    this.appService.openDialog();
    this.appService.buttonStatus = 'create';
  }

  onRowSelect(event: any) {
    this.appService.existingData = event.data
  }
  get cols() {
    return this.appTableService.cols;
  }

  get loading() {
    return this.appTableService.loading;
  }

  get Arps() {
    return this.appTableService.Arps;
  }
}
