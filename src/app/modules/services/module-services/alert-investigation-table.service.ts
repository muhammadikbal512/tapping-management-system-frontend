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
    { field: 'caseName', header: 'Case Name' },
    { field: 'createdAt', header: 'Created At' },
    { field: 'classificationType', header: 'Classification Type' },
    { field: 'classificationStatus', header: 'Classification Status' },
    { field: 'investigationHistories', header: 'Investigation Histories' },
    { field: 'comments', header: 'Comments' },
    { field: 'updatedBy', header: 'Updated By' },
    { field: 'lockedByUser', header: 'Locked By User' },
    { field: 'initiator', header: 'initiator' },
    { field: 'group', header: 'Group' },
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
