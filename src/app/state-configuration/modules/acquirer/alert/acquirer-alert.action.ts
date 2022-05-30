import { AcquirerAlertModel } from 'src/app/model/modules-model/acquirer-alert.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

export class AcquirerAlertGet {
  static readonly type = '[AlertAcquirer] Get';
}

export class AcquirerAlertAdd {
  static readonly type = '[AlertAcquirer] Add';
  constructor(public payload: AcquirerAlertModel) {}
}

export class AcquirerAlertDelete {
  static readonly type = '[AlertAcquirer] Delete';
  constructor(public id: number) {}
}

export class AcquirerAlertUpdate {
  static readonly type = '[AlertAcquirer] Update';
  constructor(
    public id: number,
    public payload: FormData,
    public stateData: AcquirerAlertModel
  ) {}
}

export class AcquirerAlertSuccessState {
    static readonly type = '[AlertAcquirer] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class AcquirerAlertErrorState {
    static readonly type = '[AlertAcquirer] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}
