import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { JsonConfigurationModel } from 'src/app/model/modules-model/json-configuration.model';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import {
  JsonConfigurationGet,
  JsonConfigurationSuccessState,
  JsonConfigurationErrorState,
} from './json-configuration.action';

export class JsonConfigurationStateModel {
  JsonConfigurations: JsonConfigurationModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<JsonConfigurationStateModel>({
  name: 'JsonConfiguration',
  defaults: {
    JsonConfigurations: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class JsonConfigurationState {
  constructor(notifierService: NotificationService) {}

  @Selector()
  public JsonConfigurations(state: JsonConfigurationStateModel) {
    return state.JsonConfigurations;
  }

  @Selector()
  public responseMessage(state: JsonConfigurationStateModel) {
    return state.responseMessage;
  }

  @Action(JsonConfigurationGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<JsonConfigurationStateModel>
  ) {}

  @Action(JsonConfigurationSuccessState) ifStateSuccess(
    ctx: JsonConfigurationStateModel,
    { successMessage }: JsonConfigurationSuccessState
  ) {}

  @Action(JsonConfigurationErrorState) ifStateError(
    ctx: JsonConfigurationStateModel,
    { errorMessage }: JsonConfigurationErrorState
  ) {}
}
