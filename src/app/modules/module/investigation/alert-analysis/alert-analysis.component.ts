import { Component, OnInit } from '@angular/core';
import { AlertInvestigationService } from 'src/app/modules/services/module-services/alert-investigation.service';
import { GridApi, ColDef, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-alert-analysis',
  templateUrl: './alert-analysis.component.html',
  styleUrls: ['./alert-analysis.component.css']
})
export class AlertAnalysisComponent implements OnInit {

  constructor(private alertService: AlertInvestigationService) { }
  public gridApi!: GridApi;

  public alertTable: ColDef[] = [
    {field: 'entityValue'},
    {field: 'forwarderToUser', width: 500},
    {field: 'daysUntilAutoClassification'},
    {field: 'entityType'},
    {field: 'entityValue'}
  ]

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

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }

}
