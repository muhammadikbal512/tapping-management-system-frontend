import { Injectable } from '@angular/core';
import { AlertInvestigationDispatch } from 'src/app/state-configuration/modules/investigation/alert-investigation/alert-investigation.dispatch';
import { AlertInvestigationModel } from 'src/app/model/modules-model/alert-investigation.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AlertInvestigationTableService } from './alert-investigation-table.service';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TakeActionCaseComponent } from '../../../module/investigation/alert-analysis/widgets/take-action-case/take-action-case.component';
import { ForwardActionCaseComponent } from '../../../module/investigation/alert-analysis/widgets/forward-action-case/forward-action-case.component';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
  providedIn: 'root',
})
export class AlertInvestigationService {
  existingData: AlertInvestigationModel = new AlertInvestigationModel();
  alerts!: AlertInvestigationModel[];
  buttonStatus: string = '';
  apiUrl: string = environment.core236;
  dialogConfig: MatDialogConfig = {
    width: '55%',
  };
  constructor(
    private alertDispatch: AlertInvestigationDispatch,
    private http: HttpClient,
    private alertTableService: AlertInvestigationTableService,
    private dialog: MatDialog
  ) {}

  getAllAlertInvestigation() {
    return this.http.get<AlertInvestigationModel[]>(`${this.apiUrl}/case/list`);
  }

  lockCase(data: AlertInvestigationModel) {
    const params = new HttpParams()
      .set('caseId', data.id)
      .set('username', data.initiator.username);

    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/case/lockCase`,
      data,
      { params }
    );
  }

  forwardCase(data: AlertInvestigationModel) {
    const params = new HttpParams()
      .set('caseId', data.id)
      .set('username', data.initiator.username)
      .set('comment', data.comment);

    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/case/forwardCase`,
      data,
      { params }
    );
  }

  rejectCase(data: AlertInvestigationModel) {
    const params = new HttpParams()
      .set('caseId', data.id)
      .set('comment', data.comment);

    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/case/rejectCase`,
      data,
      { params }
    );
  }

  avaliableCaseForUser(username: string) {
    return this.http.get<AlertInvestigationModel>(
      `${this.apiUrl}/case/` + username
    );
  }

  confirmCase(data: AlertInvestigationModel) {
    const params = new HttpParams()
      .set('caseId', data.id)
      .set('classificationType', data.classificationType)
      .set('comment', data.comment);
    return this.http.get<AlertInvestigationModel>(
      `${this.apiUrl}/confirmCase`,
      { params }
    );
  }

  classifyCase(id: number) {
    return this.http.post<CustomHttpResponseModel>(
      `${this.apiUrl}/classifyCase/`,
      { id }
    );
  }

  rejectCaseByInitiator(data: AlertInvestigationModel) {
    const params = new HttpParams()
      .set('caseId', data.id)
      .set('comment', data.comment);
    return this.http.post<AlertInvestigationModel>(
      `${this.apiUrl}/rejectCaseByInitiator`,
      data,
      { params }
    );
  }

  postponeCase(data: AlertInvestigationModel) {
    const params = new HttpParams()
      .set('caseId', data.id)
      .set('comment', data.comment);
    return this.http.post<AlertInvestigationModel>(
      `${this.apiUrl}/postponeCase`,
      data,
      { params }
    );
  }

  classifiedCases() {
    return this.http.get<AlertInvestigationModel>(
      `${this.apiUrl}/classified/list`
    );
  }

  onGetAllAlertInvestigation() {
    this.alertDispatch._AlertInvestigationGetDispatch();
  }

  openTakeActionDialog() {
    this.dialog.open(TakeActionCaseComponent, this.dialogConfig);
  }

  forwardActionDialog() {
    this.dialog.open(ForwardActionCaseComponent, this.dialogConfig);
  }

  getCurrentDialog() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  set ExistingData(data: AlertInvestigationModel) {
    this.existingData = data;
  }
}
