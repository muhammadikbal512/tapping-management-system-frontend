import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  AcquirerAlertGet,
  AcquirerAlertAdd,
  AcquirerAlertDelete,
  AcquirerAlertUpdate,
  AcquirerAlertSuccessState,
  AcquirerAlertErrorState,
} from './acquirer-alert.action';
import { AcquirerAlertModel } from 'src/app/model/modules-model/acquirer-alert.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
    providedIn: 'root'
})
export class AcquirerAlertDispatch {
    @Dispatch()
    public _AcquirerAlertGetDispatch() {
        return new AcquirerAlertGet();
    }

    @Dispatch()
    public _AcquirerAlertAddDispatch(payload: AcquirerAlertModel) {
        return new AcquirerAlertAdd(payload);
    }

    @Dispatch()
    public _AcquirerAlertDeleteDispatch(id: number) {
        return new AcquirerAlertDelete(id)
    }

    @Dispatch()
    public _AcquirerAlertUpdateDispatch(id: number, payload: FormData, stateData: AcquirerAlertModel) {
        return new AcquirerAlertUpdate(id, payload, stateData);
    }

    @Dispatch()
    public _AcquirerAlertSuccessState(message: CustomHttpResponseModel) {
        return new AcquirerAlertSuccessState(message);
    }

    @Dispatch()
    public _AcquirerAlertErrorState(message: CustomHttpResponseModel) {
        return new AcquirerAlertErrorState(message);
    }
}
