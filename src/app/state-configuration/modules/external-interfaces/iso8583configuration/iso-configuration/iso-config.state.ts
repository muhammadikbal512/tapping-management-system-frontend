import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { IsoConfigurationModel } from 'src/app/model/modules-model/iso-configuration.model';
import { IsoConfigurationTableService } from 'src/app/modules/services/module-services/external-interfaces/iso-configuration-table.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import {
  IsoConfigAdd,
  IsoConfigDelete,
  IsoConfigErrorState,
  IsoConfigGet,
  IsoConfigSuccessState,
  IsoConfigUpdate,
} from './iso-config.action';
import { IsoConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso-configuration.service';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class IsoConfigStateModel {
  IsoConfigurations: IsoConfigurationModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<IsoConfigStateModel>({
  name: 'IsoConfigurations',
  defaults: {
    IsoConfigurations: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class IsoConfigState {
  constructor(
    private isoConfigService: IsoConfigurationService,
    private isoConfigTableService: IsoConfigurationTableService,
    private notifierService: NotificationService
  ) {}

  @Selector()
  static IsoConfigurations(state: IsoConfigStateModel) {
    return state.IsoConfigurations;
  }

  @Selector()
  static responseMessage(state: IsoConfigStateModel) {
    return state.responseMessage;
  }

  @Action(IsoConfigGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<IsoConfigStateModel>
  ) {
    return this.isoConfigService.getAllIsoConfiguration().pipe(
      tap((response) => {
        if (response.responseData.length != 0) {
          this.isoConfigTableService.loading = false;
          this.isoConfigTableService.setRowData(response.responseData);
        }
        ctx.patchState({
          ...ctx.getState(),
          IsoConfigurations: response.responseData,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new IsoConfigErrorState(response.error));
      })
    );
  }

  @Action(IsoConfigAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<IsoConfigStateModel>,
    { payload }: IsoConfigAdd
  ) {
    return this.isoConfigService.addIsoConfiguration(payload).pipe(
      tap((response) => {
        ctx.dispatch(new IsoConfigSuccessState(response));

        ctx.patchState({
          IsoConfigurations: [...ctx.getState().IsoConfigurations],
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new IsoConfigErrorState(response.error));
      })
    );
  }

  @Action(IsoConfigUpdate, { cancelUncompleted: true }) updateDataFromState(
    ctx: StateContext<IsoConfigStateModel>,
    { id, payload, stateData }: IsoConfigUpdate
  ) {
    return this.isoConfigService.updateIsoConfiguration(payload).pipe(
      tap((response) => {
        ctx.dispatch(new IsoConfigSuccessState(response));
        const dataList = [...ctx.getState().IsoConfigurations];
        const updatedDataIndex = dataList.findIndex((x) => x.id == id);
        dataList[updatedDataIndex] = stateData;

        ctx.patchState({
          IsoConfigurations: dataList,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new IsoConfigSuccessState(response.error));
      })
    );
  }

  @Action(IsoConfigDelete, { cancelUncompleted: true }) deleteDataFromState(
    ctx: StateContext<IsoConfigStateModel>,
    { id }: IsoConfigDelete
  ) {
    return this.isoConfigService.deleteIsoConfiguration(id).pipe(
      tap((response) => {
        ctx.dispatch(new IsoConfigSuccessState(response));
        const filterData = ctx
          .getState()
          .IsoConfigurations.filter((x) => x.id !== id);

        ctx.patchState({
          IsoConfigurations: filterData,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new IsoConfigErrorState(response.error));
      })
    );
  }

  @Action(IsoConfigSuccessState) ifStateSuccess(
    ctx: StateContext<IsoConfigStateModel>,
    { successMessage }: IsoConfigSuccessState
  ) {
    this.notifierService.successNotification(
      successMessage?.message,
      successMessage?.status
    );
    if (this.isoConfigService.getCurrentStatusDialog().length != 0) {
      this.isoConfigService.closeDialog();
    }

    this.isoConfigService.onGetAllIsoConfig();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(IsoConfigErrorState) ifStateError(
    ctx: StateContext<IsoConfigStateModel>,
    { errorMessage }: IsoConfigErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage?.error,
      errorMessage?.status
    );
    this.isoConfigTableService.loading = false;
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
