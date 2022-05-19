import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { ResponseMappingModel } from 'src/app/model/modules-model/response-mapping.model';

export class ResponseMappingGet {
    static readonly type = '[ResponseMapping] Get';
}

export class ResponseMappingAdd {
    static readonly type = '[ResponseMapping] Add';
    constructor(public payload: ResponseMappingModel) {}
}

export class ResponseMappingDelete {
    static readonly type = '[ResponseMapping] Delete';
    constructor(public id: number){}
}

export class ResponseMappingUpdate {
    static readonly type = '[ResponseMapping] Update';
    constructor(public id: number, payload: FormData, stateData: ResponseMappingModel) {}
}

export class ResponseMappingSuccessState {
    static readonly type = '[ResponseMapping] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class ResponseMappingErrorState {
    static readonly type = '[ResponseMapping] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}