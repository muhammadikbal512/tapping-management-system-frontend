import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { AidConfigurationModel } from 'src/app/model/modules-model/aid-configuration.model';

export class AidConfigGet {
  static readonly type = '[AID] Get';
}

export class AidConfigAdd {
  static readonly type = '[AID] Add';
  constructor(public payload: AidConfigurationModel) {}
}

export class AidConfigUpdate {
  static readonly type = '[AID] Update';
  constructor(
    public id: number,
    public data: FormData,
    public stateData: AidConfigurationModel
  ) {}
}

export class AidConfigDelete {
  static readonly type = '[AID] Delete';
  constructor(public id: number) {}
}

export class AidConfigSuccessState {
  static readonly type = '[AID] Success';
  constructor(public successMessage: CustomHttpResponseModel) {}
}

export class AidConfigErrorState {
  static readonly type = '[AID] Error';
  constructor(public errorMessage: CustomHttpResponseModel) {}
}
