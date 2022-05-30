import { AlertAnalysisModel } from 'src/app/model/modules-model/alert-analysis.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

export class AlertAnalysisGet {
    static readonly type = '[AlertAnalysis] Get';
}

export class AlertAnalysisAdd {
    static readonly type = '[AlertAnalysis] Add';
    constructor(public payload: AlertAnalysisModel) {}
}

export class AlertAnalysisDelete {
    static readonly type = '[AlertAnalysis] Delete';
    constructor(public id: number) {}
}

export class AlertAnalysisUpdate {
    static readonly type = '[AlertAnalysis] Update';
    constructor (public id: number, public payload: FormData, public stateData: AlertAnalysisModel) {}
}

export class AlertAnalysisSuccessState {
    static readonly type = '[AlertAnalysis] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class AlertAnalysisErrorState {
    static readonly type = '[AlertAnalysis] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}