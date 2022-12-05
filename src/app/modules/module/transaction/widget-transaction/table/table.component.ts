import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/modules/services/module-services/transaction.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { EventCollectorInterface } from 'src/app/interface/modules/event-collector';
import * as FileSaver from 'file-saver';
import { EventCollectorModel } from 'src/app/model/modules-model/event-collector.model';
import { Select } from '@ngxs/store';
import { TransactionState } from 'src/app/state-configuration/modules/transaction/transaction.state';
import { Observable } from 'rxjs';
import { TransactionTableService } from 'src/app/modules/services/module-services/transaction-table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Select(TransactionState.EventCollectors)
  eventCollectors$!: Observable<EventCollectorModel[]>;
  constructor(
    private transactionApiService: TransactionService,
    private transactionTableService: TransactionTableService,
  ) {}

  ngOnInit(): void {
    this.getEventCollector();
    
    
  }

  getEventCollector() {
    this.transactionApiService.onGetAllEventCollector();
  }

  refreshTable() {
    this.getEventCollector();
  }

  onRowSelect(event: any) {
    this.transactionApiService.additionalData = event.data;
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.eventCollectors);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'transaction');
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

  get eventCollectors() {
    return this.transactionTableService.eventCollectors;
  }
  
  get loading() {
    return this.transactionTableService.loading
  }

  get cols() {
    return this.transactionTableService.cols;
  }
}

export let additionalData: EventCollectorInterface;
