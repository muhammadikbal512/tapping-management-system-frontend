import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateDialogAlertAnalysisComponent } from '../../module/investigation/alert-analysis/widgets/create-dialog-alert-analysis/create-dialog-alert-analysis.component';

@Injectable({
  providedIn: 'root'
})
export class AlertAnalysisService {
  dialogConfig: MatDialogConfig = {
    width: '55%',
    autoFocus: true
  }
  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(CreateDialogAlertAnalysisComponent, this.dialogConfig)
  }

  
}
