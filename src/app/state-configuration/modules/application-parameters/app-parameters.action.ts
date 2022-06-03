import { AppsParametersModel } from 'src/app/model/modules-model/apps-parameters.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

export class AppParametersGet {
  static readonly type = '[AppParam] Get';
}

export class AppParameterAdd {
  static readonly type = '[AppParam] Add';
  constructor(public payload: AppsParametersModel) {}
}

export class AppParameterDelete {
  static readonly type = '[AppParam] Delete';
  constructor(public id: number) {}
}

export class AppParameterUpdate {
  static readonly type = '[AppParam] Update';
  constructor(
    public id: number,
    public payload: FormData,
    public stateData: AppsParametersModel
  ) {}
}

export class AppParameterSuccessState {
    static readonly type = '[AppParam] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class AppParameterErrorState {
    static readonly type = '[AppParam] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}
