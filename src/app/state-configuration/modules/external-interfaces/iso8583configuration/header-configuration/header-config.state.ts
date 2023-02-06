import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  HeaderConfigGet,
  HeaderConfigAdd,
  HeaderConfigDelete,
  HeaderConfigErrorState,
  HeaderConfigSuccessState,
  HeaderConfigUpdate,
  HeaderIsoConfigGet,
  HeaderEncodingGet,
  HeaderFieldFormatGet,
} from './header-config.action';
import { HeaderConfigurationModel } from 'src/app/model/modules-model/header-configuration.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { HeaderConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/header-configuration.service';
import { HeaderConfigurationTableService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/header-configuration-table.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { IsoConfigurationInterface } from 'src/app/interface/modules/iso-configuration-interface';
import { IsoConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/iso-configuration.service';
import { EncodingInterface } from 'src/app/interface/modules/encoding';
import { EncodingService } from 'src/app/modules/services/module-services/external-interfaces/encoding.service';
import { IsoFieldConfigurationService } from 'src/app/modules/services/module-services/external-interfaces/iso8583-configuration/iso-field-configuration.service';
import { FieldFormatInterface } from 'src/app/interface/modules/field-format';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';

export class HeaderConfigStateModel {
  HeaderConfigurations: HeaderConfigurationModel[] = [];
  IsoConfigurations: IsoConfigurationInterface[] = [];
  Encodings: EncodingInterface[] = [];
  fieldFormats: FieldFormatInterface[] = [];
  responseMessage: HttpResponseData<any> | undefined;
}

@State<HeaderConfigStateModel>({
  name: 'HeaderConfigurations',
  defaults: {
    HeaderConfigurations: [],
    IsoConfigurations: [],
    Encodings: [],
    fieldFormats: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class HeaderConfigState {
  constructor(
    private headerConfigService: HeaderConfigurationService,
    private headerConfigTableService: HeaderConfigurationTableService,
    private encodingService: EncodingService,
    private notifierService: NotificationService,
    private isoConfigService: IsoConfigurationService,
    private isoFieldService: IsoFieldConfigurationService
  ) {}

  @Selector()
  static headerConfigs(state: HeaderConfigStateModel) {
    return state.HeaderConfigurations;
  }

  @Selector()
  static IsoConfigurations(state: HeaderConfigStateModel) {
    return state.IsoConfigurations;
  }

  @Selector()
  static FieldFormats(state: HeaderConfigStateModel) {
    return state.fieldFormats;
  }

  @Selector()
  static Encodings(state: HeaderConfigStateModel) {
    return state.Encodings;
  }

  @Selector()
  static responseMessage(state: HeaderConfigStateModel) {
    return state.responseMessage;
  }

  @Action(HeaderConfigGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<HeaderConfigStateModel>
  ) {
    return this.headerConfigService.getAllHeaderConfigs().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.headerConfigTableService.loading = false;
          this.headerConfigTableService.setRowData(response);
        } else {
          this.headerConfigTableService.loading = false;
          this.headerConfigTableService.setRowData(response);
        }

        ctx.patchState({
          ...ctx.getState(),
          HeaderConfigurations: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new HeaderConfigErrorState(response.error));
      })
    );
  }

  @Action(HeaderIsoConfigGet, { cancelUncompleted: true })
  getIsoConfigFromState(ctx: StateContext<HeaderConfigStateModel>) {
    return this.isoConfigService.getAllIsoConfiguration().pipe(
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
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new HeaderConfigErrorState(response.error));
      })
    );
  }

  @Action(HeaderEncodingGet, { cancelUncompleted: true }) getEncodingFromState(
    ctx: StateContext<HeaderConfigStateModel>
  ) {
    return this.encodingService.getAllEncoding().pipe(
      tap((response) => {
        let encodingParseList: EncodingInterface[] = [];

        response.responseData.forEach((x) => {
          encodingParseList.push({
            code: String(x.id),
            name: x.encodingType,
          });
        });

        ctx.patchState({
          ...ctx.getState(),
          Encodings: encodingParseList,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new HeaderConfigErrorState(response.error));
      })
    );
  }

  @Action(HeaderFieldFormatGet, { cancelUncompleted: true })
  getFieldFormatFromState(ctx: StateContext<HeaderConfigStateModel>) {
    return this.isoFieldService.getAllFieldFormat().pipe(
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
          fieldFormats: fieldFormatParseList,
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
    { payload }: HeaderConfigUpdate
  ) {
    return this.headerConfigService.updateHeaderConfig(payload).pipe(
      tap((response) => {
        ctx.dispatch(new HeaderConfigSuccessState(response));
        const dataList = [...ctx.getState().HeaderConfigurations];
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
      successMessage?.responseMessage,
      successMessage?.responseCode
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
      errorMessage?.responseCode,
      errorMessage?.responseMessage
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
