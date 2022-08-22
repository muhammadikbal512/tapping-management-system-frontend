import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { catchError, tap } from 'rxjs';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { JsonConfigModel } from 'src/app/model/modules-model/json-configuration.model';
import { JsonConfigurationTableService } from 'src/app/modules/services/module-services/json-configuration-table.service';
import { JsonConfigurationService } from 'src/app/modules/services/module-services/json-configuration.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import {
  JsonConfigurationGet,
  JsonConfigurationSuccessState,
  JsonConfigurationErrorState,
  JsonConfigurationDelete,
} from './json-configuration.action';

export class JsonConfigurationStateModel {
  JsonConfigurations: JsonConfigModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<JsonConfigurationStateModel>({
  name: 'JsonConfiguration',
  defaults: {
    JsonConfigurations: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class JsonConfigurationState {
  constructor(
    private notifierService: NotificationService,
    private jsonService: JsonConfigurationService,
    private jsonTableService: JsonConfigurationTableService
  ) {}

  @Selector()
  public JsonConfigurations(state: JsonConfigurationStateModel) {
    return state.JsonConfigurations;
  }

  @Selector()
  public responseMessage(state: JsonConfigurationStateModel) {
    return state.responseMessage;
  }

  @Action(JsonConfigurationGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<JsonConfigurationStateModel>
  ) {
    return this.jsonService.getAllJsonConfig().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.jsonTableService.hideTableLoading();
          this.jsonTableService.setRowData(response);
        } else {
          this.jsonTableService.showNoRowData();
          this.jsonTableService.setRowData(response);
        }

        ctx.patchState({
          ...ctx.getState(),
          JsonConfigurations: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new JsonConfigurationErrorState(response.error));
      })
    );
  }

  @Action(JsonConfigurationDelete, { cancelUncompleted: true })
  deleteDataFromState(
    ctx: StateContext<JsonConfigurationStateModel>,
    { id }: JsonConfigurationDelete
  ) {
    return this.jsonService.deleteJsonConfig(id).pipe(
      tap((response) => {
        ctx.dispatch(new JsonConfigurationSuccessState(response));
        const filteredData = ctx
          .getState()
          .JsonConfigurations.filter((data) => data.id !== id);

        ctx.patchState({
          ...ctx.getState(),
          JsonConfigurations: filteredData,
          responseMessage: response,
        });
      })
    );
  }
  @Action(JsonConfigurationSuccessState)
  ifStateSuccess(
    ctx: StateContext<JsonConfigurationStateModel>,
    { successMessage }: JsonConfigurationSuccessState
  ) {
    this.notifierService.successNotification(
      successMessage.message,
      successMessage.httpStatusCode
    );

    ctx.patchState({
      responseMessage: successMessage
    })
  }

  @Action(JsonConfigurationErrorState) ifStateError(
    ctx: StateContext<JsonConfigurationStateModel>,
    { errorMessage }: JsonConfigurationErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage.message,
      errorMessage.httpStatusCode
    );

    if (this.jsonTableService.gridApi.getRenderedNodes().length == 0) {
      this.jsonTableService.showNoRowData();
    } else {
      this.jsonTableService.hideTableLoading();
    }

    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
