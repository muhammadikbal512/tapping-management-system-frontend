import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";

export class ArpGet {
    static readonly type = '[ARP] Get';
}

export class ArpSuccessState {
    static readonly type = '[ARP] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class ArpErrorState {
    static readonly type = '[ARP] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}
