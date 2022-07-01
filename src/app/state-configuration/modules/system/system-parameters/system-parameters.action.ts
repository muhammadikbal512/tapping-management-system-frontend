import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";

export class SystemParametersGet {
    static readonly type = '[System] Get';
}

export class SystemParameterSuccessState {
    static readonly type = '[System] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class SystemParameterErrorState {
    static readonly type = '[System] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}
