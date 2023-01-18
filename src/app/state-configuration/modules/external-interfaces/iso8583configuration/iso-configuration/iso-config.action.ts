import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';
import { IsoConfigurationModel } from 'src/app/model/modules-model/iso-configuration.model';

export class IsoConfigGet {
  static readonly type = '[Iso Config] Get';
}

export class IsoConfigAdd {
  static readonly type = '[Iso Config] Add';
  constructor(public payload: IsoConfigurationModel) {}
}

export class IsoConfigUpdate {
  static readonly type = '[Iso Config] Update';
  constructor(public payload: IsoConfigurationModel) {}
}

export class IsoConfigDelete {
  static readonly type = '[Iso Config] Delete';
  constructor(public id: number) {}
}

export class IsoConfigSuccessState {
  static readonly type = '[Iso Config] Success';
  constructor(public successMessage: HttpResponseData<any>) {}
}

export class IsoConfigErrorState {
  static readonly type = '[Iso Config] Error';
  constructor(public errorMessage: HttpResponseData<any>) {}
}
