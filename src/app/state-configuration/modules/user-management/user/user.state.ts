import {
  UserGet,
  UserDelete,
  UserErrorState,
  UserSuccessState,
  UserAdd,
  UserUpdate,
  UserResetPassword,
  UserGetRoles,
} from './user.action';
import { UserTableService } from 'src/app/modules/services/module-services/user-table.service';
import { UserService } from 'src/app/modules/services/module-services/user.service';
import { UserModel } from 'src/app/model/user-model/user.model';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RolesService } from 'src/app/modules/services/module-services/roles.service';

import { RolesModel } from 'src/app/model/modules-model/roles.model';
import { RoleInterface } from 'src/app/interface/modules/role-interface';

export class UserStateModel {
  User: UserModel[] = [];
  Roles: RolesModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<UserStateModel>({
  name: 'User',
  defaults: {
    User: [],
    Roles: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class UserState {
  constructor(
    private notifierService: NotificationService,
    private userService: UserService,
    private userTableService: UserTableService,
    private roleService: RolesService
  ) {}

  @Selector()
  static User(state: UserStateModel) {
    return state.User;
  }

  @Selector()
  static Roles(state: UserStateModel) {
    return state.Roles;
  }

  @Selector()
  static responseMessage(state: UserStateModel) {
    return state.responseMessage;
  }

  @Action(UserGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<UserStateModel>
  ) {
    return this.userService.getAllUsers().pipe(
      tap((response) => {
        if (response?.length != 0) {
          this.userTableService.hideTableLoading();
          this.userTableService.setRowData(response);
        } else {
          this.userTableService.setRowData(response);
          this.userTableService.showNoRowData();
        }
        ctx.setState({
          ...ctx.getState(),
          User: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        console.log(response);
        return ctx.dispatch(new UserErrorState(response.error));
      })
    );
  }

  @Action(UserGetRoles, { cancelUncompleted: true }) getRolesFromState(
    ctx: StateContext<UserGetRoles>
  ) {
    return this.roleService.getAllRoles().pipe(
      tap((response) => {
        let roleParseList: RoleInterface[] = [];
        response.forEach((x) => {
          roleParseList.push({
            name: x.roleName,
            code: String(x.id),
          });
        });

        ctx.patchState({
          ...ctx.getState(),
          Roles: roleParseList,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new UserErrorState(response.error));
      })
    );
  }

  @Action(UserAdd, { cancelUncompleted: true })
  addDataFromState(ctx: StateContext<UserStateModel>, { payload }: UserAdd) {
    return this.userService.addUser(payload).pipe(
      tap((response) => {
        ctx.dispatch(new UserSuccessState(response));
        ctx.patchState({
          ...ctx.getState(),
          User: [...ctx.getState().User],
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new UserErrorState(response.error));
      })
    );
  }

  @Action(UserDelete, { cancelUncompleted: true })
  deleteDataFromState(ctx: StateContext<UserStateModel>, { id }: UserDelete) {
    return this.userService.deleteUser(id).pipe(
      tap((response) => {
        ctx.dispatch(new UserSuccessState(response));
        const filteredData = ctx
          .getState()
          .User.filter((data) => data.id !== id);
        ctx.setState({
          ...ctx.getState(),
          User: filteredData,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new UserErrorState(response.error));
      })
    );
  }

  @Action(UserResetPassword, { cancelUncompleted: true })
  resetPasswordFromState(
    ctx: StateContext<UserStateModel>,
    { email }: UserResetPassword
  ) {
    return this.userService.resetPasswordUser(email).pipe(
      tap((response) => {
        ctx.dispatch(new UserSuccessState(response));
        ctx.setState({
          ...ctx.getState(),
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new UserErrorState(response.error));
      })
    );
  }

  @Action(UserUpdate, { cancelUncompleted: true })
  updateDataFromState(
    ctx: StateContext<UserStateModel>,
    { id, payload, stateData }: UserUpdate
  ) {
    return this.userService.updateUser(payload).pipe(
      tap((response) => {
        ctx.dispatch(new UserSuccessState(response));
        const dataList = [...ctx.getState().User];
        const updatedDataIndex = dataList.findIndex((x) => x.id === id);
        dataList[updatedDataIndex] = stateData;
        ctx.setState({
          ...ctx.getState(),
          User: dataList,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new UserErrorState(response.error));
      })
    );
  }

  @Action(UserSuccessState)
  ifStateSuccess(
    ctx: StateContext<UserStateModel>,
    { successMessage }: UserSuccessState
  ) {
    if (this.userService.getCurrentStatusDialog().length != 0) {
      this.userService.closeDialog();
    }
    this.notifierService.successNotification(
      successMessage?.message,
      successMessage?.httpStatusCode
    );
    this.userService.onGetAllUser();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(UserErrorState)
  ifStateIsError(
    ctx: StateContext<UserStateModel>,
    { errorMessage }: UserErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage?.message,
      errorMessage?.status
    );
    if (this.userTableService.gridApi.getRenderedNodes().length == 0) {
      this.userTableService.showNoRowData();
    } else {
      this.userTableService.hideTableLoading();
    }
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
