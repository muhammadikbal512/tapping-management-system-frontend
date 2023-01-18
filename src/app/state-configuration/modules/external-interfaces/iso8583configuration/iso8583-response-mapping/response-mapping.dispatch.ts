import { ResponseMappingModel } from 'src/app/model/modules-model/response-mapping.model';
import {
  ResponseMappingAdd,
  ResponseMappingDelete,
  ResponseMappingGet,
  ResponseMappingErrorState,
  ResponseMappingSuccessState,
  ResponseMappingUpdate,
  ResponseMappingGetIsoConfig,
} from './response-mapping.action';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';

@Injectable({
  providedIn: 'root',
})
export class ResponseMappingDispatch {
  @Dispatch()
  public _ResponseMappingGetDispatch() {
    return new ResponseMappingGet();
  }

  @Dispatch()
  public _ResponseMappingGetIsoConfigDispatch() {
    return new ResponseMappingGetIsoConfig();
  }

  @Dispatch()
  public _ResponseMappingAddDispatch(payload: ResponseMappingModel) {
    return new ResponseMappingAdd(payload);
  }

  @Dispatch()
  public _ResponseMappingDeleteDispatch(id: number) {
    return new ResponseMappingDelete(id);
  }

  @Dispatch()
  public _ResponseMappingUpdateDispatch(payload: ResponseMappingModel) {
    return new ResponseMappingUpdate(payload);
  }

  @Dispatch()
  public _ResponseMappingSuccessState(message: HttpResponseData<any>) {
    return new ResponseMappingSuccessState(message);
  }

  @Dispatch()
  public _ResponseMappingErrorState(message: HttpResponseData<any>) {
    return new ResponseMappingErrorState(message);
  }
}
