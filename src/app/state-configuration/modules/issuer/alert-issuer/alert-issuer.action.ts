import { AlertIssuerModel } from 'src/app/model/modules-model/alert-issuer.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

export class AlertIssuerGet {
    static readonly type = '[AlertIssuer] Get';
}

export class AlertIssuerAdd {
    static readonly type = '[AlertIssuer] Add';
    constructor(public payload: AlertIssuerModel) {}
}

export class AlertIssuerDelete {
    static readonly type = '[AlertIssuer] Delete';
    constructor(public id: number) {}
}

export class AlertIssuerUpdate {
    static readonly type = '[AlertIssuer] Update';
    constructor(public id: number, public payload: FormData, public stateData: AlertIssuerModel) {}
}

export class AlertIssuerSuccessState {
    static readonly type = '[AlertIssuer] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class AlertIssuerErrorState {
    static readonly type = '[AlertIssuer] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}
