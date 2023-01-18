import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  HeaderConfigGet,
  HeaderConfigAdd,
  HeaderConfigDelete,
  HeaderConfigErrorState,
  HeaderConfigSuccessState,
  HeaderConfigUpdate,
  HeaderIsoConfigGet,
  HeaderEncodingGet,
  HeaderFieldFormatGet,
} from './header-config.action';
import { HeaderConfigurationModel } from 'src/app/model/modules-model/header-configuration.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';

@Injectable({
  providedIn: 'root',
})
export class HeaderConfigDispatch {
  @Dispatch()
  public _HeaderConfigGetDispatch() {
    return new HeaderConfigGet();
  }

  @Dispatch()
  public _HeaderIsoConfigGetDispatch() {
    return new HeaderIsoConfigGet();
  }

  @Dispatch()
  public _HeaderFieldFormatGetDispatch() {
    return new HeaderFieldFormatGet();
  }

  @Dispatch()
  public _HeaderEncodingGetDispatch() {
    return new HeaderEncodingGet();
  }

  @Dispatch()
  public _HeaderConfigAdd(payload: HeaderConfigurationModel) {
    return new HeaderConfigAdd(payload);
  }

  @Dispatch()
  public _HeaderConfigUpdate(payload: HeaderConfigurationModel) {
    return new HeaderConfigUpdate(payload);
  }

  @Dispatch()
  public _HeaderConfigDelete(id: number) {
    return new HeaderConfigDelete(id);
  }

  @Dispatch()
  public _HeaderConfigSuccessState(message: HttpResponseData<any>) {
    return new HeaderConfigSuccessState(message);
  }

  @Dispatch()
  public _HeaderConfigErrorState(message: HttpResponseData<any>) {
    return new HeaderConfigErrorState(message);
  }
}
