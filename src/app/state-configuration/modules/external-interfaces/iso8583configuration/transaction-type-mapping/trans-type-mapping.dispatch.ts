import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  TransTypeGetIsoConfig,
  TransTypeMappingAdd,
  TransTypeMappingDelete,
  TransTypeMappingErrorState,
  TransTypeMappingGet,
  TransTypeMappingSuccessState,
  TransTypeMappingUpdate,
} from './trans-type-mapping.action';
import { TransactionTypeModel } from 'src/app/model/modules-model/transaction-type.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';

@Injectable({
  providedIn: 'root',
})
export class TransTypeMappingDispatch {
  @Dispatch()
  public _TransactionTypeMappingGetDispatch() {
    return new TransTypeMappingGet();
  }

  @Dispatch()
  public _TransactionTypeMappingGetIsoConfig() {
    return new TransTypeGetIsoConfig();
  }

  @Dispatch()
  public _TransactionTypeMappingAddDispatch(data: TransactionTypeModel) {
    return new TransTypeMappingAdd(data);
  }

  @Dispatch()
  public _TransactionTypeMappingUpdateDispatch(payload: TransactionTypeModel) {
    return new TransTypeMappingUpdate(payload);
  }

  @Dispatch()
  public _TransactionTypeMappingDeleteDispatch(id: number) {
    return new TransTypeMappingDelete(id);
  }

  @Dispatch()
  public _TransactionTypeMappingSuccessStateDispatch(
    message: HttpResponseData<any>
  ) {
    return new TransTypeMappingSuccessState(message);
  }

  @Dispatch()
  public _TransactionTypeMappingErrorStateDispatch(
    message: HttpResponseData<any>
  ) {
    return new TransTypeMappingErrorState(message);
  }
}
