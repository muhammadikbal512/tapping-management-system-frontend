import { Injectable } from '@angular/core';
import { AlertInvestigationDispatch } from 'src/app/state-configuration/modules/investigation/alert-investigation/alert-investigation.dispatch';
import { AlertInvestigationModel } from 'src/app/model/modules-model/alert-investigation.model';
import { HttpClient } from '@angular/common/http';
import { AlertInvestigationTableService } from './alert-investigation-table.service';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TakeActionCaseComponent } from '../../module/investigation/alert-analysis/widgets/take-action-case/take-action-case.component';
import { ForwardActionCaseComponent } from '../../module/investigation/alert-analysis/widgets/forward-action-case/forward-action-case.component';

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
    // return this.http.get<AlertInvestigationModel[]>(
    //   `${this.apiUrl}/alertInvestigation`
    // );
    return this.http.get<AlertInvestigationModel[]>(
      `assets/data/dummy/investigation/investigation.json`
    );
  }

  onGetAllAlertInvestigation() {
    this.alertDispatch._AlertInvestigationGetDispatch();
  }

  OnGetAllRoles() {
    this.alertDispatch._AlertInvestigationGetRolesDispatch();
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
