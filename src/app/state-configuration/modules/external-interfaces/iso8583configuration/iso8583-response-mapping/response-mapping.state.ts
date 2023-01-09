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
        if (response.responseData.length != 0) {
          this.responseTableService.loading = false;
          this.responseTableService.setRowData(response.responseData);
        } else {
          this.responseTableService.setRowData(response.responseData);
          this.responseTableService.loading = false;
        }

        ctx.patchState({
          ...ctx.getState(),
          responseMappings: response.responseData,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new ResponseMappingErrorState(response.error));
      })
    );
  }

  @Action(ResponseMappingAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<ResponseMappingStateModel>,
    { payload }: ResponseMappingAdd
  ) {
    return this.responseService.addResponseMapping(payload).pipe(
      tap((response) => {
        ctx.dispatch(new ResponseMappingSuccessState(response));
        ctx.patchState({
          ...ctx.getState(),
          responseMappings: [...ctx.getState().responseMappings],
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new ResponseMappingErrorState(response.error));
      })
    );
  }

  @Action(ResponseMappingDelete, { cancelUncompleted: true })
  deleteDataFromState(
    ctx: StateContext<ResponseMappingStateModel>,
    { id }: ResponseMappingDelete
  ) {
    return this.responseService.deleteResponseMapping(id).pipe(
      tap((response) => {
        ctx.dispatch(new ResponseMappingSuccessState(response));
        const filteredData = ctx
          .getState()
          .responseMappings.filter((x) => x.id !== id);
        ctx.patchState({
          ...ctx.getState(),
          responseMappings: filteredData,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new ResponseMappingErrorState(response.error));
      })
    );
  }

  @Action(ResponseMappingUpdate, { cancelUncompleted: true })
  updateDataFromState(
    ctx: StateContext<ResponseMappingStateModel>,
    { id, payload, stateData }: ResponseMappingUpdate
  ) {
    return this.responseService.updateResponseMapping(payload).pipe(
      tap((response) => {
        ctx.dispatch(new ResponseMappingSuccessState(response));
        const dataList = [...ctx.getState().responseMappings];
        const updatedDataIndex = dataList.findIndex((x) => x.id == id);
        dataList[updatedDataIndex] = stateData;
        ctx.patchState({
          ...ctx.getState(),
          responseMappings: dataList,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new ResponseMappingErrorState(response.error));
      })
    );
  }

  @Action(ResponseMappingSuccessState) ifSuccessState(
    ctx: StateContext<ResponseMappingStateModel>,
    { successMessage }: ResponseMappingSuccessState
  ) {
    this.notifierService.successNotification(
      successMessage.message,
      successMessage.httpStatusCode
    );

    this.responseService.onGetAllResponseMapping();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(ResponseMappingErrorState) ifErrorState(
    ctx: StateContext<ResponseMappingStateModel>,
    { errorMessage }: ResponseMappingErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage.error,
      errorMessage.status
    );

    this.responseTableService.loading = false;

    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
