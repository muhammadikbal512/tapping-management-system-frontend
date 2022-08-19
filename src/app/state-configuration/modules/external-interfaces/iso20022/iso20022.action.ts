import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Iso20022Model } from 'src/app/model/modules-model/iso20022.model';

export class Iso20022Get {
  static readonly type = '[ISO20022] Get';
}

export class Iso20022Add {
  static readonly type = '[ISO20022] Add';
  constructor(public payload: Iso20022Model) {}
}

export class Iso20022Delete {
  static readonly type = '[ISO20022] Delete';
  constructor(public id: number) {}
}

export class Iso20022Update {
  static readonly type = '[ISO20022] Update';
  constructor(
    public id: number,
    public payload: FormData,
    public stateData: Iso20022Model
  ) {}
}

export class Iso20022SuccessState {
  static readonly type = '[ISO20022] Success';
  constructor(public successMessage: CustomHttpResponseModel) {}
}

export class Iso20022ErrorState {
  static readonly type = '[ISO20022] Error';
  constructor(public errorMessage: CustomHttpResponseModel) {}
}
