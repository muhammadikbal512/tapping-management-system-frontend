import { Iso8583FieldModel } from 'src/app/model/modules-model/iso8583-field.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { State, StateContext, Action, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { Iso8583DialectService } from 'src/app/modules/services/module-services/iso8583-dialect.service';
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
import { DialectStateModel } from '../iso8583-dialect/dialect.state';

export class Iso8583FieldStateModel {
  iso8583Fields: Iso8583FieldModel[] = [];
  dialects: DialectMsgTemplateGroup[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<Iso8583FieldStateModel>({
  name: 'iso8583FieldState',
  defaults: {
    iso8583Fields: [],
    dialects: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class ISO8583FieldState {
  constructor(
    private notifierService: NotificationService,
    private iso8583FieldService: IsoFieldConfigurationService,
    private iso8583FieldTableService: IsoFieldConfigurationTableService
  ) {}

  @Selector()
  static ISO8583Fields(state: Iso8583FieldStateModel) {
    return state.iso8583Fields;
  }

  @Selector()
  static dialects(state: Iso8583FieldStateModel) {
    return state.dialects;
  }

  @Selector()
  static responseMessage(state: Iso8583FieldStateModel) {
    return state.responseMessage;
  }

  @Action(Iso8583FieldGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<Iso8583FieldStateModel>
  ) {
    return this.iso8583FieldService.getAllIsoFieldConfiguration().pipe(
      tap((response) => {
        console.log(response);
        if (response?.length != 0) {
          this.iso8583FieldTableService.hideTableLoading();
          this.iso8583FieldTableService.setRowData(response);
        } else {
          this.iso8583FieldTableService.setRowData(response);
          this.iso8583FieldTableService.showNoRowData();
        }
        ctx.setState({
          ...ctx.getState(),
          iso8583Fields: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new Iso8583FieldErrorState(response.error));
      })
    );
  }

  @Action(Iso8583FieldDelete, {cancelUncompleted: true})deleteDataFromState(ctx: StateContext<Iso8583FieldStateModel>, {id}: Iso8583FieldDelete) {
    return this.iso8583FieldService.deleteIsoFieldConfiguration(id).pipe(tap(response => {
      ctx.dispatch(new Iso8583FieldSuccessState(response));
      ctx.setState({
        ...ctx.getState(),
        responseMessage: response,
      });
    }))
  }

  @Action(Iso8583FieldSuccessState)
  ifStateSuccess(
    ctx: StateContext<Iso8583FieldStateModel>,
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
    ctx: StateContext<Iso8583FieldStateModel>,
    { errorMessage }: Iso8583FieldErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage?.message,
      errorMessage?.httpStatusCode
    );
    if (this.iso8583FieldTableService.gridApi.getRenderedNodes().length == 0) {
      this.iso8583FieldTableService.showNoRowData();
    } else {
      this.iso8583FieldTableService.hideTableLoading();
    }
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
