import { ResponseMappingModel } from 'src/app/model/modules-model/response-mapping.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { State, Selector, Action, StateContext, Select } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { ResponseMappingService } from 'src/app/modules/services/module-services/response-mapping.service';
import { ResponseMappingTableService } from 'src/app/modules/services/module-services/response-mapping-table.service';
import {
  ResponseMappingGet,
  ResponseMappingAdd,
  ResponseMappingDelete,
  ResponseMappingErrorState,
  ResponseMappingSuccessState,
  ResponseMappingUpdate,
} from './response-mapping.action';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class ResponseMappingStateModel {
  responseMappings: ResponseMappingModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<ResponseMappingStateModel>({
  name: 'responseMappingState',
  defaults: {
    responseMappings: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class ResponseMappingState {
  constructor(
    private responseService: ResponseMappingService,
    private responseTableService: ResponseMappingTableService,
    private notifierService: NotificationService
  ) {}

  @Selector()
  static responseMappings(state: ResponseMappingStateModel) {
    return state.responseMappings;
  }

  @Selector()
  static responseMessage(state: ResponseMappingStateModel) {
    return state.responseMessage;
  }

  @Action(ResponseMappingGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<ResponseMappingGet>
  ) {
    return this.responseService.getAllResponseMapping().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.responseTableService.showTableLoading();
          this.responseTableService.setRowData(response);
        } else {
          this.responseTableService.setRowData(response);
          this.responseTableService.showNorowData();
        }

        ctx.patchState({
          ...ctx.getState(),
          responseMappings: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new ResponseMappingErrorState(response.error));
      })
    );
  }

  @Action(ResponseMappingAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<ResponseMappingAdd>,
    { payload }: ResponseMappingAdd
  ) {}

  @Action(ResponseMappingDelete, { cancelUncompleted: true })
  deleteDataFromState(
    ctx: StateContext<ResponseMappingDelete>,
    { id }: ResponseMappingDelete
  ) {}

  @Action(ResponseMappingUpdate, { cancelUncompleted: true })
  updateDataFromState(
    ctx: StateContext<ResponseMappingUpdate>,
    { id, payload, stateData }: ResponseMappingUpdate
  ) {}

  @Action(ResponseMappingSuccessState) ifSuccessState(
    ctx: StateContext<ResponseMappingStateModel>,
    { successMessage }: ResponseMappingSuccessState
  ) {
    this.notifierService.successNotification(
      successMessage.message,
      successMessage.httpStatusCode
    )
    
    this.responseService.onGetAllResponseMapping();
    ctx.patchState({
      responseMessage: successMessage
    })
  }

  @Action(ResponseMappingErrorState) ifErrorState(
    ctx: StateContext<ResponseMappingStateModel>,
    { errorMessage }: ResponseMappingErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage.message,
      errorMessage.httpStatusCode
    )

    if (this.responseTableService.gridApi.getRenderedNodes().length == 0) {
      this.responseTableService.showNorowData();
    } else {
      this.responseTableService.showTableLoading();
    }

    ctx.patchState({
      responseMessage: errorMessage
    })
  }
}
