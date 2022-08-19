import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";

export class AlertInvestigationGet {
    static readonly type = '[AlertInvestigation] Get';
}

export class AlertInvestigationDelete {
    static readonly type = '[AlertInvestigation] Delete';
    constructor(public id: number) {}
}

export class AlertInvestigationSuccessState {
    static readonly type = '[AlertInvestigation] Success';
    constructor(public successMessage: CustomHttpResponseModel) {} 
}

export class AlertInvestigationErrorState {
    static readonly type = '[AlertInvestigation]';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}
