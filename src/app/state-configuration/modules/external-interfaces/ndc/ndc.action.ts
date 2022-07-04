import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

export class NdcGet {
  static readonly type = '[NDC] Get';
}

export class NdcSuccessState {
  constructor(public successMessage: CustomHttpResponseModel) {}

  static readonly type = '[NDC] Success';
}

export class NdcErrorState {
  constructor(public errorMessage: CustomHttpResponseModel) {}

  static readonly type = '[NDC] Error';
}
