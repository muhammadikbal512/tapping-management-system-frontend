import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';
import { TransactionTypeModel } from 'src/app/model/modules-model/transaction-type.model';

export class TransTypeMappingGet {
  static readonly type = '[TransType] Get';
}

export class TransTypeMappingAdd {
  static readonly type = '[TransType] Add';
  constructor(public data: TransactionTypeModel) {}
}

export class TransTypeGetIsoConfig {
  static readonly type = '[TransType] Get IsoConfig';
}

export class TransTypeMappingUpdate {
  static readonly type = '[TransType] Update';
  constructor(public payload: TransactionTypeModel) {}
}

export class TransTypeMappingDelete {
  static readonly type = '[TransType] Delete';
  constructor(public id: number) {}
}

export class TransTypeMappingSuccessState {
  static readonly type = '[TransType] Success';
  constructor(public successMessage: HttpResponseData<any>) {}
}

export class TransTypeMappingErrorState {
  static readonly type = '[TransType] Error';
  constructor(public errorMessage: HttpResponseData<any>) {}
}
