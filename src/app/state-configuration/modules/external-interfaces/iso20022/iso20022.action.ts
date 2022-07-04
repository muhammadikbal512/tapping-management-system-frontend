import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";

export class Iso20022Get {
    static readonly type = '[ISO20022] Get';
}

export class Iso20022SuccessState {
    static readonly type = '[ISO20022] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class Iso20022ErrorState {
    static readonly type = '[ISO20022] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}
