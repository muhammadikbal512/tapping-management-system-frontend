import {
  RolesGet,
  RolesAdd,
  RolesDelete,
  RolesErrorState,
  RolesSuccessState,
  RolesUpdate,
} from './roles.action';
import { RolesModel } from 'src/app/model/modules-model/roles.model';
import { RolesService } from 'src/app/modules/services/module-services/roles.service';
import { RolesTableService } from 'src/app/modules/services/module-services/roles-table.service';
import { State, StateContext, Action, Selector } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';

export class RolesStateModel {
  Roles: RolesModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<RolesStateModel>({
  name: 'roles',
  defaults: {
    Roles: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class RolesState {
  constructor(
    private rolesService: RolesService,
    private rolesTableService: RolesTableService,
    private notifierService: NotificationService
  ) {}

  @Selector()
  static Roles(state: RolesStateModel) {
    return state.Roles;
  }

  @Selector()
  static ResponseMessage(state: RolesStateModel) {
    return state.responseMessage;
  }

  @Action(RolesGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<RolesStateModel>
  ) {
    return this.rolesService.getAllRoles().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.rolesTableService.hideTableLoading();
          this.rolesTableService.setRowData(response);
        } else {
          this.rolesTableService.setRowData(response);
          this.rolesTableService.showNoRowData();
        }
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new RolesErrorState(response.error));
      })
    );
  }

  @Action(RolesAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<RolesStateModel>,
    { payload }: RolesAdd
  ) {
    return this.rolesService.addRoles(payload).pipe(
      tap((response) => {
        ctx.dispatch(new RolesSuccessState(response));

        ctx.patchState({
          ...ctx.getState(),
          Roles: [...ctx.getState().Roles],
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new RolesErrorState(response.error));
      })
    );
  }

  @Action(RolesDelete, { cancelUncompleted: true }) deleteDataFromState(
    ctx: StateContext<RolesStateModel>,
    { id }: RolesDelete
  ) {
    return this.rolesService.deleteRole(id).pipe(
      tap((response) => {
        ctx.dispatch(new RolesSuccessState(response));

        const filteredData = ctx
          .getState()
          .Roles.filter((data) => data.id !== id);

        ctx.patchState({
          ...ctx.getState(),
          Roles: filteredData,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new RolesErrorState(response.error));
      })
    );
  }

  @Action(RolesUpdate, { cancelUncompleted: true }) updateDataFromState(
    ctx: StateContext<RolesStateModel>,
    { id, payload, stateData }: RolesUpdate
  ) {
    return this.rolesService.updateRole(payload).pipe(
      tap((response) => {
        ctx.dispatch(new RolesSuccessState(response));

        const dataList = [...ctx.getState().Roles];
        const updatedDataIndex = dataList.findIndex((x) => x.id === id);
        dataList[updatedDataIndex] = stateData;
        ctx.patchState({
          ...ctx.getState(),
          Roles: dataList,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new RolesErrorState(response.error));
      })
    );
  }

  @Action(RolesSuccessState) ifStateSuccess(
    ctx: StateContext<RolesStateModel>,
    { successMessage }: RolesSuccessState
  ) {
    if (this.rolesService.getCurrentStatusDialog().length != 0) {
      this.rolesService.closeDialog();
    }
    this.notifierService.successNotification(
      successMessage.message,
      successMessage.httpStatusCode
    );
    this.rolesService.onGetAllRoles();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(RolesErrorState) ifStateError(
    ctx: StateContext<RolesStateModel>,
    { errorMessage }: RolesErrorState
  ) {
    if (this.rolesTableService.gridApi.getRenderedNodes().length == 0) {
      this.rolesTableService.showNoRowData();
    } else {
      this.rolesTableService.hideTableLoading();
    }

    this.notifierService.errorNotification(
      errorMessage.message,
      errorMessage.httpStatusCode
    );

    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
