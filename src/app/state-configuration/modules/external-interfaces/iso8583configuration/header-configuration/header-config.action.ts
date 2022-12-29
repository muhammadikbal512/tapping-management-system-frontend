import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { HeaderConfigurationModel } from 'src/app/model/modules-model/header-configuration.model';

export class HeaderConfigGet {
  static readonly type = '[Header] Get';
}

export class HeaderConfigAdd {
  static readonly type = '[Header] Add';
  constructor(public payload: HeaderConfigurationModel) {}
}

export class HeaderConfigUpdate {
  static readonly type = '[Header] Update';
  constructor(
    public id: number,
    public payload: FormData,
    public stateData: HeaderConfigurationModel
  ) {}
}

export class HeaderConfigDelete {
  static readonly type = '[Header] Delete';
  constructor(public id: number) {}
}

export class HeaderConfigSuccessState {
  static readonly type = '[Header] Success';
  constructor(public successMessage: CustomHttpResponseModel) {}
}

export class HeaderConfigErrorState {
  static readonly type = '[Header] Error';
  constructor(public errorMessage: CustomHttpResponseModel) {}
}
