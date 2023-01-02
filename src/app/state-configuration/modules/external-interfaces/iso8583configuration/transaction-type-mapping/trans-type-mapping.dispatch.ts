import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  TransTypeMappingAdd,
  TransTypeMappingDelete,
  TransTypeMappingErrorState,
  TransTypeMappingGet,
  TransTypeMappingSuccessState,
  TransTypeMappingUpdate,
} from './trans-type-mapping.action';
import { TransactionTypeModel } from 'src/app/model/modules-model/transaction-type.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
  providedIn: 'root',
})
export class TransTypeMappingDispatch {
  @Dispatch()
  public _TransactionTypeMappingGetDispatch() {
    return new TransTypeMappingGet();
  }

  @Dispatch()
  public _TransactionTypeMappingAddDispatch(data: TransactionTypeModel) {
    return new TransTypeMappingAdd(data);
  }

  @Dispatch()
  public _TransactionTypeMappingUpdateDispatch(
    id: number,
    data: FormData,
    stateData: TransactionTypeModel
  ) {
    return new TransTypeMappingUpdate(id, data, stateData);
  }

  @Dispatch()
  public _TransactionTypeMappingDeleteDispatch(id: number) {
    return new TransTypeMappingDelete(id);
  }

  @Dispatch()
  public _TransactionTypeMappingSuccessStateDispatch(
    message: CustomHttpResponseModel
  ) {
    return new TransTypeMappingSuccessState(message);
  }

  @Dispatch()
  public _TransactionTypeMappingErrorStateDispatch(
    message: CustomHttpResponseModel
  ) {
    return new TransTypeMappingErrorState(message);
  }
}
