import { Component, OnInit } from '@angular/core';
import { TransactionParametersService } from 'src/app/modules/services/module-services/transaction-parameters.service';
import { TransactionParametersModel } from 'src/app/model/modules-model/transaction-parameters';
import { Select } from '@ngxs/store';
import { TransactionParametersState } from 'src/app/state-configuration/modules/transaction-parameters/transaction-parameters.state';
import { Observable } from 'rxjs';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';

@Component({
  selector: 'app-transaction-param-table',
  templateUrl: './transaction-param-table.component.html',
  styleUrls: ['./transaction-param-table.component.css'],
})
export class TransactionParamTableComponent implements OnInit {
  @Select(TransactionParametersState.transactionParameters)
  transactionParams$!: Observable<TransactionParametersModel[]>;
  cols!: any[];
  transactionParams!: TransactionParametersModel[];
  loading: boolean = true;
  constructor(
    private transactionParametersService: TransactionParametersService,
    private notifierService: NotificationService
  ) {}

  ngOnInit(): void {
    this.getTransactionParam();
    this.cols = [
      { field: 'attributeName', header: 'Attribute Name' },
      { field: 'description', header: 'Description' },
    ];
  }
  
  getTransactionParam() {
    this.transactionParametersService.onGetAllTransactionParameters();
    this.transactionParams$.subscribe(
      (response) => {
        this.transactionParams = response;
        this.loading = false;
      },
      (err) => {
        this.notifierService.errorNotification(err?.message, err?.status);
        this.loading = false;
      }
    );
  }

  showDialog() {
    this.transactionParametersService.openDialog();
    this.transactionParametersService.buttonStatus = 'create';
  }

  onRowSelect(event: any) {
    this.transactionParametersService.ExistingData = event.data
    console.log(event.data)
  }
}
