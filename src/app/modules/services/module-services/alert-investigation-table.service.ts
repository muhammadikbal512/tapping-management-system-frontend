import { Injectable } from '@angular/core';
import { AlertInvestigationModel } from 'src/app/model/modules-model/alert-investigation.model';

@Injectable({
  providedIn: 'root',
})
export class AlertInvestigationTableService {
  alerts!: AlertInvestigationModel[];
  additionalData: AlertInvestigationModel | undefined;
  loading: boolean = true;

  constructor() {}

  cols = [
    { field: 'lockedByUser', header: 'Locked By User' },
    { field: 'caseId', header: 'Case ID' },
    { field: 'caseCreationDate', header: 'Case Creation Date' },
    { field: 'classificationType', header: 'Classification Type' },
    { field: 'classificationStatus', header: 'Classification Status' },
    { field: 'privateScheme', header: 'Private Scheme' },
    { field: 'name', header: 'Name' },
    { field: 'details', header: 'Header' },
  ];
  cols1 = [
    { field: 'networkId', header: 'Network ID' },
    { field: 'srcAddress', header: 'Src Address' },
    { field: 'dstAddress', header: 'Dst Address' },
    { field: 'flag', header: 'Flag' },
    { field: 'responseCode', header: 'Response Code' },
    { field: 'sequenceNumber', header: 'Sequence Number' },
  ];

  setRowData(data: AlertInvestigationModel[]) {
    this.alerts = data;
  }
}
