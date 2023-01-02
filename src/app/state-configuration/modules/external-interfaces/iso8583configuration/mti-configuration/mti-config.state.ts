import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import {
  MtiConfigAdd,
  MtiConfigDelete,
  MtiConfigErrorState,
  MtiConfigGet,
  MtiConfigSuccessState,
  MtiConfigUpdate,
} from './mti-config.action';
import { MtiConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/mti-configuration.service';
import { MtiConfigurationTableService } from 'src/app/modules/services/module-services/external-interfaces/mti-configuration-table.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { catchError, tap } from 'rxjs';
import { MtiConfigurationModel } from 'src/app/model/modules-model/mti-configuration.model';
import { HttpErrorResponse } from '@angular/common/http';

export class MtiConfigStateModel {
  MtiConfigurations: MtiConfigurationModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<MtiConfigStateModel>({
  name: 'MtiConfigurations',
  defaults: {
    MtiConfigurations: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class MtiConfigState {
  constructor(
    private mtiConfigService: MtiConfigurationService,
    private mtiConfigTableService: MtiConfigurationTableService,
    private notifierService: NotificationService
  ) {}

  @Selector()
  static MtiConfigurations(state: MtiConfigStateModel) {
    return state.MtiConfigurations;
  }

  @Selector()
  static responseMessage(state: MtiConfigStateModel) {
    return state.responseMessage;
  }

  @Action(MtiConfigGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<MtiConfigStateModel>
  ) {
    return this.mtiConfigService.getAllMtiConfig().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.mtiConfigTableService.loading = false;
          this.mtiConfigTableService.setRowData(response);
        }

        ctx.patchState({
          ...ctx.getState(),
          MtiConfigurations: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new MtiConfigErrorState(response.error));
      })
    );
  }

  @Action(MtiConfigAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<MtiConfigStateModel>,
    { payload }: MtiConfigAdd
  ) {
    return this.mtiConfigService.addMtiConfig(payload).pipe(
      tap((response) => {
        ctx.dispatch(new MtiConfigSuccessState(response));
        ctx.patchState({
          ...ctx.getState(),
          MtiConfigurations: [...ctx.getState().MtiConfigurations],
          responseMessage: response,
        });
      })
    );
  }

  @Action(MtiConfigUpdate, { cancelUncompleted: true }) updateDataFromState(
    ctx: StateContext<MtiConfigStateModel>,
    { id, payload, stateData }: MtiConfigUpdate
  ) {
    return this.mtiConfigService.updateMtiConfig(payload).pipe(
      tap((response) => {
        ctx.dispatch(new MtiConfigSuccessState(response));
        const dataList = [...ctx.getState().MtiConfigurations];
        const updatedDataIndex = dataList.findIndex((x) => {
          x.id == id;
        });
        dataList[updatedDataIndex] = stateData;

        ctx.patchState({
          ...ctx.getState(),
          MtiConfigurations: dataList,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new MtiConfigSuccessState(response.error));
      })
    );
  }

  @Action(MtiConfigDelete, { cancelUncompleted: true }) deleteDataFromState(
    ctx: StateContext<MtiConfigStateModel>,
    { id }: MtiConfigDelete
  ) {
    return this.mtiConfigService.deleteMtiConfig(id).pipe(
      tap((response) => {
        ctx.dispatch(new MtiConfigSuccessState(response));

        const filteredData = ctx
          .getState()
          .MtiConfigurations.filter((x) => x.id !== id);

        ctx.patchState({
          ...ctx.getState(),
          MtiConfigurations: filteredData,
          responseMessage: response,
        });
      })
    );
  }

  @Action(MtiConfigSuccessState)
  ifStateSuccess(
    ctx: StateContext<MtiConfigStateModel>,
    { successMessage }: MtiConfigSuccessState
  ) {
    if (this.mtiConfigService.getCurrentStatusDialog().length != 0) {
      this.mtiConfigService.closeDialog();
    }
    this.notifierService.successNotification(
      successMessage?.message,
      successMessage?.httpStatusCode
    );
    this.mtiConfigService.onGetAllMtiConfig();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(MtiConfigErrorState)
  ifStateIsError(
    ctx: StateContext<MtiConfigStateModel>,
    { errorMessage }: MtiConfigErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage?.message,
      errorMessage?.status
    );

    if (this.mtiConfigService.getCurrentStatusDialog().length != 0) {
      this.mtiConfigService.closeDialog();
    }
    this.mtiConfigTableService.loading = false;
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}