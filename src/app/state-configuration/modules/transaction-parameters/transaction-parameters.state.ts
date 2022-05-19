import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Action, Select, Selector, State, StateContext } from '@ngxs/store';
import { TransactionParametersModel } from 'src/app/model/modules-model/transaction-parameters';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import {
  TransactionParametersAdd,
  TransactionParametersGet,
  TransactionParametersUpdate,
  TransactionParametersDelete,
  TransactionParametersSuccessState,
  TransactionParametersErrorState,
} from './transaction-parameters.action';
import { TransactionParametersService } from 'src/app/modules/services/module-services/transaction-parameters.service';
import { TransactionParametersTableService } from 'src/app/modules/services/module-services/transaction-parameters-table.service';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class TransactionParametersStateModel {
  transactionParameters: TransactionParametersModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<TransactionParametersStateModel>({
  name: 'transactionParameters',
  defaults: {
    transactionParameters: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class TransactionParametersState {
  constructor(
    private notifierService: NotificationService,
    private transactionService: TransactionParametersService,
    private transactionTableService: TransactionParametersTableService
  ) {}

  @Selector()
  static transactionParameters(state: TransactionParametersStateModel) {
    return state.transactionParameters;
  }

  @Selector()
  static responseMessage(state: TransactionParametersStateModel) {
    return state.responseMessage;
  }

  @Action(TransactionParametersGet, { cancelUncompleted: true })
  getDataFromState(ctx: StateContext<TransactionParametersStateModel>) {
    return this.transactionService.getAllParametersList().pipe(
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
          transactionParameters: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(
          new TransactionParametersErrorState(response.error)
        );
      })
    );
  }

  @Action(TransactionParametersAdd, { cancelUncompleted: true })
  addDataFromState(
    ctx: StateContext<TransactionParametersStateModel>,
    { payload }: TransactionParametersAdd
  ) {
    return this.transactionService.addTransanctionParameter(payload).pipe(
      tap((response) => {
        ctx.dispatch(new TransactionParametersSuccessState(response));
        ctx.patchState({
          ...ctx.getState(),
          transactionParameters: [...ctx.getState().transactionParameters],
          responseMessage: response,
        });
      }), catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new TransactionParametersErrorState(response.error))
      })
    );
  }

  @Action(TransactionParametersDelete, { cancelUncompleted: true })
  deleteDataFromState(
    ctx: StateContext<TransactionParametersStateModel>,
    { id }: TransactionParametersDelete
  ) {
    return this.transactionService.deleteTransactionParameters(id).pipe(
      tap((response) => {
        ctx.dispatch(new TransactionParametersSuccessState(response));
        ctx.setState({
          ...ctx.getState(),
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(
          new TransactionParametersErrorState(response.error)
        );
      })
    );
  }

  @Action(TransactionParametersSuccessState)
  ifStateSuccess(
    ctx: StateContext<TransactionParametersStateModel>,
    { successMessage }: TransactionParametersSuccessState
  ) {
    if (this.transactionService.getCurrentStatusDialog().length != 0) {
      this.transactionService.closeDialog();
    }
    this.notifierService.successNotification(
      successMessage?.message,
      successMessage?.httpStatusCode
    );
    this.transactionService.onGetAllTransactionParameters();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(TransactionParametersErrorState)
  ifStateIsError(
    ctx: StateContext<TransactionParametersStateModel>,
    { errorMessage }: TransactionParametersErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage?.message,
      errorMessage?.httpStatusCode
    );
    if (this.transactionTableService.gridApi.getRenderedNodes().length == 0) {
      this.transactionTableService.showNoRowData();
    } else {
      this.transactionTableService.hideTableLoading();
    }
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
