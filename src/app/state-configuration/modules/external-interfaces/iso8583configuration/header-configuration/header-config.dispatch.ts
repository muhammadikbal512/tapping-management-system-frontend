import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  HeaderConfigGet,
  HeaderConfigAdd,
  HeaderConfigDelete,
  HeaderConfigErrorState,
  HeaderConfigSuccessState,
  HeaderConfigUpdate,
} from './header-config.action';
import { HeaderConfigurationModel } from 'src/app/model/modules-model/header-configuration.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderConfigDispatch {
  @Dispatch()
  public _HeaderConfigGetDispatch() {
    return new HeaderConfigGet();
  }

  @Dispatch()
  public _HeaderConfigAdd(payload: HeaderConfigurationModel) {
    return new HeaderConfigAdd(payload);
  }

  @Dispatch()
  public _HeaderConfigUpdate(
    id: number,
    payload: FormData,
    stateData: HeaderConfigurationModel
  ) {
    return new HeaderConfigUpdate(id, payload, stateData);
  }

  @Dispatch()
  public _HeaderConfigDelete(id: number) {
    return new HeaderConfigDelete(id);
  }

  @Dispatch()
  public _HeaderConfigSuccessState(message: CustomHttpResponseModel) {
    return new HeaderConfigSuccessState(message);
  }

  @Dispatch()
  public _HeaderConfigErrorState(message: CustomHttpResponseModel) {
    return new HeaderConfigErrorState(message);
  }
}
