import { Action, State, StateContext, Selector } from '@ngxs/store';
import {
  AppParameterAdd,
  AppParameterDelete,
  AppParameterErrorState,
  AppParameterSuccessState,
  AppParameterUpdate,
  AppParametersGet,
} from './app-parameters.action';
import { Injectable } from '@angular/core';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { AppsParametersModel } from 'src/app/model/modules-model/apps-parameters.model';
import { AppParametersService } from 'src/app/modules/services/module-services/app-parameters.service';
import { AppParametersTableService } from 'src/app/modules/services/module-services/app-parameters-table.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class AppParametersStateModel {
  AppParameters: AppsParametersModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

State<AppParametersStateModel>({
  name: 'AppParameter',
  defaults: {
    AppParameters: [],
    responseMessage: undefined,
  },
});

@Injectable()
export class AppParameterState {
  constructor(
    private appService: AppParametersService,
    private appTableService: AppParametersTableService,
    private notifierService: NotificationService
  ) {}
  @Selector()
  static AppParameters(state: AppParametersStateModel) {
    return state.AppParameters;
  }

  @Selector()
  static responseMessage(state: AppParametersStateModel) {
    return state.responseMessage;
  }

  @Action(AppParametersGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<AppParametersStateModel>
  ) {
    return this.appService.getArpAll().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.appTableService.showTableLoading();
          this.appTableService.SetRowData(response);
        } else {
          this.appTableService.ShowNoRowData();
          this.appTableService.SetRowData(response);
        }
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new AppParameterErrorState(response.error));
      })
    );
  }

  @Action(AppParameterAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<AppParametersStateModel>,
    { payload }: AppParameterAdd
  ) {
    return this.appService.addArp(payload).pipe(
      tap((response) => {
        ctx.dispatch(new AppParameterSuccessState(response));

        ctx.patchState({
          ...ctx.getState(),
          AppParameters: [...ctx.getState().AppParameters],
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new AppParameterErrorState(response.error));
      })
    );
  }

  @Action(AppParameterDelete, { cancelUncompleted: true }) deleteDataFromState(
    ctx: StateContext<AppParametersStateModel>,
    { id }: AppParameterDelete
  ) {
    return this.appService.deleteArp(id).pipe(
      tap((response) => {
        ctx.dispatch(new AppParameterSuccessState(response));
        const filteredData = ctx
          .getState()
          .AppParameters.filter((data) => data.id !== id);
        ctx.patchState({
          ...ctx.getState(),
          AppParameters: filteredData,
          responseMessage: response,
        });
      })
    );
  }

  @Action(AppParameterUpdate, { cancelUncompleted: true }) updateDataFromState(
    ctx: StateContext<AppParametersStateModel>,
    { id, payload, stateData }: AppParameterUpdate
  ) {}

  @Action(AppParameterSuccessState) ifStateSuccess(
    ctx: StateContext<AppParametersStateModel>,
    { successMessage }: AppParameterSuccessState
  ) {
    this.notifierService.successNotification(
      successMessage.message,
      successMessage.httpStatusCode
    );

    this.appService.onGetArpAll();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(AppParameterErrorState) ifStateError(
    ctx: StateContext<AppParametersStateModel>,
    { errorMessage }: AppParameterErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage.message,
      errorMessage.httpStatusCode
    );

    if (this.appTableService.gridApi.getRenderedNodes().length == 0) {
      this.appTableService.ShowNoRowData();
    } else {
      this.appTableService.showTableLoading();
    }

    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
