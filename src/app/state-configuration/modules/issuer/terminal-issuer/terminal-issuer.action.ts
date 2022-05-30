import { IssuerTerminalModel } from 'src/app/model/modules-model/issuer-terminal.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

export class TerminalIssuerGet {
    static readonly type = '[TerminalIssuer] Get';
}

export class TerminalIssuerAdd {
    static readonly type = '[TerminalIssuer] Add';
    constructor(public payload: IssuerTerminalModel) {}
}

export class TerminalIssuerDelete {
    static readonly type = '[TerminalIssuer] Delete'
    constructor(public id: number) {}
}

export class TerminalIssuerUpdate {
    static readonly type = '[TerminalIssuer] Update'
    constructor(public id: number, public payload: FormData, public stateData: IssuerTerminalModel) {}
}

export class TerminalIssuerSuccessState {
    static readonly type = '[TerminalIssuer] Success'
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class TerminalIssuerErrorState {
    static readonly type = '[TerminalIssuer] Error'
    constructor(public errorMessage: CustomHttpResponseModel) {}
}