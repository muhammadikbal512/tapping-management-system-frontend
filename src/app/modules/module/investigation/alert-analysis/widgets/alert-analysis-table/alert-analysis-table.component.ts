import { Component, OnInit } from '@angular/core';
import { AlertInvestigationTableService } from 'src/app/modules/services/module-services/alert-investigation-table.service';
import { AlertInvestigationService } from 'src/app/modules/services/module-services/alert-investigation.service';
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
  @Select(AlertInvestigationState.alertInvestigation)
  alertInvestigation$!: Observable<AlertInvestigationModel[]>;
  paginationSize: number = 5;
  alerts!: AlertInvestigationModel[];
  alert!: AlertInvestigationModel;
  loading!: boolean;
  cols!: any[];
  cols1!: any[];
  networks!: any[];
  constructor(
    private alertService: AlertInvestigationService,
    private notifierService: NotificationService
  ) {}
  ngOnInit(): void {
    this.getAlertTable();
    this.cols = [
      { field: 'lockedByUser', header: 'Locked By User' },
      { field: 'caseId', header: 'Case ID' },
      { field: 'caseCreationDate', header: 'Case Creation Date' },
      { field: 'classificationType', header: 'Classification Type' },
      { field: 'classificationStatus', header: 'Classification Status' },
      { field: 'privateScheme', header: 'Private Scheme' },
    ];
    this.cols1 = [
      { field: 'networkId', header: 'Network ID' },
      { field: 'srcAddress', header: 'Src Address' },
      { field: 'dstAddress', header: 'Dst Address' },
      { field: 'flag', header: 'Flag' },
      { field: 'responseCode', header: 'Response Code' },
      { field: 'sequenceNumber', header: 'Sequence Number' },
    ];
  }

  getAlertTable() {
    this.alertService.onGetAllAlertInvestigation();
    this.alertInvestigation$.subscribe(
      (response) => {
        this.alerts = response;
        this.loading = false;
      },
      (err) => {
        this.notifierService.errorNotification(err!.message, err!.status);
        this.loading = false;
      }
    );
  }

  refreshTable() {
    this.loading = true;
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
}
