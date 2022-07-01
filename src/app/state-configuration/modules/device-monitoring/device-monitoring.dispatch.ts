import {
  DeviceMonitoringGet,
  DeviceMonitoringSuccessState,
  DeviceMonitoringErrorState,
} from './device-monitoring.action';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';


@Injectable({
    providedIn: 'root'
})
export class DeviceMonitoringDispatch {

    @Dispatch()
    public _DeviceMonitoringGetDispatch() {
        return new DeviceMonitoringGet();
    }

    @Dispatch()
    public _DeviceMonitoringSuccessStateDispatch(message: CustomHttpResponseModel) {
        return new DeviceMonitoringSuccessState(message);
    }

    @Dispatch()
    public _DeviceMonitoringErrorStateDispatch(message: CustomHttpResponseModel) {
        return new DeviceMonitoringErrorState(message);
    }

}
