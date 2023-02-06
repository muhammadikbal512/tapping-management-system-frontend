import { Component, OnInit } from '@angular/core';
import { GridApi, ColDef, GridReadyEvent } from 'ag-grid-community';
import { AlertInvestigationTableService } from 'src/app/modules/services/module-services/investigation/alert-investigation-table.service';

@Component({
  selector: 'app-alert-analysis',
  templateUrl: './alert-analysis.component.html',
  styleUrls: ['./alert-analysis.component.css'],
})
export class AlertAnalysisComponent implements OnInit {
  constructor(private alertTableService: AlertInvestigationTableService) {}

  public casesQueue: ColDef[] = [
    { field: 'privateScheme' },
    { field: 'ruleId' },
    { field: 'ruleName' },
    { field: 'entityType' },
    { field: 'inQueue' },
    { field: 'actions' },
  ];

  ngOnInit(): void {}
}
