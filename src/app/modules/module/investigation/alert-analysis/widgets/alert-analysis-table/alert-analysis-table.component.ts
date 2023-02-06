import { Component, OnInit } from '@angular/core';
import { AlertInvestigationTableService } from 'src/app/modules/services/module-services/investigation/alert-investigation-table.service';
import { AlertInvestigationService } from 'src/app/modules/services/module-services/investigation/alert-investigation.service';
import * as FileSaver from 'file-saver';
import { AlertInvestigationModel } from 'src/app/model/modules-model/alert-investigation.model';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AlertInvestigationState } from 'src/app/state-configuration/modules/investigation/alert-investigation/alert-investigation.state';

@Component({
  selector: 'app-alert-analysis-table',
  templateUrl: './alert-analysis-table.component.html',
  styleUrls: ['./alert-analysis-table.component.css'],
})
export class AlertAnalysisTableComponent implements OnInit {
  constructor(
    private alertService: AlertInvestigationService,
    private alertTableService: AlertInvestigationTableService
  ) {}
  ngOnInit(): void {
    this.getAlertTable();
  }

  getAlertTable() {
    this.alertService.onGetAllAlertInvestigation();
  }

  refreshTable() {
    this.getAlertTable();
  }

  onRowSelect(event: any) {
    this.alertService.ExistingData = event.data
    console.log(event.data);
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.alerts);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'alert');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  get cols() {
    return this.alertTableService.cols;
  }

  get cols1() {
    return this.alertTableService.cols1;
  }

  get alerts() {
    return this.alertTableService.alerts;
  }

  get loading() {
    return this.alertTableService.loading;
  }
}
