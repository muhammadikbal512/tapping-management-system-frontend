import {
  XmlConfigGet,
  XmlConfigSuccessState,
  XmlConfigErrorState,
} from './xml-config.action';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { XmlConfigModel } from 'src/app/model/modules-model/xml-config.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { XmlService } from 'src/app/modules/services/module-services/external-interfaces/xml.service';
import { XmlTableService } from 'src/app/modules/services/module-services/external-interfaces/xml-table.service';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class XmlConfigStateModel {
  XmlConfigs: XmlConfigModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<XmlConfigStateModel>({
  name: 'XmlConfiguration',
  defaults: {
    XmlConfigs: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class XmlConfigState {
  constructor(
    private xmlService: XmlService,
    private notifierService: NotificationService,
    private xmlTableService: XmlTableService
  ) {}

  @Selector()
  public XmlConfiguration(state: XmlConfigStateModel) {
    return state.XmlConfigs;
  }

  @Selector()
  public responseMessage(state: XmlConfigStateModel) {
    return state.responseMessage;
  }

  @Action(XmlConfigGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<XmlConfigStateModel>
  ) {
    return this.xmlService.getAllXml().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.xmlTableService.loading = false;
          this.xmlTableService.setRowData(response);
        } else {
          this.xmlTableService.setRowData(response);
          this.xmlTableService.loading = false;
        }

        ctx.patchState({
          ...ctx.getState(),
          XmlConfigs: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new XmlConfigErrorState(response.error));
      })
    );
  }

  @Action(XmlConfigSuccessState) ifStateSuccess(
    ctx: StateContext<XmlConfigStateModel>,
    { successMessage }: XmlConfigSuccessState
  ) {
    this.notifierService.successNotification(
      successMessage.message,
      successMessage.httpStatusCode
    );

    this.xmlService.onGetAllXml();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(XmlConfigErrorState) ifStateError(
    ctx: StateContext<XmlConfigStateModel>,
    { errorMessage }: XmlConfigErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage.message,
      errorMessage.httpStatusCode
    );

    this.xmlTableService.loading = false;

    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
