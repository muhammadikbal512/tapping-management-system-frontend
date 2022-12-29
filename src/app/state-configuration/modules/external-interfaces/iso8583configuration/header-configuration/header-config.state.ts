import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  HeaderConfigGet,
  HeaderConfigAdd,
  HeaderConfigDelete,
  HeaderConfigErrorState,
  HeaderConfigSuccessState,
  HeaderConfigUpdate,
} from './header-config.action';
import { HeaderConfigurationModel } from 'src/app/model/modules-model/header-configuration.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { HeaderConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/header-configuration.service';
import { HeaderConfigurationTableService } from 'src/app/modules/services/module-services/external-interfaces/header-configuration-table.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class HeaderConfigStateModel {
  HeaderConfigurations: HeaderConfigurationModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<HeaderConfigStateModel>({
  name: 'HeaderConfigurations',
  defaults: {
    HeaderConfigurations: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class HeaderConfigState {
  constructor(
    private headerConfigService: HeaderConfigurationService,
    private headerConfigTableService: HeaderConfigurationTableService,
    private notifierService: NotificationService
  ) {}

  @Selector()
  static headerConfigs(state: HeaderConfigStateModel) {
    return state.HeaderConfigurations;
  }

  @Selector()
  static responseMessage(state: HeaderConfigStateModel) {
    return state.responseMessage;
  }

  @Action(HeaderConfigGet, { cancelUncompleted: true })
  getDataFromState(ctx: StateContext<HeaderConfigStateModel>) {
    return this.headerConfigService.getAllHeaderConfigs().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.headerConfigTableService.loading = false;
          this.headerConfigTableService.setRowData(response);
        } else {
          this.headerConfigTableService.setRowData(response);
          this.headerConfigTableService.loading = false;
        }

        ctx.setState({
          ...ctx.getState(),
          HeaderConfigurations: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new HeaderConfigErrorState(response.error));
      })
    );
  }

  @Action(HeaderConfigAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<HeaderConfigStateModel>,
    { payload }: HeaderConfigAdd
  ) {
    return this.headerConfigService.addHeaderConfig(payload).pipe(
      tap((response) => {
        ctx.dispatch(new HeaderConfigSuccessState(response));
        ctx.patchState({
          ...ctx.getState(),
          HeaderConfigurations: [...ctx.getState().HeaderConfigurations],
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new HeaderConfigErrorState(response.error));
      })
    );
  }

  @Action(HeaderConfigUpdate, { cancelUncompleted: true }) updateDataFromState(
    ctx: StateContext<HeaderConfigStateModel>,
    { id, payload, stateData }: HeaderConfigUpdate
  ) {
    return this.headerConfigService.updateHeaderConfig(payload).pipe(
      tap((response) => {
        ctx.dispatch(new HeaderConfigSuccessState(response));
        const dataList = [...ctx.getState().HeaderConfigurations];
        const updatedDataIndex = dataList.findIndex((x) => x.id == id);
        dataList[updatedDataIndex] = stateData;

        ctx.patchState({
          ...ctx.getState(),
          HeaderConfigurations: dataList,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new HeaderConfigErrorState(response.error));
      })
    );
  }

  @Action(HeaderConfigDelete, { cancelUncompleted: true }) deleteDataFromState(
    ctx: StateContext<HeaderConfigStateModel>,
    { id }: HeaderConfigDelete
  ) {
    return this.headerConfigService.deleteHeaderConfig(id).pipe(
      tap((response) => {
        ctx.dispatch(new HeaderConfigSuccessState(response));
        const filteredData = ctx
          .getState()
          .HeaderConfigurations.filter((data) => data.id !== id);

        ctx.patchState({
          ...ctx.getState(),
          HeaderConfigurations: filteredData,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new HeaderConfigErrorState(response.error));
      })
    );
  }

  @Action(HeaderConfigSuccessState)
  ifStateSuccess(
    ctx: StateContext<HeaderConfigStateModel>,
    { successMessage }: HeaderConfigSuccessState
  ) {
    if (this.headerConfigService.getCurrentStatusDialog().length != 0) {
      this.headerConfigService.closeDialog();
    }
    this.notifierService.successNotification(
      successMessage?.message,
      successMessage?.httpStatusCode
    );
    this.headerConfigService.onGetAllHeaderConfig();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(HeaderConfigErrorState)
  ifStateIsError(
    ctx: StateContext<HeaderConfigStateModel>,
    { errorMessage }: HeaderConfigErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage?.message,
      errorMessage?.status
    );

    if (this.headerConfigService.getCurrentStatusDialog().length != 0) {
      this.headerConfigService.closeDialog();
    }
    this.headerConfigTableService.loading = false;
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
