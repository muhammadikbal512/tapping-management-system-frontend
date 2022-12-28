import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { ResponseMappingTableService } from 'src/app/modules/services/module-services/response-mapping-table.service';
import { ResponseMappingService } from 'src/app/modules/services/module-services/response-mapping.service';

@Component({
  selector: 'app-iso8583-response-mapping-table',
  templateUrl: './iso8583-response-mapping-table.component.html',
  styleUrls: ['./iso8583-response-mapping-table.component.css'],
})
export class Iso8583ResponseMappingTableComponent implements OnInit {
  constructor(
    private responseTableService: ResponseMappingTableService,
    private responseService: ResponseMappingService
  ) {}

  ngOnInit(): void {
    this.getAllResponseMappings();
  }

  getAllResponseMappings() {
    this.responseService.onGetAllResponseMapping();
  }

  refreshTable() {
    this.responseTableService.loading = true;
    this.getAllResponseMappings();
  }

  onRowSelect(data: any) {
    this.responseService.ExistingData = data.data;
  }

  showDialog() {
    this.responseService.openDialog();
    this.responseService.buttonStatus = 'create'
  }

  get cols() {
    return this.responseTableService.cols;
  }

  get responseMappings() {
    return this.responseTableService.responseMappings;
  }

  get loading() {
    return this.responseTableService.loading;
  }
}
