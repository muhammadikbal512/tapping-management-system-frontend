import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";

export class SchemeGet {
    static readonly type = '[Scheme] Get';
}

export class SchemeSuccessState {
    static readonly type = '[Scheme] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class SchemeErrorState {
    static readonly type = '[Scheme] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}
