import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { TransactionTypeModel } from 'src/app/model/modules-model/transaction-type.model';

export class TransTypeMappingGet {
  static readonly type = '[TransType] Get';
}

export class TransTypeMappingAdd {
  static readonly type = '[TransType] Add';
  constructor(public data: TransactionTypeModel) {}
}

export class TransTypeMappingUpdate {
  static readonly type = '[TransType] Update';
  constructor(
    public id: number,
    public data: FormData,
    public stateData: TransactionTypeModel
  ) {}
}

export class TransTypeMappingDelete {
  static readonly type = '[TransType] Delete';
  constructor(public id: number) {}
}

export class TransTypeMappingSuccessState {
  static readonly type = '[TransType] Success'
  constructor(public successMessage: CustomHttpResponseModel) {}
}

export class TransTypeMappingErrorState {
  static readonly type = '[TransType] Error'
  constructor(public errorMessage: CustomHttpResponseModel) {}
}
