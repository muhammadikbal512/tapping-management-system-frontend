import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResponseMappingTableService } from 'src/app/modules/services/module-services/response-mapping-table.service';
import { ResponseMappingService } from 'src/app/modules/services/module-services/response-mapping.service';

@Component({
  selector: 'app-iso8583-response-mapping',
  templateUrl: './iso8583-response-mapping.component.html',
  styleUrls: ['./iso8583-response-mapping.component.css'],
})
export class Iso8583ResponseMappingComponent implements OnInit {
  constructor(
    private responseService: ResponseMappingService,
    private responseTableService: ResponseMappingTableService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  onFilterTextBoxChange() {
    this.responseTableService.onFilter('search-filter');
  }

  refreshTable() {
    this.responseService.getResponseMappingWithDelay();
  }

  openDialog() {
    this.responseService.buttonStatus = 'create';
    this.responseService.openDialog();
  }
}
