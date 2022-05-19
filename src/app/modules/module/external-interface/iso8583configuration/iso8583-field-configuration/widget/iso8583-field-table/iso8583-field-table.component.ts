import { Component, OnInit, OnDestroy } from '@angular/core';
import { IsoFieldConfigurationService } from 'src/app/modules/services/module-services/iso-field-configuration.service';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { IsoFieldConfigurationTableService } from 'src/app/modules/services/module-services/iso-field-configuration-table.service';


@Component({
  selector: 'app-iso8583-field-table',
  templateUrl: './iso8583-field-table.component.html',
  styleUrls: ['./iso8583-field-table.component.css'],
})
export class Iso8583FieldTableComponent implements OnInit, OnDestroy {
  constructor(
    private isoFieldConfigurationService: IsoFieldConfigurationService,
    private isoFieldConfigurationTableService: IsoFieldConfigurationTableService
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.isoFieldConfigurationTableService.gridApi.destroy();
  }

  onGridReady(params: GridReadyEvent) {
    this.isoFieldConfigurationTableService.gridApi = params.api;
    this.isoFieldConfigurationTableService.gridColumnApi = params.columnApi
    this.runService();
  }

  onCellClicked(data: RowClickedEvent) {
    this.isoFieldConfigurationService.ExistingData = data.data
  }

  runService() {
    this.isoFieldConfigurationTableService.showTableLoading();
    this.isoFieldConfigurationService.getAllIsoFieldConfigurationWithDelay();
  }

  get animateRow() {
    return this.isoFieldConfigurationTableService.animateRow;
  }

  get columnDefs() {
    return this.isoFieldConfigurationTableService.columnDefs;
  }

  get defaultColDef() {
    return this.isoFieldConfigurationTableService.defaultColDef;
  }

  get rowHeight() {
    return this.isoFieldConfigurationTableService.rowHeight;
  }

  get headerHeight() {
    return this.isoFieldConfigurationTableService.headerHeight;
  }

  get overlayLoadingTemplate() {
    return this.isoFieldConfigurationTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.isoFieldConfigurationTableService.frameworkComponents;
  }
}
