import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";

export class DeviceMonitoringGet {
    static readonly type = '[Device] Get';
}

export class DeviceMonitoringSuccessState {
    static readonly type = '[Device] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class DeviceMonitoringErrorState {
    static readonly type = '[Device] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}

