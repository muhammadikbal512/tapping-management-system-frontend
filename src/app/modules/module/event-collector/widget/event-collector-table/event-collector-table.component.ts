import { Component, OnInit } from '@angular/core';
import { EventCollectorService } from 'src/app/modules/services/module-services/event-collector.service';
import { EventCollectorTableService } from 'src/app/modules/services/module-services/event-collector-table.service';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-event-collector-table',
  templateUrl: './event-collector-table.component.html',
  styleUrls: ['./event-collector-table.component.css'],
})
export class EventCollectorTableComponent implements OnInit {
  constructor(
    private eventService: EventCollectorService,
    private eventTableService: EventCollectorTableService
  ) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.eventTableService.GridApi = params;
    this.eventTableService.GridColumnApi = params;
    this.runService();
  }

  onCellClicked(data: RowClickedEvent) {
    this.eventService.ExistingData = data;
  }

  runService() {
    this.eventTableService.showTableLoading();
    this.eventService.getEventCollectorWithDelay();
  }

  get animateRow() {
    return this.eventTableService.animateRow;
  }

  get headerHeight() {
    return this.eventTableService.headerHeight;
  }

  get columnDefs() {
    return this.eventTableService.columnDefs;
  }

  get defaultColDef() {
    return this.eventTableService.defaultColDef;
  }

  get rowHeight() {
    return this.eventTableService.rowHeight;
  }

  get overlayLoadingTemplate() {
    return this.eventTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.eventTableService.frameworkComponents;
  }
}
