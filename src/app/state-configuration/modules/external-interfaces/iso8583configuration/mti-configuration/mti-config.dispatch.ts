import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  MtiConfigAdd,
  MtiConfigDelete,
  MtiConfigErrorState,
  MtiConfigGet,
  MtiConfigSuccessState,
  MtiConfigUpdate,
} from './mti-config.action';
import { MtiConfigurationModel } from 'src/app/model/modules-model/mti-configuration.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';

@Injectable({
  providedIn: 'root',
})
export class MtiConfigDispatch {
  constructor() {}

  @Dispatch()
  public _MtiConfigGetDispatch() {
    return new MtiConfigGet();
  }

  @Dispatch()
  public _MtiConfigAddDispatch(data: MtiConfigurationModel) {
    return new MtiConfigAdd(data);
  }

  @Dispatch()
  public _MtiConfigUpdateDispatch(payload: MtiConfigurationModel) {
    return new MtiConfigUpdate(payload);
  }

  @Dispatch()
  public _MtiConfigDeleteDispatch(id: number) {
    return new MtiConfigDelete(id);
  }

  @Dispatch()
  public _MtiConfigSuccessStateDispatch(message: HttpResponseData<any>) {
    return new MtiConfigSuccessState(message);
  }

  @Dispatch()
  public _MtiConfigErrorStateDispatch(message: HttpResponseData<any>) {
    return new MtiConfigErrorState(message);
  }
}
