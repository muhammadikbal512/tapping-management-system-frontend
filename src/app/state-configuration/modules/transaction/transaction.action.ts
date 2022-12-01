import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";

export class TransactionGet {
    static readonly type = '[Transaction] Get';
}

export class EventCollectorsGet {
    static readonly type = '[EventCollectors] Get';
}

export class TransactionSuccessState {
    static readonly type = '[Transaction] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class TransactionErrorState {
    static readonly type = '[Transaction] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}
