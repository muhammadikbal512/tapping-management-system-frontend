import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";
import { AlertInvestigationModel } from "src/app/model/modules-model/alert-investigation.model";

export class AlertInvestigationGet {
    static readonly type = '[AlertInvestigation] Get';
}

export class AlertInvestigationGetRoles {
    static readonly type = '[AlertInvestigation] Get Roles';
  }

export class AlertInvestigationRejected {
    static readonly type = '[AlertInvestigation] Rejected';
    constructor(public payload: AlertInvestigationModel) {}
}

export class AlertInvestigationSuccessState {
    static readonly type = '[AlertInvestigation] Success';
    constructor(public successMessage: CustomHttpResponseModel) {} 
}

export class AlertInvestigationErrorState {
    static readonly type = '[AlertInvestigation]';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}
