import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";
import { Iso8583FieldModel } from "src/app/model/modules-model/iso8583-field.model";


export class Iso8583FieldGet {
    static readonly type = '[ISO8583-Field] Get';
}

export class Iso8583FieldGetDialect {
    static readonly type = '[ISO8583-Field] Get Dialect';
}

export class Iso8583FieldGetAttribute {
    static readonly type = '[ISO8583-Field] Get Attribute'
}

export class Iso8583FieldAdd {
    static readonly type = '[ISO8583-Field] Add'
    constructor(public payload: Iso8583FieldModel) {}
}

export class Iso8583FieldUpdate {
    static readonly type = '[ISO8583-Field] Update'
    constructor(public id: number, public payload: FormData, public stateData: Iso8583FieldModel) {}
}

export class Iso8583FieldDelete {
    static readonly type = '[ISO8583-Field] Delete'
    constructor(public id:number) {}
}

export class Iso8583FieldSuccessState {
    static readonly type = '[ISO8583-Field] Success'
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class Iso8583FieldErrorState {
    static readonly type = '[ISO8583-Field] Error'
    constructor(public errorMessage: CustomHttpResponseModel) {}
}

