import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { DeviceMonitoringModel } from 'src/app/model/modules-model/device-monitoring.model';
import {
  DeviceMonitoringGet,
  DeviceMonitoringErrorState,
  DeviceMonitoringSuccessState,
} from './device-monitoring.action';
import { Injectable } from '@angular/core';
import { Action, StateContext, Selector, State } from '@ngxs/store';

export class DeviceMonitoringStateModel {
  DeviceMonitorings: DeviceMonitoringModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<DeviceMonitoringStateModel>({
  name: 'deviceMonitoring',
  defaults: {
    DeviceMonitorings: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class DeviceMonitoringState {
  constructor() {}

  @Selector()
  static DeviceMonitorings(state: DeviceMonitoringStateModel) {
    return state.DeviceMonitorings;
  }
 
  @Selector()
  static responseMessage(state: DeviceMonitoringStateModel) {
    return state.responseMessage;
  }

  @Action(DeviceMonitoringGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<DeviceMonitoringStateModel>
  ) {}

  @Action(DeviceMonitoringSuccessState) ifStateSuccess(
    ctx: StateContext<DeviceMonitoringSuccessState>,
    { successMessage }: DeviceMonitoringSuccessState
  ) {}

  @Action(DeviceMonitoringErrorState) ifErrorState(
    ctx: StateContext<DeviceMonitoringErrorState>,
    { errorMessage }: DeviceMonitoringErrorState
  ) {}
}
