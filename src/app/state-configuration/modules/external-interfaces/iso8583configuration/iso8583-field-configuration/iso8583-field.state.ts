import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { State, StateContext, Action, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { IsoFieldConfigurationService } from 'src/app/modules/services/module-services/iso-field-configuration.service';
import { IsoFieldConfigurationTableService } from 'src/app/modules/services/module-services/iso-field-configuration-table.service';
import {
  Iso8583FieldAdd,
  Iso8583FieldDelete,
  Iso8583FieldErrorState,
  Iso8583FieldGet,
  Iso8583FieldGetDialect,
  Iso8583FieldSuccessState,
  Iso8583FieldUpdate,
} from './iso8583-field.action';
import { tap } from 'rxjs';
import { DialectMsgTemplateGroup } from 'src/app/interface/modules/dialect-msg-template-group';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { IsoFieldConfigurationModel } from 'src/app/model/modules-model/iso-field-configuration.model';
import { Iso8583DialectService } from 'src/app/modules/services/module-services/iso8583-dialect.service';

export class IsoFieldConfigurationStateModel {
  iso8583FieldConfiguration: IsoFieldConfigurationModel[] = [];
  dialects: DialectMsgTemplateGroup[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<IsoFieldConfigurationStateModel>({
  name: 'iso8583FieldConfigurationState',
  defaults: {
    iso8583FieldConfiguration: [],
    dialects: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class ISO8583FieldState {
  constructor(
    private notifierService: NotificationService,
    private dialectService: Iso8583DialectService,
    private iso8583FieldService: IsoFieldConfigurationService,
    private iso8583FieldTableService: IsoFieldConfigurationTableService
  ) {}

  @Selector()
  static ISO8583Fields(state: IsoFieldConfigurationStateModel) {
    return state.iso8583FieldConfiguration;
  }

  @Selector()
  static dialects(state: IsoFieldConfigurationStateModel) {
    return state.dialects;
  }

  @Selector()
  static responseMessage(state: IsoFieldConfigurationStateModel) {
    return state.responseMessage;
  }

  @Action(Iso8583FieldGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<IsoFieldConfigurationStateModel>
  ) {
    return this.iso8583FieldService.getAllIsoFieldConfiguration().pipe(
      tap((response) => {
        console.log(response);
        if (response?.length != 0) {
          this.iso8583FieldTableService.loading = false;
          this.iso8583FieldTableService.setRowData(response);
        } else {
          this.iso8583FieldTableService.setRowData(response);
          this.iso8583FieldTableService.loading = false;
        }
        ctx.setState({
          ...ctx.getState(),
          iso8583FieldConfiguration: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new Iso8583FieldErrorState(response.error));
      })
    );
  }

  @Action(Iso8583FieldAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<IsoFieldConfigurationStateModel>,
    { payload }: Iso8583FieldAdd
  ) {
    return this.iso8583FieldService.addIsoFieldConfiguration(payload).pipe(
      tap((response) => {
        ctx.dispatch(new Iso8583FieldSuccessState(response));
        ctx.patchState({
          ...ctx.getState(),
          iso8583FieldConfiguration: [
            ...ctx.getState().iso8583FieldConfiguration,
          ],
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new Iso8583FieldErrorState(response.error));
      })
    );
  }

  @Action(Iso8583FieldUpdate) updateDataFromState(
    ctx: StateContext<IsoFieldConfigurationStateModel>,
    { id, payload, stateData }: Iso8583FieldUpdate
  ) {
    return this.iso8583FieldService.updateIsoFieldConfiguration(payload).pipe(
      tap((response) => {
        ctx.dispatch(new Iso8583FieldSuccessState(response));
        const dataList = [...ctx.getState().iso8583FieldConfiguration];
        const updatedDataIndex = dataList.findIndex((data) => data.id === id);
        dataList[updatedDataIndex] = stateData;

        ctx.patchState({
          ...ctx.getState(),
          iso8583FieldConfiguration: dataList,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new Iso8583FieldSuccessState(response.error));
      })
    );
  }

  @Action(Iso8583FieldGetDialect, { cancelUncompleted: true })
  getAdditionalDataFromState(
    ctx: StateContext<IsoFieldConfigurationStateModel>
  ) {
    return this.dialectService.getAllIso8583Dialect().pipe(
      tap((response) => {
        let dialectParseList: DialectMsgTemplateGroup[] = [];
        response.forEach((x) => {
          dialectParseList.push({
            name: x.nameType,
            code: String(x.templateId),
          });
        });

        ctx.patchState({
          ...ctx.getState(),
          dialects: dialectParseList,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new Iso8583FieldErrorState(response.error));
      })
    );
  }

  @Action(Iso8583FieldDelete, { cancelUncompleted: true }) deleteDataFromState(
    ctx: StateContext<IsoFieldConfigurationStateModel>,
    { id }: Iso8583FieldDelete
  ) {
    return this.iso8583FieldService.deleteIsoFieldConfiguration(id).pipe(
      tap((response) => {
        ctx.dispatch(new Iso8583FieldSuccessState(response));
        ctx.setState({
          ...ctx.getState(),
          responseMessage: response,
        });
      })
    );
  }

  @Action(Iso8583FieldSuccessState)
  ifStateSuccess(
    ctx: StateContext<IsoFieldConfigurationStateModel>,
    { successMessage }: Iso8583FieldSuccessState
  ) {
    if (this.iso8583FieldService.getCurrentStatusDialog().length != 0) {
      this.iso8583FieldService.closeDialog();
    }
    this.notifierService.successNotification(
      successMessage?.message,
      successMessage?.httpStatusCode
    );
    this.iso8583FieldService.onGetAllIsoFieldConfiguration();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(Iso8583FieldErrorState)
  ifStateIsError(
    ctx: StateContext<IsoFieldConfigurationStateModel>,
    { errorMessage }: Iso8583FieldErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage?.message,
      errorMessage?.httpStatusCode
    );
 
    this.iso8583FieldTableService.loading = false;
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
