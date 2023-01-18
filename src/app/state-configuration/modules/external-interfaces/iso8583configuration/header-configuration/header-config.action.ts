import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { HeaderConfigurationModel } from 'src/app/model/modules-model/header-configuration.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';

export class HeaderConfigGet {
  static readonly type = '[Header] Get';
}

export class HeaderIsoConfigGet {
  static readonly type = '[Header] HeaderIsoConfigGet';
}

export class HeaderEncodingGet {
  static readonly type = '[Header] HeaderEncodingGet';
}

export class HeaderFieldFormatGet {
  static readonly type = '[Header] HeaderFieldFormatGet';
}

export class HeaderConfigAdd {
  static readonly type = '[Header] Add';
  constructor(public payload: HeaderConfigurationModel) {}
}

export class HeaderConfigUpdate {
  static readonly type = '[Header] Update';
  constructor(public payload: HeaderConfigurationModel) {}
}

export class HeaderConfigDelete {
  static readonly type = '[Header] Delete';
  constructor(public id: number) {}
}

export class HeaderConfigSuccessState {
  static readonly type = '[Header] Success';
  constructor(public successMessage: HttpResponseData<any>) {}
}

export class HeaderConfigErrorState {
  static readonly type = '[Header] Error';
  constructor(public errorMessage: HttpResponseData<any>) {}
}
