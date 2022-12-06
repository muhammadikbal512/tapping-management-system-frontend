import {
  TypeGet,
  TypeAdd,
  TypeDelete,
  TypeErrorState,
  TypeSuccessState,
  TypeUpdate,
  TypeWithUsersGet,
} from './type.action';
import { State, StateContext, Selector, Action } from '@ngxs/store';
import { TypeModel } from 'src/app/model/modules-model/type.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { TypeService } from 'src/app/modules/services/module-services/type.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { TypeTableService } from 'src/app/modules/services/module-services/type-table.service';

export class TypeStateModel {
  Type: TypeModel[] = [];
  TypeWithUsers: TypeModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<TypeStateModel>({
  name: 'Type',
  defaults: {
    Type: [],
    TypeWithUsers: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class TypeState {
  constructor(
    private typeService: TypeService,
    private notifierService: NotificationService,
    private typeTableService: TypeTableService
  ) {}

  @Selector()
  static Type(state: TypeStateModel) {
    return state.Type;
  }

  @Selector()
  static responseMessage(state: TypeStateModel) {
    return state.responseMessage;
  }

  @Action(TypeGet, { cancelUncompleted: true }) getTypeFromState(
    ctx: StateContext<TypeStateModel>
  ) {
    return this.typeService.getAllType().pipe(
      tap((response) => {
        if (response?.length != 0) {
          this.typeTableService.loading = false;

          this.typeTableService.setRowData(response);
        } else {
          this.typeTableService.loading = false;

          this.typeTableService.setRowData(response);
        }
        ctx.patchState({
          ...ctx.getState(),
          Type: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new TypeErrorState(response.error));
      })
    );
  }

  @Action(TypeWithUsersGet, { cancelUncompleted: true })
  getTypeWithUsersFromState(
    ctx: StateContext<TypeStateModel>,
    { name }: TypeWithUsersGet
  ) {
    return this.typeService.getTypeWithUsers(name).pipe(
      tap((response) => {
        ctx.patchState({
          ...ctx.getState(),
          TypeWithUsers: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new TypeErrorState(response.error));
      })
    );
  }

  @Action(TypeAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<TypeStateModel>,
    { payload }: TypeAdd
  ) {
    return this.typeService.addType(payload).pipe(
      tap((response) => {
        ctx.dispatch(new TypeSuccessState(response));

        ctx.patchState({
          ...ctx.getState(),
          Type: [...ctx.getState().Type],
          responseMessage: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new TypeErrorState(response.error));
      })
    );
  }

  @Action(TypeDelete, { cancelUncompleted: true }) deleteFromState(
    ctx: StateContext<TypeStateModel>,
    { id }: TypeDelete
  ) {
    return this.typeService.deleteType(id).pipe(
      tap((response) => {
        ctx.dispatch(new TypeSuccessState(response));
        const filteredData = ctx
          .getState()
          .Type.filter((data) => data.id !== id);

        ctx.patchState({
          ...ctx.getState(),
          Type: filteredData,
          responseMessage: response,
        });
      }),
      catchError((response) => {
        return ctx.dispatch(new TypeErrorState(response));
      })
    );
  }

  @Action(TypeUpdate, { cancelUncompleted: true }) updateDataFromState(
    ctx: StateContext<TypeStateModel>,
    { id, payload, stateData }: TypeUpdate
  ) {
    return this.typeService.updateType(payload).pipe(
      tap((response) => {
        ctx.dispatch(new TypeSuccessState(response));
        const dataList = [...ctx.getState().Type];
        const updatedDataIndex = dataList.findIndex((data) => data.id === id);
        dataList[updatedDataIndex] = stateData;

        ctx.patchState({
          ...ctx.getState(),
          Type: dataList,
          responseMessage: response,
        });
      }),
      catchError((response) => {
        return ctx.dispatch(new TypeErrorState(response));
      })
    );
  }

  @Action(TypeSuccessState) ifStateSuccess(
    ctx: StateContext<TypeStateModel>,
    { successMessage }: TypeSuccessState
  ) {
    this.notifierService.successNotification(
      successMessage?.message,
      successMessage?.httpStatusCode
    );

    if (this.typeService.getCurrentStatusDialog().length != 0) {
      this.typeService.closeDialog();
    }

    this.typeService.onGetAllType();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(TypeErrorState) ifStateError(
    ctx: StateContext<TypeStateModel>,
    { errorMessage }: TypeErrorState
  ) {
    this.typeTableService.loading = false;
    this.notifierService.errorNotification(
      errorMessage?.message,
      errorMessage?.status
    );

    if (this.typeService.getCurrentStatusDialog().length == 0) {
      this.typeService.closeDialog();
    }

    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
