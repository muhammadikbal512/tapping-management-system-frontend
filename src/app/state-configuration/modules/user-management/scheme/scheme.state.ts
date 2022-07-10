import { Action, State, StateContext, Selector } from '@ngxs/store';
import {
  SchemeGet,
  SchemeErrorState,
  SchemeSuccessState,
} from './scheme.action';
import { Injectable } from '@angular/core';
import { SchemeModel } from 'src/app/model/modules-model/scheme.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

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
  ) {}

  @Action(SchemeSuccessState) ifStateSuccess(
    ctx: StateContext<SchemeStateModel>,
    { successMessage }: SchemeSuccessState
  ) {}

  @Action(SchemeErrorState) ifStateError(
    ctx: StateContext<SchemeStateModel>,
    { errorMessage }: SchemeErrorState
  ) {}
}
