import {
  RolesGet,
  RolesAdd,
  RolesDelete,
  RolesErrorState,
  RolesSuccessState,
  RolesUpdate,
} from './roles.action';
import { RolesModel } from 'src/app/model/modules-model/roles.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Injectable({
    providedIn: 'root'
})
export class RolesDispatch {
    @Dispatch()
    public _RolesGetDispatch() {
        return new RolesGet();
    }

    @Dispatch()
    public _RolesAddDispatch(payload: RolesModel) {
        return new RolesAdd(payload);
    }

    @Dispatch()
    public _RolesDeleteDispatch(id: number) {
        return new RolesDelete(id);
    }

    @Dispatch()
    public _RolesUpdateDispatch(id: number, payload: FormData, stateData: RolesModel) {
        return new RolesUpdate(id, payload, stateData);
    }

    @Dispatch()
    public _RolesSuccessStateDispatch(message: CustomHttpResponseModel) {
        return new RolesSuccessState(message);
    }

    @Dispatch()
    public _RolesErrorStateDispatch(message: CustomHttpResponseModel) {
        return new RolesErrorState(message);
    }
}