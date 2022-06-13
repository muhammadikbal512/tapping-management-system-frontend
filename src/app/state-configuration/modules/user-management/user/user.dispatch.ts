import {
  UserGet,
  UserAdd,
  UserDelete,
  UserUpdate,
  UserErrorState,
  UserSuccessState,
} from './user.action';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { UserModel } from 'src/app/model/user-model/user.model';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Injectable({
    providedIn: 'root'
})
export class UserDispatch {
    @Dispatch()
    public _UserGetDispatch() {
        return new UserGet;
    }

    @Dispatch()
    public _UserAddDispatch(payload: UserModel) {
        return new UserAdd(payload);
    }

    @Dispatch()
    public _UserDeleteDispatch(id: number) {
        return new UserDelete(id)
    }

    @Dispatch()
    public _UserUpdateDispatch(id: number, payload: FormData, stateData: UserModel) {
        return new UserUpdate(id, payload, stateData);
    }

    @Dispatch()
    public _UserSuccessStateDispatch(message: CustomHttpResponseModel) {
        return new UserSuccessState(message);
    }

    @Dispatch()
    public _UserErrorStateDispatch(message: CustomHttpResponseModel) {
        return new UserErrorState(message);
    }
}
