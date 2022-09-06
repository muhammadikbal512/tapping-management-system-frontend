import {
  TypeGet,
  TypeAdd,
  TypeDelete,
  TypeErrorState,
  TypeSuccessState,
  TypeUpdate,
} from './type.action';
import { State, StateContext, Selector, Action } from '@ngxs/store';
import { TypeModel } from 'src/app/model/modules-model/type.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { TypeService } from 'src/app/modules/services/module-services/type.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class TypeStateModel {
  Type: TypeModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<TypeStateModel>({
  name: 'Type',
  defaults: {
    Type: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class TypeState {
  constructor(
    private typeService: TypeService,
    private notifierService: NotificationService
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
        if (response.length != 0) {
        } else {
        }
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
}
