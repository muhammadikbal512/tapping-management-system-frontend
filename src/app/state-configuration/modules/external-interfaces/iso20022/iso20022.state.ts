import { Action, State, StateContext, Selector } from '@ngxs/store';
import {
  Iso20022Get,
  Iso20022Delete,
  Iso20022Update,
  Iso20022SuccessState,
  Iso20022ErrorState,
  Iso20022Add,
} from './iso20022.action';
import { Injectable } from '@angular/core';
import { Iso20022Model } from 'src/app/model/modules-model/iso20022.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Iso20022Service } from 'src/app/modules/services/module-services/external-interfaces/iso20022.service';
import { Iso20022TableService } from 'src/app/modules/services/module-services/external-interfaces/iso20022-table.service';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';

export class Iso20022StateModel {
  ISO20022: Iso20022Model[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<Iso20022StateModel>({
  name: 'Iso20022',
  defaults: {
    ISO20022: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class Iso20022State {
  constructor(
    private iso20022Service: Iso20022Service,
    private iso20022TableService: Iso20022TableService,
    private notifierService: NotificationService
  ) {}

  @Selector()
  public ISO20022(state: Iso20022StateModel) {
    return state.ISO20022;
  }

  @Selector()
  public responseMessage(state: Iso20022StateModel) {
    return state.responseMessage;
  }

  @Action(Iso20022Get, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<Iso20022StateModel>
  ) {
    return this.iso20022Service.getAllIso20022().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.iso20022TableService.loading = false;
          this.iso20022TableService.setRowData(response);
        } else {
          this.iso20022TableService.setRowData(response);
          this.iso20022TableService.loading = false;
        }

        ctx.patchState({
          ...ctx.getState(),
          ISO20022: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new Iso20022ErrorState(response.error));
      })
    );
  }

  @Action(Iso20022Add, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<Iso20022StateModel>,
    { payload }: Iso20022Add
  ) {
    return this.iso20022Service.addIso20022(payload).pipe(
      tap((response) => {
        ctx.dispatch(new Iso20022SuccessState(response));
        ctx.patchState({
          ...ctx.getState(),
          ISO20022: [...ctx.getState().ISO20022],
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new Iso20022ErrorState(response.error));
      })
    );
  }

  @Action(Iso20022Delete, { cancelUncompleted: true }) deleteDataFromState(
    ctx: StateContext<Iso20022StateModel>,
    { id }: Iso20022Delete
  ) {
    return this.iso20022Service.deleteIso20022(id).pipe(
      tap((response) => {
        ctx.dispatch(new Iso20022SuccessState(response));
        const filteredData = ctx
          .getState()
          .ISO20022.filter((data) => data.id !== id);
        ctx.patchState({
          ...ctx.getState(),
          ISO20022: filteredData,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new Iso20022SuccessState(response.error));
      })
    );
  }

  @Action(Iso20022Update, { cancelUncompleted: true }) updateDataFromState(
    ctx: StateContext<Iso20022StateModel>,
    { id, payload, stateData }: Iso20022Update
  ) {
    return this.iso20022Service.updateIso20022(payload).pipe(
      tap((response) => {
        ctx.dispatch(new Iso20022SuccessState(response));
        const dataList = [...ctx.getState().ISO20022];
        const updatedDataIndex = dataList.findIndex((data) => data.id === id);
        dataList[updatedDataIndex] = stateData;
        ctx.patchState({
          ...ctx.getState(),
          ISO20022: dataList,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new Iso20022ErrorState(response.error));
      })
    );
  }

  @Action(Iso20022SuccessState) ifStateSuccess(
    ctx: StateContext<Iso20022StateModel>,
    { successMessage }: Iso20022SuccessState
  ) {
    if (this.iso20022Service.getCurrentStatusDialog().length != 0) {
      this.iso20022Service.closeDialog();
    }

    this.notifierService.successNotification(
      successMessage.message,
      successMessage.httpStatusCode
    );
    this.iso20022Service.onGetAllIso20022();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(Iso20022ErrorState) ifStateError(
    ctx: StateContext<Iso20022StateModel>,
    { errorMessage }: Iso20022ErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage.message,
      errorMessage.httpStatusCode
    );
    this.iso20022TableService.loading = false;

    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
