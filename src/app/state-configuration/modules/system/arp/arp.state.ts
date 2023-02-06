import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { AppsParametersModel } from 'src/app/model/modules-model/apps-parameters.model';
import { AppParametersTableService } from 'src/app/modules/services/module-services/system/app-parameters-table.service';
import { AppParametersService } from 'src/app/modules/services/module-services/system/app-parameters.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import {
  ArpGet,
  ArpSuccessState,
  ArpErrorState,
  ArpDelete,
} from './arp.action';

export class ArpStateModel {
  Arps: AppsParametersModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<ArpStateModel>({
  name: 'Arp',
  defaults: {
    Arps: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class ArpState {
  constructor(
    private notifierService: NotificationService,
    private arpService: AppParametersService,
    private arpTableService: AppParametersTableService
  ) {}

  @Selector()
  public Arp(state: ArpStateModel) {
    return state.Arps;
  }

  @Selector()
  public responseMessage(state: ArpStateModel) {
    return state.responseMessage;
  }

  @Action(ArpGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<ArpStateModel>
  ) {
    return this.arpService.getArpAll().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.arpTableService.loading = false;
          this.arpTableService.setRowData(response);
        } else {
          this.arpTableService.loading = false;
          this.arpTableService.setRowData(response);
        }

        ctx.patchState({
          ...ctx.getState(),
          Arps: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new ArpErrorState(response.error));
      })
    );
  }

  @Action(ArpSuccessState) ifStateSuccess(
    ctx: StateContext<ArpStateModel>,
    { successMessage }: ArpSuccessState
  ) {
    this.notifierService.successNotification(
      successMessage.message,
      successMessage.httpStatusCode
    );

    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(ArpErrorState) ifStateError(
    ctx: StateContext<ArpStateModel>,
    { errorMessage }: ArpErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage.message,
      errorMessage.status
    );

    this.arpTableService.loading = false;

    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
