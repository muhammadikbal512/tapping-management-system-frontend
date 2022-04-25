import { Iso8583DialectMsgTemplate } from 'src/app/model/modules-model/iso8583-dialect-msg-template.model';
import { CustomHttpResponseModel } from '../../../../../model/customHttpResponse-Model/custom-http-response.model';

export class DialectsGet {
  static readonly type = '[Dialect] GetDialect';
}

export class DialectGetMessageFormat {
  static readonly type = '[Dialect] GetMessageFormat';
}

export class DialectAdd {
  static readonly type = '[Dialect] Add';
  constructor(public payload: Iso8583DialectMsgTemplate) {}
}

export class DialectUpdate {
  static readonly type = '[Dialect] Update';
  constructor(
    public id: number,
    public payload: FormData,
    public stateData: Iso8583DialectMsgTemplate
  ) {}
}

export class DialectDelete {
  static readonly type = '[Dialect] Delete';
  constructor(public id: number) {}
}

export class DialectSuccessState {
  static readonly type = '[Dialect] Success';
  constructor(public successMessage: CustomHttpResponseModel) {}
}

export class DialectErrorState {
  static readonly type = '[Dialect] Error';
  constructor(public errorMessage: CustomHttpResponseModel) {}
}
