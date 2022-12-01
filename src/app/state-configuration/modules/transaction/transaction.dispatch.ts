import {
  TransactionGet,
  TransactionSuccessState,
  TransactionErrorState,
  EventCollectorsGet,
} from './transaction.action';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Injectable } from '@angular/core';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionDispatch {
  @Dispatch()
  public _TransactionGetDispatch() {
    return new TransactionGet();
  }

  @Dispatch()
  public _EventCollectorsGetDispatch() {
    return new EventCollectorsGet();
  }

  @Dispatch()
  public _TransactionSuccessStateDispatch(message: CustomHttpResponseModel) {
    return new TransactionSuccessState(message);
  }

  @Dispatch()
  public _TransactionErrorStateDispatch(message: CustomHttpResponseModel) {
    return new TransactionErrorState(message);
  }
}
