import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { TransactionTypeModel } from 'src/app/model/modules-model/transaction-type.model';
import { TransactionTypeTableService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/transaction-type-table.service';
import { TransactionTypeService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/transaction-type.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import {
  TransTypeGetIsoConfig,
  TransTypeMappingAdd,
  TransTypeMappingDelete,
  TransTypeMappingErrorState,
  TransTypeMappingGet,
  TransTypeMappingSuccessState,
  TransTypeMappingUpdate,
} from './trans-type-mapping.action';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { IsoConfigurationModel } from 'src/app/model/modules-model/iso-configuration.model';
import { IsoConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/iso-configuration.service';
import { IsoConfigurationInterface } from 'src/app/interface/modules/iso-configuration-interface';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';

export class TransTypeMappingStateModel {
  TransactionTypeMappings: TransactionTypeModel[] = [];
  IsoConfigurations: IsoConfigurationInterface[] = [];
  responseMessage: HttpResponseData<any> | undefined;
}

@State<TransTypeMappingStateModel>({
  name: 'TransactionTypeMappings',
  defaults: {
    TransactionTypeMappings: [],
    IsoConfigurations: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class TransTypeMappingState {
  constructor(
    private transTypeService: TransactionTypeService,
    private transTypeTableService: TransactionTypeTableService,
    private notifierService: NotificationService,
    private isoConfigService: IsoConfigurationService
  ) {}

  @Selector()
  static TransactionTypeMappings(state: TransTypeMappingStateModel) {
    return state.TransactionTypeMappings;
  }

  @Selector()
  static IsoConfigurations(state: TransTypeMappingStateModel) {
    return state.IsoConfigurations;
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
        if (response.responseData.length != 0) {
          this.transTypeTableService.loading = false;
          this.transTypeTableService.setRowData(response.responseData);
        } else {
          this.transTypeTableService.loading = false;
          this.transTypeTableService.setRowData(response.responseData);
        }

        ctx.patchState({
          ...ctx.getState(),
          TransactionTypeMappings: response.responseData,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new TransTypeMappingErrorState(response.error));
      })
    );
  }

  @Action(TransTypeGetIsoConfig, { cancelUncompleted: true })
  getAdditionalDataFromState(ctx: StateContext<TransTypeMappingStateModel>) {
    return this.isoConfigService.getAllIsoConfiguration().pipe(
      tap((response) => {
        let isoConfigurationParseList: IsoConfigurationInterface[] = [];
        response.responseData.forEach((x) => {
          isoConfigurationParseList.push({
            name: x.name,
            code: String(x.id),
          });
        });

        ctx.patchState({
          ...ctx.getState(),
          IsoConfigurations: isoConfigurationParseList,
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
    { payload }: TransTypeMappingUpdate
  ) {
    return this.transTypeService.updateTransactionType(payload).pipe(
      tap((response) => {
        ctx.dispatch(new TransTypeMappingSuccessState(response));
        const dataList = [...ctx.getState().TransactionTypeMappings];
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
      successMessage.responseMessage,
      successMessage.responseCode,
    );
    this.transTypeService.onGetAllTransactionType();

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
      errorMessage?.responseCode,
      errorMessage?.responseMessage
    );
    this.transTypeTableService.loading = false;
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
