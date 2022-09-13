import {
  UserGroupGet,
  UserGroupAdd,
  UserGroupDelete,
  UserGroupError,
  UserGroupSuccess,
  UserGroupUpdate,
} from './user-group.action';
import { Action, StateContext, State, Selector } from '@ngxs/store';
import { UserGroupTableService } from 'src/app/modules/services/module-services/user-group-table.service';
import { UserGroupService } from 'src/app/modules/services/module-services/user-group.service';
import { Injectable } from '@angular/core';
import { UserGroupModel } from 'src/app/model/modules-model/user-group.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class UserGroupStateModel {
  UserGroups: UserGroupModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<UserGroupStateModel>({
  name: 'UserGroup',
  defaults: {
    UserGroups: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class UserGroupState {
  constructor(
    private userGroupTableService: UserGroupTableService,
    private userGroupService: UserGroupService,
    private notifierService: NotificationService
  ) {}

  @Selector()
  static UserGroups(state: UserGroupStateModel) {
    return state.UserGroups;
  }

  @Selector()
  static responseMessage(state: UserGroupStateModel) {
    return state.responseMessage;
  }

  @Action(UserGroupGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<UserGroupStateModel>
  ) {
    return this.userGroupService.getAllUserGroup().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.userGroupTableService.hideTableLoading();
          this.userGroupTableService.setRowData(response);
        } else {
          this.userGroupTableService.setRowData(response);
          this.userGroupTableService.showNoRowData();
        }
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new UserGroupError(response.error));
      })
    );
  }

  @Action(UserGroupAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<UserGroupStateModel>,
    { payload }: UserGroupAdd
  ) {
    return this.userGroupService.addUserGroup(payload).pipe(
      tap((response) => {
        ctx.dispatch(new UserGroupSuccess(response));

        ctx.patchState({
          ...ctx.getState(),
          UserGroups: [...ctx.getState().UserGroups],
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new UserGroupError(response.error));
      })
    );
  }

  @Action(UserGroupDelete, { cancelUncompleted: true }) deleteDataFromState(
    ctx: StateContext<UserGroupStateModel>,
    { id }: UserGroupDelete
  ) {
    return this.userGroupService.deleteUserGroup(id).pipe(
      tap((response) => {
        ctx.dispatch(new UserGroupSuccess(response));
        const filteredData = ctx
          .getState()
          .UserGroups.filter((data) => data.id !== id);

        ctx.patchState({
          ...ctx.getState(),
          UserGroups: filteredData,
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new UserGroupError(response.error));
      })
    );
  }

  @Action(UserGroupUpdate, { cancelUncompleted: true }) updateDataFromState(
    ctx: StateContext<UserGroupStateModel>,
    { id, payload, stateData }: UserGroupUpdate
  ) {
    return this.userGroupService.updateUserGroup(payload).pipe(
      tap((response) => {
        ctx.dispatch(new UserGroupSuccess(response));

        const dataList = [...ctx.getState().UserGroups];
        const updatedDataIndex = dataList.findIndex((x) => x.id === id);
        dataList[updatedDataIndex] = stateData;

        ctx.patchState({
          ...ctx.getState(),
          UserGroups: dataList,
          responseMessage: response,
        });
      })
    );
  }

  @Action(UserGroupSuccess) ifStateSuccess(
    ctx: StateContext<UserGroupStateModel>,
    { successMessage }: UserGroupSuccess
  ) {
    this.notifierService.successNotification(
      successMessage.message,
      successMessage.status
    );

    this.userGroupService.onGetAllUserGroup();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(UserGroupError) ifStateError(
    ctx: StateContext<UserGroupStateModel>,
    { errorMessage }: UserGroupError
  ) {
    this.notifierService.errorNotification(
      errorMessage.message,
      errorMessage.status
    );
    if (this.userGroupTableService.gridApi.getRenderedNodes().length == 0) {
      this.userGroupTableService.showNoRowData();
    } else {
      this.userGroupTableService.hideTableLoading();
    }
  }
}