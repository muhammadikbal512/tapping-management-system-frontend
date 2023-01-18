import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  IsoConfigAdd,
  IsoConfigDelete,
  IsoConfigErrorState,
  IsoConfigGet,
  IsoConfigSuccessState,
  IsoConfigUpdate,
} from './iso-config.action';
import { IsoConfigurationModel } from 'src/app/model/modules-model/iso-configuration.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';

@Injectable({
  providedIn: 'root',
})
export class IsoConfigDispatch {
  constructor() {}

  @Dispatch()
  public _IsoConfigGetDispatch() {
    return new IsoConfigGet();
  }

  @Dispatch()
  public _IsoConfigAddDispatch(payload: IsoConfigurationModel) {
    return new IsoConfigAdd(payload);
  }

  @Dispatch()
  public _IsoConfigDeleteDispatch(id: number) {
    return new IsoConfigDelete(id);
  }

  @Dispatch()
  public _IsoConfigUpdateDispatch(payload: IsoConfigurationModel) {
    return new IsoConfigUpdate(payload);
  }

  @Dispatch()
  public _IsoConfigSuccessDispatch(message: HttpResponseData<any>) {
    return new IsoConfigSuccessState(message);
  }

  @Dispatch()
  public _IsoConfigErrorDispatch(message: HttpResponseData<any>) {
    return new IsoConfigErrorState(message);
  }
}
