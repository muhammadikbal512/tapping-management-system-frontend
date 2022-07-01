import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Injectable } from '@angular/core';
import {
  SystemParametersGet,
  SystemParameterSuccessState,
  SystemParameterErrorState,
} from './system-parameters.action';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
  providedIn: 'root',
})
export class SystemParametersDispatch {
  @Dispatch()
  public _SystemParametersGetDispatch() {
      return new SystemParametersGet();
  }

  @Dispatch()
  public _SystemParametersSuccessDispatch(message: CustomHttpResponseModel) {
      return new SystemParameterSuccessState(message);
  }

  @Dispatch()
  public _SystemParametersErrorDispatch(message: CustomHttpResponseModel) {
      return new SystemParameterErrorState(message);
  }
}
