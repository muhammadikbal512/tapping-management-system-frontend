import { State, StateContext, Action, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { IsoFieldConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso-field-configuration.service';

import {
  Iso8583FieldAdd,
  Iso8583FieldDelete,
  Iso8583FieldEncoding,
  Iso8583FieldErrorState,
  Iso8583FieldFormat,
  Iso8583FieldGet,
  Iso8583FieldIsoConfig,
  Iso8583FieldSuccessState,
  Iso8583FieldUpdate,
  Iso8583SubFieldAdd,
  Iso8583SubFieldGet,
} from './iso8583-field.action';
import { tap } from 'rxjs';
import { DialectMsgTemplateGroup } from 'src/app/interface/modules/dialect-msg-template-group';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Iso8583DialectService } from 'src/app/modules/services/module-services/iso8583-dialect.service';
import {
  Iso8583FieldModel,
  Iso8583SubFieldModel,
} from 'src/app/model/modules-model/iso8583-field.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';
import { IsoConfigurationInterface } from 'src/app/interface/modules/iso-configuration-interface';
import { IsoConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso-configuration.service';
import { IsoFieldConfigurationTableService } from 'src/app/modules/services/module-services/external-interfaces/iso-field-configuration-table.service';
import { EncodingService } from 'src/app/modules/services/module-services/encoding.service';
import { EncodingInterface } from 'src/app/interface/modules/encoding';
import { FieldFormatInterface } from 'src/app/interface/modules/field-format';

export class IsoFieldConfigurationStateModel {
  iso8583FieldConfiguration: Iso8583FieldModel[] = [];
  iso8583SubFieldConfiguration: Iso8583SubFieldModel[] = [];
  isoConfiguration: IsoConfigurationInterface[] = [];
  fieldFormat: FieldFormatInterface[] = [];
  encoding: EncodingInterface[] = [];
  responseMessage: HttpResponseData<any> | undefined;
}

@State<IsoFieldConfigurationStateModel>({
  name: 'iso8583FieldConfigurationState',
  defaults: {
    iso8583FieldConfiguration: [],
    iso8583SubFieldConfiguration: [],
    isoConfiguration: [],
    encoding: [],
    fieldFormat: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class ISO8583FieldState {
  constructor(
    private notifierService: NotificationService,
    private isoConfigService: IsoConfigurationService,
    private encodingService: EncodingService,
    private iso8583FieldService: IsoFieldConfigurationService,
    private iso8583FieldTableService: IsoFieldConfigurationTableService
  ) {}

  @Selector()
  static ISO8583Fields(state: IsoFieldConfigurationStateModel) {
    return state.iso8583FieldConfiguration;
  }

  @Selector()
  static ISO8583SubFields(state: IsoFieldConfigurationStateModel) {
    return state.iso8583SubFieldConfiguration;
  }

  @Selector()
  static IsoConfiguration(state: IsoFieldConfigurationStateModel) {
    return state.isoConfiguration;
  }

  @Selector()
  static fieldFormat(state: IsoFieldConfigurationStateModel) {
    return state.fieldFormat;
  }

  @Selector()
  static Encoding(state: IsoFieldConfigurationStateModel) {
    return state.encoding;
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
        if (response?.responseData.length != 0) {
          this.iso8583FieldTableService.loading = false;
          this.iso8583FieldTableService.setRowData(response.responseData);
        } else {
          this.iso8583FieldTableService.setRowData(response.responseData);
          this.iso8583FieldTableService.loading = false;
        }
        ctx.setState({
          ...ctx.getState(),
          iso8583FieldConfiguration: response.responseData,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new Iso8583FieldErrorState(response.error));
      })
    );
  }

  @Action(Iso8583SubFieldGet, { cancelUncompleted: true }) getSubFieldFromState(
    ctx: StateContext<IsoFieldConfigurationStateModel>
  ) {
    let response = this.iso8583FieldService.existingData.subFieldConfigurations;
    this.iso8583FieldTableService.setSubFieldData(response);

    ctx.patchState({
      ...ctx.getState(),
      iso8583SubFieldConfiguration: response,
    });
  }

  @Action(Iso8583FieldIsoConfig, { cancelUncompleted: true })
  getIsoConfigFromState(ctx: StateContext<IsoFieldConfigurationStateModel>) {
    return this.isoConfigService.getAllIsoConfiguration().pipe(
      tap((response) => {
        let isoConfigurationParseList: IsoConfigurationInterface[] = [];

        response.responseData.forEach((x) => {
          isoConfigurationParseList.push({
            name: x.name,
            code: String(x.id),
          });
        });

        ctx.patchState({
          ...ctx.getState(),
          isoConfiguration: isoConfigurationParseList,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new Iso8583FieldErrorState(response.error));
      })
    );
  }

  @Action(Iso8583FieldEncoding, { cancelUncompleted: true })
  getEncodingFromState(ctx: StateContext<IsoFieldConfigurationStateModel>) {
    return this.encodingService.getAllEncoding().pipe(
      tap((response) => {
        let encodingParseList: EncodingInterface[] = [];

        response.responseData.forEach((x) => {
          encodingParseList.push({
            name: x.encodingType,
            code: String(x.id),
          });
        });

        ctx.patchState({
          ...ctx.getState(),
          encoding: encodingParseList,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new Iso8583FieldErrorState(response.error));
      })
    );
  }

  @Action(Iso8583FieldFormat, { cancelUncompleted: true })
  getFieldFormatFromState(ctx: StateContext<IsoFieldConfigurationStateModel>) {
    return this.iso8583FieldService.getAllFieldFormat().pipe(
      tap((response) => {
        let fieldFormatParseList: FieldFormatInterface[] = [];

        response.responseData.forEach((x) => {
          fieldFormatParseList.push({
            name: x.formatType,
            code: String(x.id),
          });
        });

        ctx.patchState({
          ...ctx.getState(),
          fieldFormat: fieldFormatParseList,
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

  @Action(Iso8583SubFieldAdd, { cancelUncompleted: true }) addSubFieldFromState(
    ctx: StateContext<IsoFieldConfigurationStateModel>,
    { payload }: Iso8583SubFieldAdd
  ) {
    this.iso8583FieldService.existingData.subFieldConfigurations.push(payload);

    ctx.patchState({
      ...ctx.getState(),
      iso8583SubFieldConfiguration: [
        ...ctx.getState().iso8583SubFieldConfiguration,
      ],
    });
    this.notifierService.successNotification(
      'Success',
      400
    )
  }

  @Action(Iso8583FieldUpdate) updateDataFromState(
    ctx: StateContext<IsoFieldConfigurationStateModel>,
    { payload }: Iso8583FieldUpdate
  ) {
    return this.iso8583FieldService.updateIsoFieldConfiguration(payload).pipe(
      tap((response) => {
        ctx.dispatch(new Iso8583FieldSuccessState(response));
        const dataList = [...ctx.getState().iso8583FieldConfiguration];

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
      successMessage?.responseMessage,
      successMessage?.responseCode
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
      errorMessage?.responseMessage,
      errorMessage?.responseCode
    );

    this.iso8583FieldTableService.loading = false;
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
