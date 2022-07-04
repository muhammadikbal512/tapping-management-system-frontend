import {
  AppParametersGet,
  AppParameterAdd,
  AppParameterDelete,
  AppParameterErrorState,
  AppParameterSuccessState,
  AppParameterUpdate,
} from './app-parameters.action';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Injectable } from '@angular/core';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { AppsParametersModel } from 'src/app/model/modules-model/apps-parameters.model';

@Injectable({
    providedIn: 'root'
})
export class AppParametersDispatch {
  @Dispatch()
  public _AppParametersGetDispatch() {
    return new AppParametersGet();
  }

  @Dispatch()
  public _AppParametersAddDispatch(payload: AppsParametersModel) {
    return new AppParameterAdd(payload);
  }

  @Dispatch()
  public _AppParametersDeleteDispatch(id: number) {
    return new AppParameterDelete(id);
  }

  @Dispatch()
  public _AppParametersUpdateDispatch(
    id: number,
    payload: FormData,
    stateData: AppsParametersModel
  ) {
    return new AppParameterUpdate(id, payload, stateData)
  };

  @Dispatch()
  public _AppParametersSuccessDispatch(message: CustomHttpResponseModel) {
      return new AppParameterSuccessState(message);
  };

  @Dispatch()
  public _AppParametersErrorDispatch(message: CustomHttpResponseModel) {
      return new AppParameterErrorState(message);
  }
}
