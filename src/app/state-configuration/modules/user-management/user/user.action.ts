import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";
import { UserModel } from "src/app/model/user-model/user.model";


export class UserGet {
    static readonly type = '[User] Get';
}

export class UserAdd {
    static readonly type = '[User] Add';
    constructor(public payload: UserModel) {}
}

export class UserDelete {
    static readonly type = '[User] Delete';
    constructor(public id: number) {}
}

export class UserUpdate {
    static readonly type = '[User] Update';
    constructor(public id: number, public payload: FormData, public stateData: UserModel) {}
}

export class UserSuccessState {
    static readonly type = '[User] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class UserErrorState {
    static readonly type = '[User] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}
