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
  public _IsoConfigUpdateDispatch(
    id: number,
    payload: FormData,
    stateData: IsoConfigurationModel
  ) {
    return new IsoConfigUpdate(id, payload, stateData);
  }

  @Dispatch()
  public _IsoConfigSuccessDispatch(message: CustomHttpResponseModel) {
    return new IsoConfigSuccessState(message);
  }

  @Dispatch()
  public _IsoConfigErrorDispatch(message: CustomHttpResponseModel) {
    return new IsoConfigErrorState(message);
  }
}
