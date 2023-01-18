import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';
import { ResponseMappingModel } from 'src/app/model/modules-model/response-mapping.model';

export class ResponseMappingGet {
  static readonly type = '[ResponseMapping] Get';
}

export class ResponseMappingGetIsoConfig {
  static readonly type = '[ResponseMapping] Get IsoConfig';
}

export class ResponseMappingAdd {
  static readonly type = '[ResponseMapping] Add';
  constructor(public payload: ResponseMappingModel) {}
}

export class ResponseMappingDelete {
  static readonly type = '[ResponseMapping] Delete';
  constructor(public id: number) {}
}

export class ResponseMappingUpdate {
  static readonly type = '[ResponseMapping] Update';
  constructor(public payload: ResponseMappingModel) {}
}

export class ResponseMappingSuccessState {
  static readonly type = '[ResponseMapping] Success';
  constructor(public successMessage: HttpResponseData<any>) {}
}

export class ResponseMappingErrorState {
  static readonly type = '[ResponseMapping] Error';
  constructor(public errorMessage: HttpResponseData<any>) {}
}
