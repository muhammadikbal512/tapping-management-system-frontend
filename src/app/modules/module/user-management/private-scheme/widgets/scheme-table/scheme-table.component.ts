import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { SchemeServiceService } from 'src/app/modules/services/module-services/user-management/scheme-service.service';
import { SchemeTableService } from 'src/app/modules/services/module-services/user-management/scheme-table.service';

@Component({
  selector: 'app-scheme-table',
  templateUrl: './scheme-table.component.html',
  styleUrls: ['./scheme-table.component.css'],
})
export class SchemeTableComponent implements OnInit {
  constructor(
    private schemeTable: SchemeTableService,
    private schemeService: SchemeServiceService
  ) {}

  ngOnInit(): void {
    this.getAllPrivateScheme();
  }

  getAllPrivateScheme() {
    this.schemeService.onGetAllScheme();
  }

  showDialog() {
    this.schemeService.openDialog();
    this.schemeService.buttonStatus = 'create';
  }

  onRowSelect(data: any) {
    this.schemeService.existingData = data.data
  }

  refreshTable() {
    this.schemeTable.loading = true;
    this.schemeService.onGetAllScheme();
  }

  get privateSchemes() {
    return this.schemeTable.privateSchemes;
  }

  get cols() {
    return this.schemeTable.cols;
  }

  get loading() {
    return this.schemeTable.loading;
  }


}
