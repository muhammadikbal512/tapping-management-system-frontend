import { Injectable } from '@angular/core';
import { AlertInvestigationDispatch } from 'src/app/state-configuration/modules/investigation/alert-investigation/alert-investigation.dispatch';
import { AlertInvestigationModel } from 'src/app/model/modules-model/alert-investigation.model';
import { HttpClient } from '@angular/common/http';
import { AlertInvestigationTableService } from './alert-investigation-table.service';

@Injectable({
  providedIn: 'root',
})
export class AlertInvestigationService {
  existingData: AlertInvestigationModel = new AlertInvestigationModel();
  constructor(
    private alertDispatch: AlertInvestigationDispatch,
    private http: HttpClient,
    private alertTableService: AlertInvestigationTableService
  ) {}

  getAllIso8583Format() {
    return this.http.get<AlertInvestigationModel[]>(
      'test'
    );
  }

  onDeleteAlert() {
    this.alertDispatch._AlertInvestigationDeleteDispatch(
      this.existingData.alertId
    );
  }
}
