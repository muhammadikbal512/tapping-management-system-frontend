import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { TransactionMessageModel } from 'src/app/model/modules-model/transaction-message-model';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { TransactionService } from 'src/app/modules/services/module-services/transaction.service';
import { TransactionTableService } from 'src/app/modules/services/module-services/transaction-table.service';
import {
  TransactionGet,
  TransactionSuccessState,
  TransactionErrorState,
} from './transaction.action';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

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
          Transactions: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new TransactionErrorState(response.error))
      })
    );
  }

  @Action(TransactionSuccessState) ifStateSuccess(
    ctx: StateContext<TransactionStateModel>,
    { successMessage }: TransactionSuccessState
  ) {
    this.notifierService.successNotification(
      successMessage?.message,
      successMessage?.httpStatusCode
    );
    this.transactionService.onGetAllTransactionList();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(TransactionErrorState) ifStateError(
    ctx: StateContext<TransactionStateModel>,
    { errorMessage }: TransactionErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage?.message,
      errorMessage?.status
    );
    if (this.transactionTableService.gridApi.getRenderedNodes().length == 0) {
      this.transactionTableService.showNoRowData();
    } else {
      this.transactionTableService.hideTableLoading();
    }
    ctx.patchState({
      responseMessage: errorMessage
    })
  }
}
