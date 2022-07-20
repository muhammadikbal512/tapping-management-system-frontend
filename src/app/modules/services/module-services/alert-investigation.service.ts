import { Injectable } from '@angular/core';
import { AlertInvestigationDispatch } from 'src/app/state-configuration/modules/investigation/alert-investigation/alert-investigation.dispatch';
import { AlertInvestigationModel } from 'src/app/model/modules-model/alert-investigation.model';

@Injectable({
  providedIn: 'root',
})
export class AlertInvestigationService {
  existingData: AlertInvestigationModel = new AlertInvestigationModel();
  constructor(private alertDispatch: AlertInvestigationDispatch) {}

  onDeleteAlert() {
    this.alertDispatch._AlertInvestigationDeleteDispatch(this.existingData.id);
  }
}
