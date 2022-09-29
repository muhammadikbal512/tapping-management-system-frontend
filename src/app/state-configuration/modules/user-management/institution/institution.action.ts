import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { InstitutionModel } from 'src/app/model/modules-model/institution.model';

export class InstitutionGet {
  static readonly type = '[Institution] Get';
}

export class InstitutionUser {
  static readonly type = '[Institution] Get Instituion User';
  constructor(public name: string) {}
}

export class InstitutionAdd {
  static readonly type = '[Institution] Add';
  constructor(public payload: InstitutionModel) {}
}

export class InstitutionDelete {
  static readonly type = '[Institution] Delete';
  constructor(public id: number) {}
}

export class InstitutionUpdate {
  static readonly type = '[Institution] Update';
  constructor(
    public id: number,
    public payload: FormData,
    public stateData: InstitutionModel
  ) {}
}

export class InstitutionStateSuccess {
  static readonly type = '[Institution] Success';
  constructor(public successMessage: CustomHttpResponseModel) {}
}

export class InstitutionStateError {
  static readonly type = '[Institution] Error';
  constructor(public errorMessage: CustomHttpResponseModel) {}
}
