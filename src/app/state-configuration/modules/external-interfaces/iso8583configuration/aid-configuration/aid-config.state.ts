import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import {
  AidConfigAdd,
  AidConfigDelete,
  AidConfigErrorState,
  AidConfigGet,
  AidConfigSuccessState,
  AidConfigUpdate,
} from './aid-config.action';
import { AidConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/aid-configuration.service';
import { AidConfigurationTableService } from 'src/app/modules/services/module-services/external-interfaces/aid-configuration-table.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { catchError, tap } from 'rxjs';
import { AidConfigurationModel } from 'src/app/model/modules-model/aid-configuration.model';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';

export class AidConfigStateModel {
  AidConfigurations: AidConfigurationModel[] = [];
  responseMessage: HttpResponseData<any> | undefined;
}

@State<AidConfigStateModel>({
  name: 'AidConfigurations',
  defaults: {
    AidConfigurations: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class AidConfigState {
  constructor(
    private aidConfigService: AidConfigurationService,
    private aidConfigTableService: AidConfigurationTableService,
    private notifierService: NotificationService
  ) {}
  @Selector()
  static AidConfigurations(state: AidConfigStateModel) {
    return state.AidConfigurations;
  }

  @Selector()
  static responseMessage(state: AidConfigStateModel) {
    return state.responseMessage;
  }

  @Action(AidConfigGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<AidConfigStateModel>
  ) {
    return this.aidConfigService.getAllAidConfig().pipe(
      tap((response) => {
        if (response.responseData.length != 0) {
          this.aidConfigTableService.loading = false;
          this.aidConfigTableService.setRowData(response.responseData);
        } else {
          this.aidConfigTableService.loading = false;
          this.aidConfigTableService.setRowData(response.responseData);
        }

        ctx.patchState({
          ...ctx.getState(),
          AidConfigurations: response.responseData,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new AidConfigErrorState(response.error));
      })
    );
  }

  @Action(AidConfigAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<AidConfigStateModel>,
    { payload }: AidConfigAdd
  ) {
    return this.aidConfigService.addAidConfig(payload).pipe(
      tap((response) => {
        ctx.dispatch(new AidConfigSuccessState(response));
        ctx.patchState({
          ...ctx.getState(),
          AidConfigurations: [...ctx.getState().AidConfigurations],
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new AidConfigErrorState(response.error));
      })
    );
  }

  @Action(AidConfigUpdate, { cancelUncompleted: true }) updateDataFromState(
    ctx: StateContext<AidConfigStateModel>,
    { payload }: AidConfigUpdate
  ) {
    return this.aidConfigService.updateAidConfig(payload).pipe(
      tap((response) => {
        ctx.dispatch(new AidConfigSuccessState(response));
        const dataList = [...ctx.getState().AidConfigurations];

        ctx.patchState({
          AidConfigurations: dataList,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new AidConfigErrorState(response.error));
      })
    );
  }

  @Action(AidConfigDelete, { cancelUncompleted: true }) deleteDataFromState(
    ctx: StateContext<AidConfigStateModel>,
    { id }: AidConfigDelete
  ) {
    return this.aidConfigService.deleteAidConfig(id).pipe(
      tap((response) => {
        ctx.dispatch(new AidConfigSuccessState(response));
        const filterData = ctx
          .getState()
          .AidConfigurations.filter((x) => x.id !== id);

        ctx.patchState({
          ...ctx.getState(),
          AidConfigurations: filterData,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new AidConfigErrorState(response.error));
      })
    );
  }

  @Action(AidConfigSuccessState) ifStateSuccess(
    ctx: StateContext<AidConfigStateModel>,
    { successMessage }: AidConfigSuccessState
  ) {
    if (this.aidConfigService.getCurrentStatusDialog().length != 0) {
      this.aidConfigService.closeDialog();
    }
    this.notifierService.successNotification(
      successMessage?.responseMessage,
      successMessage?.responseCode
    );
    this.aidConfigService.onGetAidConfig();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(AidConfigErrorState) ifStateError(
    ctx: StateContext<AidConfigStateModel>,
    { errorMessage }: AidConfigErrorState
  ) {
    if (this.aidConfigService.getCurrentStatusDialog().length != 0) {
      this.aidConfigService.closeDialog();
    }
    this.notifierService.errorNotification(
      errorMessage?.responseMessage,
      errorMessage?.responseCode
    );

    this.aidConfigTableService.loading = false;
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
