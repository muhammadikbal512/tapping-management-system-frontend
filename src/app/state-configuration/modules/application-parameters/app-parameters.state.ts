import { Action, State, StateContext, Selector } from '@ngxs/store';
import {
  AppParameterAdd,
  AppParameterDelete,
  AppParameterErrorState,
  AppParameterSuccessState,
  AppParameterUpdate,
  AppParametersGet,
} from './app-parameters.action';
import { Injectable } from '@angular/core';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { AppsParametersModel } from 'src/app/model/modules-model/apps-parameters.model';

export class AppParametersStateModel {
  AppParameters: AppsParametersModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

State<AppParametersStateModel>({
  name: 'AppParameter',
  defaults: {
    AppParameters: [],
    responseMessage: undefined,
  },
});

@Injectable()
export class AppParameterState {
  @Selector()
  static AppParameters(state: AppParametersStateModel) {
    return state.AppParameters;
  }

  @Selector()
  static responseMessage(state: AppParametersStateModel) {
    return state.responseMessage;
  }

  @Action(AppParametersGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<AppParametersStateModel>
  ) {}

  @Action(AppParameterAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<AppParametersStateModel>
  ) {}

  @Action(AppParameterDelete, { cancelUncompleted: true }) deleteDataFromState(
    ctx: StateContext<AppParametersStateModel>
  ) {}

  @Action(AppParameterUpdate, { cancelUncompleted: true }) updateDataFromState(
    ctx: StateContext<AppParametersStateModel>
  ) {}

  @Action(AppParameterSuccessState) ifStateSuccess(
    ctx: StateContext<AppParametersStateModel>,
    { successMessage }: AppParameterSuccessState
  ) {}

  @Action(AppParameterErrorState) ifStateError(
    ctx: StateContext<AppParametersStateModel>,
    { errorMessage }: AppParameterErrorState
  ) {}
}
