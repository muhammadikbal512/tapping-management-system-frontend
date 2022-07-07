import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";

export class EventCollectorGet {
    static readonly type = '[EventCollector] Get';
}

export class EventCollectorSuccessState {
    static readonly type = '[EventCollector] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class EventCollectorErrorState {
    static readonly type = '[EventCollector] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}