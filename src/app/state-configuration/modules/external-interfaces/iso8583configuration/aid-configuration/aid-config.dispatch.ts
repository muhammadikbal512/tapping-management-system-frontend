import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  AidConfigAdd,
  AidConfigDelete,
  AidConfigErrorState,
  AidConfigGet,
  AidConfigSuccessState,
  AidConfigUpdate,
} from './aid-config.action';
import { AidConfigurationModel } from 'src/app/model/modules-model/aid-configuration.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';

@Injectable({
  providedIn: 'root',
})
export class AidConfigDispatch {
  @Dispatch()
  public _AidConfigGetDispatch() {
    return new AidConfigGet();
  }

  @Dispatch()
  public _AidConfigAddDispatch(data: AidConfigurationModel) {
    return new AidConfigAdd(data);
  }

  @Dispatch()
  public _AidConfigUpdateDispatch(payload: AidConfigurationModel) {
    return new AidConfigUpdate(payload);
  }

  @Dispatch()
  public _AidConfigDeleteDispatch(id: number) {
    return new AidConfigDelete(id);
  }

  @Dispatch()
  public _AidConfigSuccessStateDispatch(message: HttpResponseData<any>) {
    return new AidConfigSuccessState(message);
  }

  @Dispatch()
  public _AidConfigErrorStateDispatch(message: HttpResponseData<any>) {
    return new AidConfigErrorState(message);
  }
}
