import {
  UserGet,
  UserDelete,
  UserErrorState,
  UserSuccessState,
} from './user.action';
import { UserTableService } from 'src/app/modules/services/module-services/user-table.service';
import { UserService } from 'src/app/modules/services/module-services/user.service';
import { UserModel } from 'src/app/model/user-model/user.model';
import { Action, Select, State, StateContext, Selector } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class UserStateModel {
  User: UserModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<UserStateModel>({
  name: 'User',
  defaults: {
    User: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class UserState {
  constructor(
    private notifierService: NotificationService,
    private userService: UserService,
    private userTableService: UserTableService
  ) {}

  @Selector()
  static User(state: UserStateModel) {
      return state.User
  }

  @Selector()
  static responseMessage(state: UserStateModel) {
      return state.responseMessage
  }

  @Action(UserGet, {cancelUncompleted: true})getDataFromState(ctx: StateContext<UserStateModel>) {
      return this.userService.getAllUsers().pipe(tap((response) => {
          if (response?.length != 0) {
              this.userTableService.hideTableLoading();
              this.userTableService.setRowData(response);
          } else {
              this.userTableService.setRowData(response);
              this.userTableService.showNoRowData();
          }
          ctx.setState({
              ...ctx.getState(),
              User: response
          });
      }), catchError((response: HttpErrorResponse) => {
          return ctx.dispatch( new UserErrorState(response.error))
      }))
  }
}
