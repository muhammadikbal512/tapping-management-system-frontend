import {
  RolesGet,
  RolesAdd,
  RolesDelete,
  RolesErrorState,
  RolesSuccessState,
  RolesUpdate,
  RolesWithUserGet,
  AuthoritiesGet,
} from './roles.action';
import { RolesModel } from 'src/app/model/modules-model/roles.model';
import { RolesService } from 'src/app/modules/services/module-services/user-management/roles.service';
import { RolesTableService } from 'src/app/modules/services/module-services/user-management/roles-table.service';
import { State, StateContext, Action, Selector } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { AuthoritiesService } from 'src/app/modules/services/module-services/authorities/authorities.service';
import { AuthoritiesInterface } from 'src/app/interface/modules/authorities';

export class RolesStateModel {
  Roles: RolesModel[] = [];
  RolesWithUsers: RolesModel[] = [];
  Authorities: AuthoritiesInterface[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<RolesStateModel>({
  name: 'roles',
  defaults: {
    Roles: [],
    RolesWithUsers: [],
    Authorities: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class RolesState {
  constructor(
    private rolesService: RolesService,
    private rolesTableService: RolesTableService,
    private notifierService: NotificationService,
    private authoritiesService: AuthoritiesService
  ) {}

  @Selector()
  static Roles(state: RolesStateModel) {
    return state.Roles;
  }

  @Selector()
  static Authorities(state: RolesStateModel) {
    return state.Authorities;
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
        if (response?.length != 0) {
          this.rolesTableService.loading = false;

          this.rolesTableService.setRowData(response);
        } else {
          this.rolesTableService.loading = false;

          this.rolesTableService.setRowData(response);
        }
        ctx.patchState({
          ...ctx.getState(),
          Roles: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new RolesErrorState(response.error));
      })
    );
  }

  @Action(RolesWithUserGet, { cancelUncompleted: true }) getUserWithRoles(
    ctx: StateContext<RolesStateModel>,
    { name }: RolesWithUserGet
  ) {
    return this.rolesService.getRolesWithUser(name).pipe(
      tap((response) => {
        ctx.patchState({
          ...ctx.getState(),
          RolesWithUsers: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new RolesErrorState(response.error));
      })
    );
  }

  @Action(AuthoritiesGet, { cancelUncompleted: true }) getAuthoritiesFromState(
    ctx: StateContext<RolesStateModel>
  ) {
    return this.authoritiesService.getAllAuthorities().pipe(
      tap((response) => {
        let authoritiesParseList: AuthoritiesInterface[] = [];
        response.forEach((x) => {
          authoritiesParseList.push({
            code: String(x.id),
            name: x.authorityName,
          });
        });

        ctx.patchState({
          ...ctx.getState(),
          Authorities: authoritiesParseList,
        });
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
    this.rolesTableService.loading = false;
    this.rolesService.onGetAllRoles();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(RolesErrorState) ifStateError(
    ctx: StateContext<RolesStateModel>,
    { errorMessage }: RolesErrorState
  ) {
    this.rolesTableService.loading = false;
    if (this.rolesService.getCurrentStatusDialog().length != 0) {
      this.rolesService.closeDialog();
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
