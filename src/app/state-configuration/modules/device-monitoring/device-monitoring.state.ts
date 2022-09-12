import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { DeviceMonitoringModel } from 'src/app/model/modules-model/device-monitoring.model';
import {
  DeviceMonitoringGet,
  DeviceMonitoringErrorState,
  DeviceMonitoringSuccessState,
} from './device-monitoring.action';
import { Injectable } from '@angular/core';
import { Action, StateContext, Selector, State } from '@ngxs/store';
import { DeviceMonitoringService } from 'src/app/modules/services/module-services/device-monitoring.service';
import { DeviceMonitoringTableService } from 'src/app/modules/services/module-services/device-monitoring-table.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

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
  constructor(
    private deviceService: DeviceMonitoringService,
    private deviceTableService: DeviceMonitoringTableService,
    private notifierService: NotificationService
  ) {}

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
  ) {
    return this.deviceService.getAllDeviceMonitoring().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.deviceTableService.hideTableLoading();
          this.deviceTableService.setRowData(response);
        } else {
          this.deviceTableService.setRowData(response);
          this.deviceTableService.showNoRowData();
        }

        ctx.patchState({
          ...ctx.getState(),
          DeviceMonitorings: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new DeviceMonitoringErrorState(response.error));
      })
    );
  }

  @Action(DeviceMonitoringSuccessState) ifStateSuccess(
    ctx: StateContext<DeviceMonitoringStateModel>,
    { successMessage }: DeviceMonitoringSuccessState
  ) {
    this.notifierService.successNotification(
      successMessage.message,
      successMessage.status
    )

    this.deviceService.onGetDeviceMonitoring();
    ctx.patchState({
      responseMessage: successMessage
    })
  }

  @Action(DeviceMonitoringErrorState) ifErrorState(
    ctx: StateContext<DeviceMonitoringStateModel>,
    { errorMessage }: DeviceMonitoringErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage.message,
      errorMessage.status
    );

    if(this.deviceTableService.gridApi.getRenderedNodes().length == 0) {
      this.deviceTableService.showNoRowData();
    } else {
      this.deviceTableService.hideTableLoading();
    }

    ctx.patchState({
      responseMessage: errorMessage
    })
  }
}
