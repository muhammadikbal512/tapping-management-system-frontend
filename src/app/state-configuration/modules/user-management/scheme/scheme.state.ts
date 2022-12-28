import { Action, State, StateContext, Selector } from '@ngxs/store';
import {
  SchemeGet,
  SchemeErrorState,
  SchemeSuccessState,
} from './scheme.action';
import { Injectable } from '@angular/core';
import { SchemeModel } from 'src/app/model/modules-model/scheme.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { SchemeServiceService } from 'src/app/modules/services/module-services/user-management/scheme-service.service';
import { SchemeTableService } from 'src/app/modules/services/module-services/user-management/scheme-table.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class SchemeStateModel {
  Schemes: SchemeModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<SchemeStateModel>({
  name: 'Scheme',
  defaults: {
    Schemes: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class SchemeState {
  constructor(
    private schemeService: SchemeServiceService,
    private schemeTableService: SchemeTableService,
    private notifierService: NotificationService
  ) {}
  @Selector()
  static Schemes(state: SchemeStateModel) {
    return state.Schemes;
  }

  @Selector()
  static responseMessage(state: SchemeStateModel) {
    return state.responseMessage;
  }

  @Action(SchemeGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<SchemeStateModel>
  ) {
    return this.schemeService.getAllScheme().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.schemeTableService.loading = false;

          this.schemeTableService.setRowData(response);
        } else {
          this.schemeTableService.loading = false;

          this.schemeTableService.setRowData(response);
        }

        ctx.patchState({
          ...ctx.getState(),
          Schemes: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new SchemeErrorState(response.error));
      })
    );
  }

  @Action(SchemeSuccessState) ifStateSuccess(
    ctx: StateContext<SchemeStateModel>,
    { successMessage }: SchemeSuccessState
  ) {
    this.notifierService.successNotification(
      successMessage.message,
      successMessage.httpStatusCode
    );

    this.schemeService.onGetAllScheme();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(SchemeErrorState) ifStateError(
    ctx: StateContext<SchemeStateModel>,
    { errorMessage }: SchemeErrorState
  ) {
    this.schemeTableService.loading = false;
    this.notifierService.errorNotification(
      errorMessage.message,
      errorMessage.status
    );

    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
