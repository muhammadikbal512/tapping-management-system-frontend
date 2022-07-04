import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";

export class JsonConfigurationGet {
    static readonly type = '[JsonConfig] Get';
}

export class JsonConfigurationSuccessState {
    static readonly type = '[JsonConfig] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class JsonConfigurationErrorState {
    static readonly type = '[JsonConfig] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}