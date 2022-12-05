import {
  InstitutionAdd,
  InstitutionDelete,
  InstitutionGet,
  InstitutionStateError,
  InstitutionStateSuccess,
  InstitutionUpdate,
  InstitutionUser,
} from './institution.action';
import { Injectable } from '@angular/core';
import { State, StateContext, Action, Selector } from '@ngxs/store';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { InstitutionModel } from 'src/app/model/modules-model/institution.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { InstitutionService } from 'src/app/modules/services/module-services/institution.service';
import { InstitutionTableService } from 'src/app/modules/services/module-services/institution-table.service';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class InstitutionStateModel {
  institutions: InstitutionModel[] = [];
  institutionWithUsers: InstitutionModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<InstitutionStateModel>({
  name: 'Institutions',
  defaults: {
    institutions: [],
    institutionWithUsers: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class InstitutionState {
  constructor(
    private institutionService: InstitutionService,
    private institutionTableService: InstitutionTableService,
    private notifierService: NotificationService
  ) {}

  @Selector()
  static institutions(state: InstitutionStateModel) {
    return state.institutions;
  }

  @Selector()
  static institutionUsers(state: InstitutionStateModel) {
    return state.institutionWithUsers;
  }

  @Selector()
  static responseMessage(state: InstitutionStateModel) {
    return state.responseMessage;
  }

  @Action(InstitutionGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<InstitutionStateModel>
  ) {
    return this.institutionService.getAllInstitution().pipe(
      tap((response) => {
        if (response?.length != 0) {
          this.institutionTableService.loading = false;
          this.institutionTableService.setRowData(response);
        } else {
          this.institutionTableService.loading = false;
          this.institutionTableService.setRowData(response);
        }
        ctx.patchState({
          ...ctx.getState(),
          institutions: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new InstitutionStateError(response.error));
      })
    );
  }

  @Action(InstitutionUser, { cancelUncompleted: true })
  addInstitutionUserFromState(
    ctx: StateContext<InstitutionStateModel>,
    { name }: InstitutionUser
  ) {
    return this.institutionService.getInstitutionWithUser(name).pipe(
      tap((response) => {
        ctx.patchState({
          ...ctx.getState(),
          institutionWithUsers: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new InstitutionStateError(response.error));
      })
    );
  }

  @Action(InstitutionAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<InstitutionStateModel>,
    { payload }: InstitutionAdd
  ) {
    return this.institutionService.addInstitution(payload).pipe(
      tap((response) => {
        ctx.dispatch(new InstitutionStateSuccess(response));
        ctx.patchState({
          ...ctx.getState(),
          institutions: [...ctx.getState().institutions],
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new InstitutionStateError(response.error));
      })
    );
  }

  @Action(InstitutionDelete, { cancelUncompleted: true }) deleteDataFromState(
    ctx: StateContext<InstitutionStateModel>,
    { id }: InstitutionDelete
  ) {
    return this.institutionService.deleteInstitution(id).pipe(
      tap((response) => {
        ctx.dispatch(new InstitutionStateSuccess(response));
        const filteredData = ctx
          .getState()
          .institutions.filter((data) => data.id !== id);

        ctx.patchState({
          ...ctx.getState(),
          institutions: filteredData,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new InstitutionStateError(response.error));
      })
    );
  }

  @Action(InstitutionUpdate, { cancelUncompleted: true }) updateDataFromState(
    ctx: StateContext<InstitutionStateModel>,
    { id, payload, stateData }: InstitutionUpdate
  ) {
    return this.institutionService.updateInstitution(payload).pipe(
      tap((response) => {
        ctx.dispatch(new InstitutionStateSuccess(response));
        const dataList = [...ctx.getState().institutions];
        const filteredData = dataList.findIndex((x) => x.id === id);
        dataList[filteredData] = stateData;

        ctx.patchState({
          ...ctx.getState(),
          institutions: dataList,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new InstitutionStateError(response.error));
      })
    );
  }

  @Action(InstitutionStateSuccess) ifStateSuccess(
    ctx: StateContext<InstitutionStateModel>,
    { successMessage }: InstitutionStateSuccess
  ) {
    if (this.institutionService.getCurrentStatusDialog().length != 0) {
      this.institutionService.closeDialog();
    }
    this.notifierService.successNotification(
      successMessage.message,
      successMessage.httpStatusCode
    );

    this.institutionService.onGetAllInstitution();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(InstitutionStateError) ifStateError(
    ctx: StateContext<InstitutionStateModel>,
    { errorMessage }: InstitutionStateError
  ) {
    this.notifierService.errorNotification(
      errorMessage?.message,
      errorMessage?.httpStatusCode
    );

    if (this.institutionService.getCurrentStatusDialog().length != 0) {
      this.institutionService.closeDialog();
    }

    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
