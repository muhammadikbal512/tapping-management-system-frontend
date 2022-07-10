import {
  SystemParametersGet,
  SystemParameterSuccessState,
  SystemParameterErrorState,
} from './system-parameters.action';
import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { SystemParametersModel } from 'src/app/model/modules-model/system-parameters';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

export class SystemParametersStateModel {
  SystemParameters: SystemParametersModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<SystemParametersStateModel>({
  name: 'SystemParameter',
  defaults: {
    SystemParameters: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class SystemParameterState {
  @Selector()
  static SystemParameters(state: SystemParametersStateModel) {
    return state.SystemParameters;
  }

  @Selector()
  static responseMessage(state: SystemParametersStateModel) {
    return state.responseMessage;
  }

  @Action(SystemParametersGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<SystemParametersStateModel>
  ) {}

  @Action(SystemParameterSuccessState) ifStateSuccess(
    ctx: StateContext<SystemParametersStateModel>,
    { successMessage }: SystemParameterSuccessState
  ) {}

  @Action(SystemParameterErrorState) ifStateError(
    ctx: StateContext<SystemParametersStateModel>,
    { errorMessage }: SystemParameterErrorState
  ) {}
}
