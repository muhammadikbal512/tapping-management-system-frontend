import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { TransactionMessageModel } from 'src/app/model/modules-model/transaction-message-model';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { TransactionService } from 'src/app/modules/services/module-services/transaction/transaction.service';
import { TransactionTableService } from 'src/app/modules/services/module-services/transaction/transaction-table.service';
import {
  TransactionGet,
  TransactionSuccessState,
  TransactionErrorState,
  EventCollectorsGet,
} from './transaction.action';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { EventCollectorModel } from 'src/app/model/modules-model/event-collector.model';

export class TransactionStateModel {
  Transactions: TransactionMessageModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
  EventCollectors: EventCollectorModel[] = [];
}

@State<TransactionStateModel>({
  name: 'Transaction',
  defaults: {
    Transactions: [],
    EventCollectors: [],
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

  @Selector()
  static EventCollectors(state: TransactionStateModel) {
    return state.EventCollectors;
  }

  @Action(EventCollectorsGet, { cancelUncompleted: true })
  getEventCollectorsFromState(ctx: StateContext<TransactionStateModel>) {
    return this.transactionService.getAllTransactionList().pipe(
      tap((response) => {
        if (response?.length != 0) {
          this.transactionTableService.loading = false;

          this.transactionTableService.setTrans(response);
        } else {
          this.transactionTableService.loading = false;

          this.transactionTableService.setTrans(response);
        }
        this.transactionTableService.totalRecords = response.length;
        ctx.setState({
          ...ctx.getState(),
          Transactions: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new TransactionErrorState(response.error));
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
    this.transactionTableService.loading = false;
    this.notifierService.errorNotification(
      errorMessage?.message,
      errorMessage?.status
    );
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
