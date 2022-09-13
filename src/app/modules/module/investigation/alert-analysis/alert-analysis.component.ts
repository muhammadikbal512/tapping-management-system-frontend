import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GridApi, ColDef, GridReadyEvent } from 'ag-grid-community';
import { AlertInvestigationTableService } from 'src/app/modules/services/module-services/alert-investigation-table.service';

@Component({
  selector: 'app-alert-analysis',
  templateUrl: './alert-analysis.component.html',
  styleUrls: ['./alert-analysis.component.css'],
})
export class AlertAnalysisComponent implements OnInit, AfterViewInit {
  constructor(private alertTableService: AlertInvestigationTableService) {}
  
  ngAfterViewInit(): void {
    this.stylingAgFooter();
  }
  public gridApi!: GridApi;

  public alertTable: ColDef[] = [
    { field: 'entityValue' },
    { field: 'forwarderToUser', width: 500 },
    { field: 'daysUntilAutoClassification' },
    { field: 'entityType' },
    { field: 'entityValue' },
  ];

  public totalCase: ColDef[] = [
    { field: 'privateScheme' },
    { field: 'entityValue' },
    { field: 'inQueue' },
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    editable: false,
    lockPosition: true,
  };

  public casesQueue: ColDef[] = [
    { field: 'privateScheme' },
    { field: 'ruleId' },
    { field: 'ruleName' },
    { field: 'entityType' },
    { field: 'inQueue' },
  ];

  public rowData: any[] | undefined;

  public rowSelection = 'single';

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

  searchFilter() {
    this.alertTableService.onFilter('search-filter');
  }

  onPageSizeChanged() {
    const value = (<HTMLInputElement>document.getElementById('page-size'))
      .value;
    this.alertTableService.gridApi?.paginationSetPageSize(Number(value));
  }

  stylingAgFooter() {
    const ag = document.querySelector('.ag-paging-panel') as HTMLElement;
    ag.style.flexDirection = 'row-reverse';
    ag.style.alignItems = 'center';
    ag.style.justifyContent = 'center';
    ag?.appendChild(document.querySelector('.page-size-container') as Node);
  }
}
