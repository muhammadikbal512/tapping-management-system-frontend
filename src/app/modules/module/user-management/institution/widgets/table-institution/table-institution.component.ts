import { Component, OnInit } from '@angular/core';
import { RowClassRules, GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { InstitutionTableService } from 'src/app/modules/services/module-services/institution-table.service';
import { InstitutionService } from 'src/app/modules/services/module-services/institution.service';

@Component({
  selector: 'app-table-institution',
  templateUrl: './table-institution.component.html',
  styleUrls: ['./table-institution.component.css']
})
export class TableInstitutionComponent implements OnInit {
  constructor(
    private instutitionTableService: InstitutionTableService,
    private institutionService: InstitutionService
  ) {}

  public rowClassRules: RowClassRules = {
    'ag-bg-rowIndex': (params) => {
      return params.rowIndex % 2 == 0;
    }
  }

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.instutitionTableService.gridApi = params.api;
    this.instutitionTableService.gridColumnApi = params.columnApi;
    this.runService();
  }

  runService() {
    this.instutitionTableService.showTableLoading();
    this.institutionService.getAllInstitutionWithDelay();
  }

  onCellClicked(data: RowClickedEvent) {
  }


  get animateRow() {
    return this.instutitionTableService.animateRow;
  }

  get columnDefs() {
    return this.instutitionTableService.columnDef;
  }

  get defaultColDef() {
    return this.instutitionTableService.defaultColDef
  }

  get rowHeight() {
    return this.instutitionTableService.rowHeight;
  }

  get headerHeight() {
    return this.instutitionTableService.headerHeight;
  }

  get overlayLoadingTemplate() {
    return this.instutitionTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.instutitionTableService.frameworkComponents;
  }
}
