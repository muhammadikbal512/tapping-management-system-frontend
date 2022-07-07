import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

export class XmlConfigGet {
  static readonly type = '[XML] Get';
}

export class XmlConfigSuccessState {
  static readonly type = '[XML] Success';
  constructor(public successMessage: CustomHttpResponseModel) {}
}

export class XmlConfigErrorState {
  static readonly type = '[XML] Error';
  constructor(public errorMessage: CustomHttpResponseModel) {}
}
