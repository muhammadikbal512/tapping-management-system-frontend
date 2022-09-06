import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { TypeModel } from 'src/app/model/modules-model/type.model';

export class TypeGet {
  static readonly type = '[Type] Get';
}

export class TypeAdd {
  static readonly type = '[Type] Add';
  constructor(public payload: TypeModel) {}
}

export class TypeDelete {
  static readonly type = '[Type] Delete';
  constructor(public id: number) {}
}

export class TypeUpdate {
    static readonly type = '[Type] Update';
    constructor(public id:number, public payload: FormData, public stateData: TypeModel) {}
}

export class TypeSuccessState {
    static readonly type = '[Type] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class TypeErrorState {
    static readonly type = '[Type] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}
