import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { AuthoritiesModel } from 'src/app/model/modules-model/authorities.model';

export class AuthoritiesGet {
  static readonly type = '[Authorities] Get';
}

export class AuthoritiesAdd {
  static readonly type = '[Authorities] Add';
  constructor(public payload: AuthoritiesModel) {}
}

export class AuthoritiesDelete {
  static readonly type = '[Authorities] Delete';
  constructor(public id: number) {}
}

export class AuthoritiesUpdate {
  static readonly type = '[Authorities] Update';
  constructor(
    public id: number,
    public payload: FormData,
    public stateData: AuthoritiesModel
  ) {}
}

export class AuthoritiesSuccess {
  static readonly type = '[Authorities] Success';
  constructor(public successMessage: CustomHttpResponseModel) {}
}

export class AuthoritiesError {
    static readonly type = '[Authorities] Success';
    constructor(public errorMessage: CustomHttpResponseModel) {}
  }