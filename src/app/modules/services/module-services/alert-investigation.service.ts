import { Injectable } from '@angular/core';
import { AlertInvestigationDispatch } from 'src/app/state-configuration/modules/investigation/alert-investigation/alert-investigation.dispatch';
import { AlertInvestigationModel } from 'src/app/model/modules-model/alert-investigation.model';
import { HttpClient } from '@angular/common/http';
import { AlertInvestigationTableService } from './alert-investigation-table.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AlertInvestigationService {
  existingData: AlertInvestigationModel = new AlertInvestigationModel();
  apiUrl: string = environment.core236
  constructor(
    private alertDispatch: AlertInvestigationDispatch,
    private http: HttpClient,
    private alertTableService: AlertInvestigationTableService
  ) {}

  getAllAlertInvestigation() {
    return this.http.get<AlertInvestigationModel[]>(
      `${this.apiUrl}/alertInvestigation`
    );
  }

  onDeleteAlert() {
    this.alertDispatch._AlertInvestigationDeleteDispatch(
      this.existingData.alertId
    );
  }

  onGetAllAlertInvestigation() {
   this.alertTableService.showTableLoading();
   this.alertDispatch._AlertInvestigationGetDispatch();
  }
}
