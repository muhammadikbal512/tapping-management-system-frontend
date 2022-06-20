import { Component, OnInit } from '@angular/core';
import { AlertAnalysisService } from 'src/app/modules/services/module-services/alert-analysis.service';
import { GridApi, ColDef, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-alert-analysis',
  templateUrl: './alert-analysis.component.html',
  styleUrls: ['./alert-analysis.component.css']
})
export class AlertAnalysisComponent implements OnInit {

  constructor(private alertService: AlertAnalysisService) { }
  public gridApi!: GridApi;

  public totalCase: ColDef[] = [
    {field: 'privateScheme'},
    {field: 'entityValue'},
    {field: 'inQueue'}
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    editable: false,
    lockPosition: true
  }

  public casesQueue: ColDef[] = [
    {field: 'privateScheme'},
    {field: 'ruleId'},
    {field: 'ruleName'},
    {field: 'entityType'},
    {field: 'inQueue'}
  ];

  public rowData: any[] | undefined

  public rowSelection = 'single';

  ngOnInit(): void {
  }

  showDialog() {
    this.alertService.openDialog();
  }
  

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

}
