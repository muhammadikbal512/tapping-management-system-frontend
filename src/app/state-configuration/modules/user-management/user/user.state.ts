import {
  UserGet,
  UserDelete,
  UserErrorState,
  UserSuccessState,
  UserAdd,
  UserUpdate,
  UserResetPassword,
  UserGetRole,
  UserGetType,
  UserGetInstitution,
  UserGetUserGroup,
} from './user.action';
import { UserService } from 'src/app/modules/services/module-services/user-management/user.service';
import { UserModel } from 'src/app/model/user-model/user.model';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserTableService } from 'src/app/modules/services/module-services/user-management/user-table.service';
import { RoleInterface } from 'src/app/interface/modules/role-interface';
import { TypeInterface } from 'src/app/interface/modules/type';
import { InstitutionInterface } from 'src/app/interface/modules/institution';
import { UsergroupInterface } from 'src/app/interface/modules/usergroup';
import { RolesService } from 'src/app/modules/services/module-services/user-management/roles.service';
import { TypeService } from 'src/app/modules/services/module-services/user-management/type.service';
import { InstitutionService } from 'src/app/modules/services/module-services/user-management/institution.service';
import { UserGroupService } from 'src/app/modules/services/module-services/user-management/user-group.service';

export class UserStateModel {
  User: UserModel[] = [];
  Role: RoleInterface[] = [];
  Type: TypeInterface[] = [];
  Institution: InstitutionInterface[] = [];
  UserGroup: UsergroupInterface[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<UserStateModel>({
  name: 'User',
  defaults: {
    User: [],
    Role: [],
    Type: [],
    Institution: [],
    UserGroup: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class UserState {
  constructor(
    private notifierService: NotificationService,
    private userService: UserService,
    private userTableService: UserTableService,
    private roleService: RolesService,
    private typeService: TypeService,
    private institutionService: InstitutionService,
    private userGroupService: UserGroupService
  ) {}

  @Selector()
  static User(state: UserStateModel) {
    return state.User;
  }

  @Selector()
  static Role(state: UserStateModel) {
    return state.Role;
  }

  @Selector()
  static Type(state: UserStateModel) {
    return state.Type;
  }

  @Selector()
  static Institution(state: UserStateModel) {
    return state.Institution;
  }

  @Selector()
  static UserGroup(state: UserStateModel) {
    return state.UserGroup;
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
          this.userTableService.loading = false;

          this.userTableService.setRowData(response);
        } else {
          this.userTableService.loading = false;

          this.userTableService.setRowData(response);
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

  @Action(UserGetRole, { cancelUncompleted: true }) getRoleFromUser(
    ctx: StateContext<UserStateModel>
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
          Role: roleParseList,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new UserErrorState(response.error));
      })
    );
  }

  @Action(UserGetType, { cancelUncompleted: true }) getTypeFromUser(
    ctx: StateContext<UserStateModel>
  ) {
    return this.typeService.getAllType().pipe(
      tap((response) => {
        let typeParseList: TypeInterface[] = [];
        response.forEach((x) => {
          typeParseList.push({
            name: x.typeName,
            code: String(x.id),
          });
        });

        ctx.patchState({
          ...ctx.getState(),
          Type: typeParseList,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new UserErrorState(response.error));
      })
    );
  }

  @Action(UserGetInstitution, { cancelUncompleted: true })
  getInstitutionFromUser(ctx: StateContext<UserStateModel>) {
    return this.institutionService.getAllInstitution().pipe(
      tap((response) => {
        let institutionParseList: InstitutionInterface[] = [];
        response.forEach((x) => {
          institutionParseList.push({
            name: x.institutionName,
            code: String(x.id),
          });
        });

        ctx.patchState({
          ...ctx.getState(),
          Institution: institutionParseList,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new UserErrorState(response.error));
      })
    );
  }

  @Action(UserGetUserGroup, { cancelUncompleted: true }) getUserGroupFromUser(
    ctx: StateContext<UserStateModel>
  ) {
    return this.userGroupService.getAllUserGroup().pipe(
      tap((response) => {
        let userGroupParseList: UsergroupInterface[] = [];
        response.forEach((x) => {
          userGroupParseList.push({
            name: x.groupName,
            code: String(x.id),
          });
        });

        ctx.patchState({
          ...ctx.getState(),
          UserGroup: userGroupParseList,
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
    this.userTableService.loading = false;
    this.notifierService.errorNotification(
      errorMessage?.message,
      errorMessage?.status
    );

    if (this.userService.getCurrentStatusDialog().length != 0) {
      this.userService.closeDialog();
    }
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
