import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { TransactionTypeModel } from 'src/app/model/modules-model/transaction-type.model';
import { TransactionTypeTableService } from 'src/app/modules/services/module-services/external-interfaces/transaction-type-table.service';
import { TransactionTypeService } from 'src/app/modules/services/module-services/external-interfaces/transaction-type.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import {
  TransTypeMappingAdd,
  TransTypeMappingDelete,
  TransTypeMappingErrorState,
  TransTypeMappingGet,
  TransTypeMappingSuccessState,
  TransTypeMappingUpdate,
} from './trans-type-mapping.action';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class TransTypeMappingStateModel {
  TransactionTypeMappings: TransactionTypeModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<TransTypeMappingStateModel>({
  name: 'TransactionTypeMappings',
  defaults: {
    TransactionTypeMappings: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class TransTypeMappingState {
  constructor(
    private transTypeService: TransactionTypeService,
    private transTypeTableService: TransactionTypeTableService,
    private notifierService: NotificationService
  ) {}

  @Selector()
  static TransactionTypeMappings(state: TransTypeMappingStateModel) {
    return state.TransactionTypeMappings;
  }

  @Selector()
  static responseMessage(state: TransTypeMappingStateModel) {
    return state.responseMessage;
  }

  @Action(TransTypeMappingGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<TransTypeMappingStateModel>
  ) {
    return this.transTypeService.getAllTransactionTypes().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.transTypeTableService.loading = false;
          this.transTypeTableService.setRowData(response);
        } else {
          this.transTypeTableService.loading = false;
          this.transTypeTableService.setRowData(response);
        }

        ctx.patchState({
          ...ctx.getState(),
          TransactionTypeMappings: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new TransTypeMappingErrorState(response.error));
      })
    );
  }

  @Action(TransTypeMappingAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<TransTypeMappingStateModel>,
    { data }: TransTypeMappingAdd
  ) {
    return this.transTypeService.addTransactionType(data).pipe(
      tap((response) => {
        ctx.dispatch(new TransTypeMappingSuccessState(response));
        ctx.patchState({
          ...ctx.getState(),
          TransactionTypeMappings: [...ctx.getState().TransactionTypeMappings],
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new TransTypeMappingErrorState(response.error));
      })
    );
  }

  @Action(TransTypeMappingUpdate, { cancelUncompleted: true })
  updateDataFromState(
    ctx: StateContext<TransTypeMappingStateModel>,
    { id, data, stateData }: TransTypeMappingUpdate
  ) {
    return this.transTypeService.updateTransactionType(data).pipe(
      tap((response) => {
        ctx.dispatch(new TransTypeMappingSuccessState(response));
        const dataList = [...ctx.getState().TransactionTypeMappings];
        const updatedDataIndex = dataList.findIndex((x) => x.id == id);
        dataList[updatedDataIndex] = stateData;
        ctx.patchState({
          ...ctx.getState(),
          responseMessage: response,
          TransactionTypeMappings: dataList,
        });
      })
    );
  }

  @Action(TransTypeMappingDelete, { cancelUncompleted: true })
  deleteDataFromState(
    ctx: StateContext<TransTypeMappingStateModel>,
    { id }: TransTypeMappingDelete
  ) {
    return this.transTypeService.deleteTransactionType(id).pipe(
      tap((response) => {
        ctx.dispatch(new TransTypeMappingSuccessState(response));
        const filteredData = ctx
          .getState()
          .TransactionTypeMappings.filter((x) => x.id !== id);

        ctx.patchState({
          ...ctx.getState(),
          responseMessage: response,
          TransactionTypeMappings: filteredData,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new TransTypeMappingErrorState(response.error));
      })
    );
  }

  @Action(TransTypeMappingSuccessState, { cancelUncompleted: true })
  ifStateSuccess(
    ctx: StateContext<TransTypeMappingStateModel>,
    { successMessage }: TransTypeMappingSuccessState
  ) {
    if (this.transTypeService.getCurrentStatusDialog().length != 0) {
      this.transTypeService.closeDialog();
    }

    this.notifierService.successNotification(
      successMessage?.message,
      successMessage?.status
    );

    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(TransTypeMappingErrorState, { cancelUncompleted: true })
  ifStateError(
    ctx: StateContext<TransTypeMappingStateModel>,
    { errorMessage }: TransTypeMappingErrorState
  ) {
    if (this.transTypeService.getCurrentStatusDialog().length != 0) {
      this.transTypeService.closeDialog();
    }

    this.notifierService.errorNotification(
      errorMessage?.message,
      errorMessage?.status
    );
    this.transTypeTableService.loading = false;
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
