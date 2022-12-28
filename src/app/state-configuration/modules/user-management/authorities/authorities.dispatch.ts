import {
  AuthoritiesAdd,
  AuthoritiesDelete,
  AuthoritiesError,
  AuthoritiesGet,
  AuthoritiesSuccess,
  AuthoritiesUpdate,
} from './authorities.action';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { AuthoritiesModel } from 'src/app/model/modules-model/authorities.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthoritiesDispatch {
  @Dispatch()
  public _AuthoritiesGetDispatch() {
    return new AuthoritiesGet();
  }

  @Dispatch()
  public _AuthoritiesAddDispatch(payload: AuthoritiesModel) {
    return new AuthoritiesAdd(payload);
  }

  @Dispatch()
  public _AuthoritiesDeleteDispatch(id: number) {
    return new AuthoritiesDelete(id);
  }

  @Dispatch()
  public _AuthoritiesUpdateDispatch(
    id: number,
    payload: FormData,
    stateData: AuthoritiesModel
  ) {
    return new AuthoritiesUpdate(id, payload, stateData);
  }

  @Dispatch()
  public _AuthoritiesSuccessDispatch(message: CustomHttpResponseModel) {
    return new AuthoritiesSuccess(message);
  }

  @Dispatch()
  public _AuthoritiesErrorDispatch(message: CustomHttpResponseModel) {
    return new AuthoritiesError(message);
  }
}
