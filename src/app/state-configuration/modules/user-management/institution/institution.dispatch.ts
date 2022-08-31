import {
  InstitutionAdd,
  InstitutionDelete,
  InstitutionGet,
  InstitutionStateError,
  InstitutionStateSuccess,
  InstitutionUpdate,
} from './institution.action';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { InstitutionModel } from 'src/app/model/modules-model/institution.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
  providedIn: 'root',
})
export class InstitutionDispatch {
  @Dispatch()
  public _InstitutionGetDispatch() {
    return new InstitutionGet();
  }

  @Dispatch()
  public _InstitutionAddDispatch(payload: InstitutionModel) {
    return new InstitutionAdd(payload);
  }

  @Dispatch()
  public _InstitutionDeleteDispatch(id: number) {
    return new InstitutionDelete(id);
  }

  @Dispatch()
  public _InstitutionUpdateDispatch(
    id: number,
    payload: FormData,
    stateData: InstitutionModel
  ) {
    return new InstitutionUpdate(id, payload, stateData)
  }

  @Dispatch()
  public _InstitutionSuccessDispatch(message: CustomHttpResponseModel) {
    return new InstitutionStateSuccess(message);
  }

  @Dispatch()
  public _InstitutionErrorDispatch(message: CustomHttpResponseModel) {
    return new InstitutionStateError(message);
  }
}
