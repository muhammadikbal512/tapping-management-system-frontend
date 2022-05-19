import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";
import { TransactionParametersModel } from "src/app/model/modules-model/transaction-parameters";


export class TransactionParametersGet {
    static readonly type = '[TransactionParameters] GetAll';
}

export class TransactionParametersAdd {
    static readonly type ='[TransactionParameters] Add';
    constructor(public payload: TransactionParametersModel) {}
}

export class TransactionParametersUpdate {
    static readonly type = '[TransactionParameters] Update';
    constructor(public id: number, public payload: FormData, public stateData: TransactionParametersModel) {}
}

export class TransactionParametersDelete {
    static readonly type = '[TransactionParameters] Delete';
    constructor(public id: number) {}
}

export class TransactionParametersSuccessState {
    static readonly type = '[TransactionParameters] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class TransactionParametersErrorState {
    static readonly type = '[TransactionParameters] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}