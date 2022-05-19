import { ResponseMappingModel } from 'src/app/model/modules-model/response-mapping.model';
import {
  ResponseMappingAdd,
  ResponseMappingDelete,
  ResponseMappingGet,
  ResponseMappingErrorState,
  ResponseMappingSuccessState,
  ResponseMappingUpdate,
} from './response-mapping.action';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Injectable({
  providedIn: 'root',
})
export class ResponseMappingDispatch {
  @Dispatch()
  public _ResponseMappingGetDispatch() {
    return new ResponseMappingGet();
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
  public _ResponseMappingUpdateDispatch(
    id: number,
    payload: FormData,
    stateData: ResponseMappingModel
  ) {
    return new ResponseMappingUpdate(id, payload, stateData);
  }

  @Dispatch()
  public _ResponseMappingSuccessState(message: CustomHttpResponseModel) {
      return new ResponseMappingSuccessState(message);
  }

  @Dispatch()
  public _ResponseMappingErrorState(message: CustomHttpResponseModel) {
      return new ResponseMappingErrorState(message);
  }
}
