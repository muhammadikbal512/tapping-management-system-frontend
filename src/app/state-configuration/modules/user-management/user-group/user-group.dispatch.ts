import {
  UserGroupGet,
  UserGroupAdd,
  UserGroupDelete,
  UserGroupError,
  UserGroupSuccess,
  UserGroupUpdate,
  UserGroupWithUsersGet,
} from './user-group.action';
import { UserGroupModel } from 'src/app/model/modules-model/user-group.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserGroupDispatch {
  @Dispatch()
  public _UserGroupGetDispatch() {
    return new UserGroupGet();
  }

  @Dispatch()
  public _UserGroupWithUsersGetDispatch(name: string) {
    return new UserGroupWithUsersGet(name);
  }

  @Dispatch()
  public _UserGroupAddDispatch(payload: UserGroupModel) {
    return new UserGroupAdd(payload);
  }

  @Dispatch()
  public _UserGroupDeleteDispatch(id: number) {
    return new UserGroupDelete(id);
  }

  @Dispatch()
  public _UserGroupUpdateDispatch(
    id: number,
    payload: FormData,
    stateData: UserGroupModel
  ) {
    return new UserGroupUpdate(id, payload, stateData);
  }

  @Dispatch()
  public _UserGroupSuccessDispatch(message: CustomHttpResponseModel) {
    return new UserGroupSuccess(message);
  }

  @Dispatch()
  public _UserGroupErrorDispatch(message: CustomHttpResponseModel) {
    return new UserGroupError(message);
  }
}
