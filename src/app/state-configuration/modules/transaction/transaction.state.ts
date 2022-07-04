import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { TransactionMessageModel } from 'src/app/model/modules-model/transaction-message-model';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { TransactionService } from 'src/app/modules/services/module-services/transaction.service';
import { TransactionTableService } from 'src/app/modules/services/module-services/transaction-table.service';
import { TransactionGet, TransactionSuccessState } from './transaction.action';
import { tap } from 'rxjs';

export class TransactionStateModel {
  Transactions: TransactionMessageModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<TransactionStateModel>({
  name: 'Transaction',
  defaults: {
    Transactions: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class TransactionState {
  constructor(
    private notifierService: NotificationService,
    private transactionService: TransactionService,
    private transactionTableService: TransactionTableService
  ) {}

  @Selector()
  static Transactions(state: TransactionStateModel) {
    return state.Transactions;
  }

  @Selector()
  static responseMessage(state: TransactionStateModel) {
    return state.responseMessage;
  }

  @Action(TransactionGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<TransactionStateModel>
  ) {
    return this.transactionService.getAllTransactionList().pipe(
      tap((response) => {
        if (response?.length != 0) {
          this.transactionTableService.hideTableLoading();
          this.transactionTableService.setRowData(response);
        } else {
          this.transactionTableService.setRowData(response);
          this.transactionTableService.showNoRowData();
        }
        ctx.setState({
            ...ctx.getState(),
            Transactions: response
        })
      })
    );
  }

  @Action(TransactionSuccessState)ifStateSuccess(ctx: StateContext<TransactionStateModel>, {successMessage}: TransactionSuccessState) {
    this.notifierService.successNotification(
        successMessage?.message,
        successMessage?.httpStatusCode
    );
    this.transactionService.onGetAllTransactionList();
    ctx.patchState({
        responseMessage: successMessage
    })
  }

  
}
