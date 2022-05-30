import {
  AlertIssuerGet,
  AlertIssuerAdd,
  AlertIssuerDelete,
  AlertIssuerUpdate,
  AlertIssuerSuccessState,
  AlertIssuerErrorState,
} from './alert-issuer.action';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Injectable } from '@angular/core';
import { AlertIssuerModel } from 'src/app/model/modules-model/alert-issuer.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
    providedIn: 'root'
})
export class AlertIssuerDispatch {
    @Dispatch()
    public _AlertIssuerGetDispatch() {
        return new AlertIssuerGet();
    }

    @Dispatch()
    public _AlertIssuerAddDispatch(payload: AlertIssuerModel) {
        return new AlertIssuerAdd(payload);
    }

    @Dispatch()
    public _AlertIssuerDeleteDispatch(id: number) {
        return new AlertIssuerDelete(id);
    }

    @Dispatch()
    public _AlertIssuerUpdateDispatch(id: number, payload: FormData, stateData: AlertIssuerModel) {
        return new AlertIssuerUpdate(id, payload, stateData);
    }

    @Dispatch()
    public _AlertIssuerSuccessStateDispatch(message: CustomHttpResponseModel) {
        return new AlertIssuerSuccessState(message);
    }

    @Dispatch()
    public _AlertIssuerErrorStateDispatch(message: CustomHttpResponseModel) {
        return new AlertIssuerErrorState(message);
    }
}
