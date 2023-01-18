import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';
import { IsoFieldConfigurationModel } from 'src/app/model/modules-model/iso-field-configuration.model';
import {
  Iso8583FieldModel,
  Iso8583SubFieldModel,
} from 'src/app/model/modules-model/iso8583-field.model';

export class Iso8583FieldGet {
  static readonly type = '[ISO8583-Field] Get';
}

export class Iso8583SubFieldGet {
  static readonly type = '[ISO8583-Field] Subfield Get';
}

export class Iso8583FieldAdd {
  static readonly type = '[ISO8583-Field] Add';
  constructor(public payload: Iso8583FieldModel) {}
}

export class Iso8583SubFieldAdd {
  static readonly type = '[ISO8583-Field] Add Subfield';
  constructor(public payload: Iso8583SubFieldModel) {}
}

export class Iso8583FieldIsoConfig {
  static readonly type = '[ISO8583-Field] IsoConfigGet';
}

export class Iso8583FieldFormat {
  static readonly type = '[ISO8583-Field] IsoFieldFormat Get';
}

export class Iso8583FieldEncoding {
  static readonly type = '[ISO8583-Field] EncodingGet';
}

export class Iso8583FieldUpdate {
  static readonly type = '[ISO8583-Field] Update';
  constructor(public payload: Iso8583FieldModel) {}
}

export class Iso8583FieldDelete {
  static readonly type = '[ISO8583-Field] Delete';
  constructor(public id: number) {}
}

export class Iso8583FieldSuccessState {
  static readonly type = '[ISO8583-Field] Success';
  constructor(public successMessage: HttpResponseData<any>) {}
}

export class Iso8583FieldErrorState {
  static readonly type = '[ISO8583-Field] Error';
  constructor(public errorMessage: HttpResponseData<any>) {}
}
