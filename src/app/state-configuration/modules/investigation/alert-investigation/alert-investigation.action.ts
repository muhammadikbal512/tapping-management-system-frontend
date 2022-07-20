import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";

export class AlertInvestigationGet {
    static readonly type = '[Alert] Get';
}

export class AlertInvestigationDelete {
    static readonly type = '[Alert] Delete';
    constructor(public id: number) {}
}

export class AlertInvestigationSuccessState {
    static readonly type = '[Alert] Success';
    constructor(public successMessage: CustomHttpResponseModel) {} 
}

export class AlertInvestigationErrorState {
    static readonly type = '[Alert]';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}
