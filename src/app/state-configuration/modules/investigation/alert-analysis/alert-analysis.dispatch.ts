import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  AlertAnalysisGet,
  AlertAnalysisAdd,
  AlertAnalysisDelete,
  AlertAnalysisErrorState,
  AlertAnalysisSuccessState,
  AlertAnalysisUpdate,
} from './alert-analysis.action';
import { AlertAnalysisModel } from 'src/app/model/modules-model/alert-analysis.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class AlertAnalysisDispatch {
    @Dispatch()
    public _AlertAnalysisGetDispatch() {
        return new AlertAnalysisGet();
    }

    @Dispatch()
    public _AlertAnalysisAddDispatch(payload: AlertAnalysisModel) {
        return new AlertAnalysisAdd(payload);
    }

    @Dispatch()
    public _AlertAnalysisDeleteDispatch(id: number) {
        return new AlertAnalysisDelete(id);
    }

    @Dispatch()
    public _AlertAnalysisUpdateDispatch(id: number, payload: FormData, stateData: AlertAnalysisModel) {
        return new AlertAnalysisUpdate(id, payload, stateData);
    }

    @Dispatch()
    public _AlertAnalysisSuccessState(message: CustomHttpResponseModel) {
        return new AlertAnalysisSuccessState(message)
    }

    @Dispatch()
    public _AlertAnalysisErrorState(message: CustomHttpResponseModel) {
        return new AlertAnalysisErrorState(message)
    }
}
