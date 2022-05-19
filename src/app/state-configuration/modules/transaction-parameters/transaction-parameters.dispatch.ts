import {
  TransactionParametersGet,
  TransactionParametersAdd,
  TransactionParametersUpdate,
  TransactionParametersDelete,
  TransactionParametersSuccessState,
  TransactionParametersErrorState
} from './transaction-parameters.action';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { TransactionParametersModel } from 'src/app/model/modules-model/transaction-parameters';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Injectable({
    providedIn: 'root'
})
export class TransactionParametersDispatch {

    @Dispatch()
    public _TransactionParametersGetDispatch() {
        return new TransactionParametersGet
    }

    @Dispatch()
    public _TransactionParametersAddDispatch(payload: TransactionParametersModel) {
        return new TransactionParametersAdd(payload)
    }

    @Dispatch()
    public _TransactionParametersUpdateDipatch(id: number, payload: FormData, stateData: TransactionParametersModel) {
        return new TransactionParametersUpdate(id, payload, stateData)
    }

    @Dispatch()
    public _TransactionParametersDeleteDispatch(id: number) {
        return new TransactionParametersDelete(id)
    }

    @Dispatch()
    public _TransactionParametersSuccessDispatch(message: CustomHttpResponseModel) {
        return new TransactionParametersSuccessState(message)
    }

    @Dispatch()
    public _TransactionParametersErrorDispatch(message: CustomHttpResponseModel) {
        return new TransactionParametersErrorState(message)
    }
}
