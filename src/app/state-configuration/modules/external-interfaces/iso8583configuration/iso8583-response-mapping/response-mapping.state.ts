import { ResponseMappingModel } from 'src/app/model/modules-model/response-mapping.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { State, Selector, Action, StateContext, Select } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { ResponseMappingService } from 'src/app/modules/services/module-services/external-interfaces/response-mapping.service';
import { ResponseMappingTableService } from 'src/app/modules/services/module-services/external-interfaces/response-mapping-table.service';
import {
  ResponseMappingGet,
  ResponseMappingAdd,
  ResponseMappingDelete,
  ResponseMappingErrorState,
  ResponseMappingSuccessState,
  ResponseMappingUpdate,
  ResponseMappingGetIsoConfig,
} from './response-mapping.action';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { IsoConfigurationInterface } from 'src/app/interface/modules/iso-configuration-interface';
import { IsoConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/iso-configuration.service';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';

export class ResponseMappingStateModel {
  responseMappings: ResponseMappingModel[] = [];
  IsoConfigurations: IsoConfigurationInterface[] = [];
  responseMessage: HttpResponseData<any> | undefined;
}

@State<ResponseMappingStateModel>({
  name: 'responseMappingState',
  defaults: {
    responseMappings: [],
    IsoConfigurations: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class ResponseMappingState {
  constructor(
    private responseService: ResponseMappingService,
    private responseTableService: ResponseMappingTableService,
    private notifierService: NotificationService,
    private isoConfigurationService: IsoConfigurationService
  ) {}

  @Selector()
  static responseMappings(state: ResponseMappingStateModel) {
    return state.responseMappings;
  }

  @Selector()
  static IsoConfigurations(state: ResponseMappingStateModel) {
    return state.IsoConfigurations;
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

  @Action(ResponseMappingGetIsoConfig, { cancelUncompleted: true })
  GetAdditionalDataFromState(ctx: StateContext<ResponseMappingStateModel>) {
    return this.isoConfigurationService.getAllIsoConfiguration().pipe(
      tap((response) => {
        let isoConfigurationParseList: IsoConfigurationInterface[] = [];

        response.responseData.forEach((x) => {
          isoConfigurationParseList.push({
            code: String(x.id),
            name: x.name,
          });
        });

        ctx.patchState({
          ...ctx.getState(),
          IsoConfigurations: isoConfigurationParseList,
        });
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
    { payload }: ResponseMappingUpdate
  ) {
    return this.responseService.updateResponseMapping(payload).pipe(
      tap((response) => {
        ctx.dispatch(new ResponseMappingSuccessState(response));
        const dataList = [...ctx.getState().responseMappings];
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
      successMessage.responseMessage,
      successMessage.responseCode
    );

    this.responseService.closeDialog();
    this.responseTableService.loading = true;
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
      errorMessage.responseMessage,
      errorMessage.responseData
    );

    this.responseTableService.loading = false;
    this.responseService.showLoading = false;
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
