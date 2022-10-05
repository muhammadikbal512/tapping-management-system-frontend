import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";
import { UserGroupModel } from "src/app/model/modules-model/user-group.model";

export class UserGroupGet {
    static readonly type = '[UserGroup] Get';
}

export class UserGroupWithUsersGet {
    static readonly type = '[UserGroup] UserGroup with User Get';
    constructor(public name: string) {}
}

export class UserGroupAdd {
    static readonly type = '[UserGroup] Add';
    constructor(public payload: UserGroupModel) {}
}

export class UserGroupDelete {
    static readonly type = '[UserGroup] Delete';
    constructor(public id: number) {}
}

export class UserGroupUpdate {
    static readonly type = '[UserGroup] Update';
    constructor(public id: number, public payload: FormData, public stateData: UserGroupModel) {}
}

export class UserGroupSuccess {
    static readonly type = '[UserGroup] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class UserGroupError {
    static readonly type = '[UserGroup] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}
