import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { RolesModel } from 'src/app/model/modules-model/roles.model';

export class RolesGet {
  static readonly type = '[Roles] Get';
}

export class RolesWithUserGet {
  static readonly type = '[Roles] Get Roles With User';
  constructor(public name: string) {}
}

export class AuthoritiesGet {
  static readonly type = '[Roles] Get Authorities';
}

export class RolesAdd {
  static readonly type = '[Roles] Add';
  constructor(public payload: RolesModel) {}
}

export class RolesDelete {
  static readonly type = '[Roles] Delete';
  constructor(public id: number) {}
}

export class RolesUpdate {
  static readonly type = '[Roles] Update';
  constructor(
    public id: number,
    public payload: FormData,
    public stateData: RolesModel
  ) {}
}

export class RolesSuccessState {
  static readonly type = '[Roles] Success';
  constructor(public successMessage: CustomHttpResponseModel) {}
}

export class RolesErrorState {
  static readonly type = '[Roles] Error';
  constructor(public errorMessage: CustomHttpResponseModel) {}
}
